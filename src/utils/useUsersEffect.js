import {useEffect, useState} from 'react';
import {fetchUsers} from "../http/usersApi";

export const useUsersEffect = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const load = () => {
        fetchUsers().then(data => setUsers(data), (error)=>{
            setError(error.message)
        })
    }
    useEffect(load, [])
    return [users, error];
};
