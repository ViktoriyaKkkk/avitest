import React, {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

export const usePostsEffect = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data), (error)=>{
            console.log(error)
            return error
        })
    }, [])
    return posts;
};