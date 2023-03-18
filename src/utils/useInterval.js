import {useEffect, useRef, useState} from 'react';


const useInterval = (callback, delay) => {
    const savedCallback = useRef()
    const [postsInterval, setPostsInterval] = useState([])
    const [errorInterval, setErrorInterval] = useState(null)
    useEffect(()=>{
        savedCallback.current = callback
    }, [callback])

    useEffect(()=>{
        if (delay !== null) {
          const id = setInterval(()=>{
              let [posts,error] = savedCallback.current()
              setPostsInterval(posts)
              setErrorInterval(error)
              // console.log(posts)
          }, delay)
            return ()=>clearInterval(id)
        }
    }, [delay])
    // console.log(postsInterval)
    return [postsInterval, errorInterval]
};

export default useInterval;