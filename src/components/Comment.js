import React from 'react';
import RateComment from './RateComment';

const Comment = ({ comment }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <p>{comment.text}</p>
      <RateComment commentId={comment.id} />
      <p>Rating: {comment.rating}</p>
    </div>
  );
};

export default Comment;
