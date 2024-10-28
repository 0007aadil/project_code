import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/posts/${postId}/comments`, { text: commentText });
      onCommentSubmit(response.data);
      setCommentText('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        required
        style={{ width: '100%', padding: '10px', borderRadius: '4px' }}
        maxLength={200} // Optional character limit
      />
      <button type="submit" style={{ marginTop: '10px' }}>Add Comment</button>
    </form>
  );
};

export default CommentForm;
