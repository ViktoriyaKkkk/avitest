import {useEffect, useState} from 'react';
import {fetchComments} from "../http/commentsAPI";

export const useCommentsEffect = (id, commentsUpdate) => {
    const [comments, setComments] = useState({})
    useEffect(()=>{
        fetchComments(id).then(data => setComments(data), (error)=>{
            console.log(error)
            return error
        })
    }, [id, commentsUpdate])
    return comments;
};