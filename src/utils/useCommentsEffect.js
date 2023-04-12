import {useEffect, useState} from 'react';
import {fetchComments} from "../http/commentsAPI";

export const useCommentsEffect = (id) => {
    const [comments, setComments] = useState({})
    const [error, setError] = useState(null)
    const reload = ()=>{
        fetchComments(id).then(data => setComments(data), (error)=>{
            setError(error)

        })
    }
    useEffect(reload, [id])
    return [comments, error, reload];
};