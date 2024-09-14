import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPosts } from '../store/postsSlice';
import { AppDispatch } from '../store/store';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const posts = useSelector((state: any) => state.posts.posts);
  const post = posts.find((p: any) => p.id === Number(id));

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!post) return <div>Пост не найден</div>;

  return (
    <div className='post-details'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
      <button onClick={() => navigate('/')}>На главную</button>
    </div>
  );
};

export default PostDetail;
