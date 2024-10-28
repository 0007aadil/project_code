import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/admin/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setErrorMessage('Error fetching posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`/api/posts/${postId}`);
        setPosts(posts.filter(post => post.id !== postId));
        alert('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete the post. Please try again.');
      }
    }
  };

  if (loading) return <div>Loading posts...</div>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Posts</h3>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{post.title}</td>
              <td>
                <button 
                  style={{ 
                    backgroundColor: '#ff4d4d', 
                    color: 'white', 
                    border: 'none', 
                    padding: '5px 10px', 
                    cursor: 'pointer' 
                  }} 
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
