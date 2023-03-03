import React, {useMemo} from 'react';
import '../styles/postsList.css'
import {usePostsEffect} from "../utils/usePostsEffect";
import {useUsersEffect} from "../utils/useUsersEffect";

const PostsList = () => {
    let posts = usePostsEffect()
    let users = useUsersEffect()
    const usersById = useMemo(()=>{
       return users?.reduce((prev,current)=>{
            return {...prev, [current.id]: current}
        },{})
    }, [users])
    return (
        <div className={'container'}>
            {
                posts.map((post)=>{
                    return <div key={post.id} className={'new'}>
                        <h1>{post.title}</h1>
                        <h3>{usersById[post.userId]['username']}</h3>
                        <p>{post.body}</p>
                    </div>
                })
            }
        </div>
    );
};

export default PostsList;