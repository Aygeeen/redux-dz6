import React, {useEffect,useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/PostsSlice";
import Post from "../../componets/Post";
import PostSpinner from "../../componets/PostSpinner";

function PostsPage() {
    const {posts, preloader, error} = useSelector(state => state.postsReducer)
    const dispatch = useDispatch()
    const getPostFunc = () => {
        dispatch(getPosts())
    }
    useEffect(() => {
        getPostFunc()
    }, [])
    return (
        <div>
            {preloader ? <PostSpinner/> :
                error ? <h1>{error}</h1> :
                posts.slice(0, 10).map(post => <Post postInfo={post}/>)
            }
        </div>
    )
}

export default PostsPage