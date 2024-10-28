import React from 'react';
import axios from 'axios';

const RateComment = ({ commentId }) => {
  const handleRating = async (rating) => {
    await axios.post(`/api/comments/${commentId}/rate`, { rating });
    // Implement any necessary state updates or UI changes
  };

  return (
    <div>
      <button onClick={() => handleRating(1)}>Rate 1</button>
      <button onClick={() => handleRating(2)}>Rate 2</button>
      <button onClick={() => handleRating(3)}>Rate 3</button>
      <button onClick={() => handleRating(4)}>Rate 4</button>
      <button onClick={() => handleRating(5)}>Rate 5</button>
    </div>
  );
};

export default RateComment;
