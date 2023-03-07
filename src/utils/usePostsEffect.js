import {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

export const usePostsEffect = (postsUpdate) => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data), (error)=>{
            console.log(error)
            return error
        })
    }, [postsUpdate])
    // console.log(postsUpdate)
    return posts;
};