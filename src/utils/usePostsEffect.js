import {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

export const usePostsEffect = (postsUpdate) => {
    // const [prevIntervalId, setPrevIntervalIds] = useState(0)
    const [error, setError] = useState(null)
    // clearInterval(prevIntervalId)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data), (error)=>{
            setError(error)
        })
    }, [postsUpdate])
    return [posts, error];
};