import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h3>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h3>
      </div>
    ))}
  </div>
);

export default PostList;
