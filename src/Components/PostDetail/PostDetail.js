import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from '../PostContent/PostContent';
import Comment from '../Comment/Comment';


const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([])
    useEffect(() => {
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
 
    return (
        <div>
            <div>
                <h1>Posts</h1>
              <PostContent post={post}></PostContent>
            </div>
            <div>
                <h1>Comments</h1>
                {
                comments.map(comment => <Comment comment={comment}></Comment>)

                }
               
            </div>
        </div>
    );
};

export default PostDetail;