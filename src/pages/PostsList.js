import React, {useMemo, useState} from 'react';
import '../styles/postsList.css'
import {usePostsEffect} from "../utils/usePostsEffect";
import {useUsersEffect} from "../utils/useUsersEffect";
import {Button, Card} from "react-bootstrap";
import {Pagination} from "../components/Pagination";
import {useNavigate} from "react-router-dom";

const PostsList = () => {
    const navigate = useNavigate()

    const [postsUpdate, setPostsUpdate] = useState(false)

    let posts = usePostsEffect(postsUpdate)
    let users = useUsersEffect()

    const PageSize = 10;
    const lastPage = useMemo(()=>Math.ceil(posts.length / PageSize), [posts, PageSize]);

    const [currentPage, setCurrentPage] = useState(1);

    const currentPosts = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize; //индекс первого элемента на странице
        const lastPageIndex = firstPageIndex + PageSize; //индекс последнего элемента(не выводится)
        return posts?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, posts]);

    const usersById = useMemo(()=>{
        return users?.reduce((prev,current)=>{
            return {...prev, [current.id]: current}
        },{})
    }, [users])

    return (
        <div className={"container_news"}>
            <Button className={'news-update-button'} variant="success" onClick={()=>setPostsUpdate(!postsUpdate)}>Update posts</Button>
            {
                currentPosts?.map((post)=>{
                    return <Card key={post.id} className={'new mb-2'} onClick={()=>navigate('/post/' + post.id)}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className={"mb-2 text-muted"}>{usersById[post.userId]['username']}</Card.Subtitle>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
            <Pagination currentPage={currentPage} lastPage={lastPage} pageSize={PageSize} totalCount={posts.length} onPageChange={page => setCurrentPage(page)}/>
        </div>
    );
};

export default PostsList;