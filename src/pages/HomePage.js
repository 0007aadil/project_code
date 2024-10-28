import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.'); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.length === 0 ? ( // Check for empty posts
        <p>No posts available.</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default HomePage;
