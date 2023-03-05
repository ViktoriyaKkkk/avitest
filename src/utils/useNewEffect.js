import {useEffect, useState} from 'react';
import {fetchTheNew} from "../http/theNewAPI";

export const useNewEffect = (id) => {
    const [theNew, setTheNew] = useState({})
    useEffect(()=>{
        fetchTheNew(id).then(data => setTheNew(data), (error)=>{
            console.log(error)
            return error
        })
    }, [id])
    return theNew;
};