import React, {useMemo} from 'react';
import '../styles/postsList.css'
import {useNavigate, useParams} from "react-router-dom";
import {useNewEffect} from "../utils/useNewEffect";
import {useUsersEffect} from "../utils/useUsersEffect";
import {Button, Card} from "react-bootstrap";
import {useCommentsEffect} from "../utils/useCommentsEffect";

const Post = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    const [theNew, errorTheNew] = useNewEffect(id)
    if ( errorTheNew !== null) {
        console.log(errorTheNew)
    }

    const [users, errorUsers] = useUsersEffect()
    if ( errorUsers !== null) {
        console.log(errorUsers)
    }

    const [comments, errorComments, reload] = useCommentsEffect(id)
    if ( errorComments !== null) {
        console.log(errorComments)
    }
    const usernamesById = useMemo(()=>{
        return users?.reduce((prev,current)=>{
            return {...prev, [current.id]: current['username']}
        },{})
    }, [users])

    return (
        <div className={'container_news'}>
            <Button className={'back-button'} variant="primary" onClick={()=>navigate('posts')}>Back to posts</Button>
            <Card border="light" className={'new mb-3'}>
                <Card.Header>{usernamesById[theNew.userId]}</Card.Header>
                <Card.Body>
                    <Card.Title>{theNew.title}</Card.Title>
                    <Card.Text>{theNew.body}</Card.Text>
                </Card.Body>
            </Card>
            <div className={'container_comments'}>
                <Button className={'mb-3'} variant="success" onClick={reload}>Update comments</Button>
                { Array.isArray(comments) &&
                    comments.map((comment)=>{
                        return <Card key={comment.id} className={'comment mb-2'}>
                            <Card.Body>
                                <Card.Title>{comment.name}</Card.Title>
                                <Card.Subtitle className={"mb-2 text-muted"}>{comment.email}</Card.Subtitle>
                                <Card.Text>{comment.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
        </div>
    );
};

export default Post;