import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';
import Comment from './Comment';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      setPost(response.data);
      setComments(response.data.comments);
    };

    fetchPost();
  }, [id]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>{post.title}</h2>
      <div style={{ marginBottom: '20px' }}>{post.content}</div>
      <CommentForm postId={post.id} onCommentSubmit={handleCommentSubmit} />
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
