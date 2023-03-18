import {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

const usePosts = (postsUpdate) => {
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetchPosts().then(data => setPosts(data), (error)=>{
            setError(error)
        })

    }, [postsUpdate])
    return ()=>{return [posts, error]}
};

export default usePosts;