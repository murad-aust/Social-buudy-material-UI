import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../PostDetail/PostDetail';
import Comment from '../Comment/Comment';


const Detail = () => {
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
        <div >
            <div>
              <PostDetail post={post}></PostDetail>
            </div>
            <div>
            <h1 style={{textAlign:'center'}}>Comments</h1>
                {
                comments.map(comment => <Comment comment={comment}></Comment>)

                }
               
            </div>
        </div>
    );
};

export default Detail;