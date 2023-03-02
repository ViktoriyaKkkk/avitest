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
                    let user = users.filter((user)=>user.id === post.userId)[0]
                    return <div key={post.id} className={'new'}>
                        <h1>{post.title}</h1>
                        <h3>{user.username}</h3>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </div>
    );
};

export default PostsList;