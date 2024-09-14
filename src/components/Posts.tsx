import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, toggleLike, deletePost } from '../store/postsSlice';
import { AppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading } = useSelector((state: any) => state.posts);
  const [showFavorites, setShowFavorites] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;

  const filteredPosts = showFavorites ? posts.filter((post: { liked: any; }) => post.liked) : posts;

  return (
    <div>
      <h2 className='title'>Посты</h2>
      <button className='favorites' onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? 'Показать все' : 'Показать избранные'}
      </button>
      <button className='favorites' onClick={() => navigate(`/`)}>На главную</button>
        <div className='posts-container'>

            {filteredPosts.map((post: any) => (
                <div className='post-card' key={post.id} onClick={() => {navigate(`/posts/${post.id}`)}}>
                <h3>{post.title.slice(0, 10)}...</h3>
                <p>{post.body.slice(0, 35)}...</p>
                    <div className='post-actions'>
                        <button className={`like-icon ${post.liked ? 'liked' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(toggleLike(post.id));
                        }}
                        >
                        ❤️ Like
                        </button>
                        <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(deletePost(post.id));
                        }}
                        >
                        🗑️ Delete
                        </button>
                    </div>
                </div>
            ))}
      </div>
    </div>
  );
};

export default Posts;
