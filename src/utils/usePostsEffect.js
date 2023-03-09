import {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

export const usePostsEffect = (postsUpdate) => {
    const [prevIntervalId, setPrevIntervalIds] = useState(0)
    clearInterval(prevIntervalId)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data), (error)=>{
            console.log(error)
            return error
        })
        let intervalId = setInterval(()=>{
            fetchPosts().then(data => setPosts(data), (error)=>{
                console.log(error)
                return error
            })
        }, 60000)
        setPrevIntervalIds(intervalId)
    }, [postsUpdate])
    return posts;
};