import React, {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";
import '../styles/postsList.css'
import {fetchUsers} from "../http/usersApi";

const PostsList = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data))
        fetchUsers().then(data => setUsers(data))
    }, [])
    return (
        <div className={'container'}>
            {
                posts.map((post)=>{
                    return <div key={post.id} className={'new'}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </div>
    );
};

export default PostsList;