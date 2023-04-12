import {useEffect, useState} from 'react';
import {fetchPosts} from "../http/postsAPI";

const usePosts = () => {
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    const reload = () => {
        fetchPosts().then(data => setPosts(data), (error)=>{
            setError(error.message)
        })
    }
    useEffect(reload, [])
    return [posts, error,reload]
};

export default usePosts;