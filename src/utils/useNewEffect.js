import {useEffect, useState} from 'react';
import {fetchTheNew} from "../http/theNewAPI";

export const useNewEffect = (id) => {
    const [theNew, setTheNew] = useState({})
    const [error, setError] = useState(null)
    const load = ()=>{
        fetchTheNew(id).then(data => setTheNew(data), (error)=>{
            setError(error)
        })
    }
    useEffect(load, [id])
    return [theNew, error];
};