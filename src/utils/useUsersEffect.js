import {useEffect, useState} from 'react';
import {fetchUsers} from "../http/usersApi";

export const useUsersEffect = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetchUsers().then(data => setUsers(data), (error)=>{
            console.log(error)
            return error
        })
    }, [])
    return users;
};
