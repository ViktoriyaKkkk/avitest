import React, {useMemo} from 'react';
import '../styles/postsList.css'
import {useParams} from "react-router-dom";
import {useNewEffect} from "../utils/useNewEffect";
import {useUsersEffect} from "../utils/useUsersEffect";
import {Card} from "react-bootstrap";
import {useCommentsEffect} from "../utils/useCommentsEffect";

const Post = () => {
    const {id} = useParams()
    let theNew = useNewEffect(id)
    let users = useUsersEffect()
    let comments = useCommentsEffect(id)
    let usersById = useMemo(()=>{
        return users?.reduce((prev,current)=>{
            return {...prev, [current.id]: current}
        },{})
    }, [users])
    let postUsername = useMemo(()=>{
        if (typeof usersById[theNew.userId] !== 'undefined') {
            return usersById[theNew.userId]['username']
        }
    },[usersById, theNew.userId])

    return (
        <div className={'container_news'}>
            <Card border="light" className={'mb-3'}>
                <Card.Header>{postUsername}</Card.Header>
                <Card.Body>
                    <Card.Title>{theNew.title}</Card.Title>
                    <Card.Text>{theNew.body}</Card.Text>
                </Card.Body>
            </Card>
            <div className={'container_comments'}></div>
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
    );
};

export default Post;