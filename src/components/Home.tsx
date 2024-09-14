import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container-home">
      <div className="text-container">
      <h2>Тестовое задание от 
        <a href="https://hh.ru/resume/f021fe8aff0cc073d50039ed1f7a76774f5530?hhtmFrom=resume_list" target="_blank"> Кулиевой Маи</a>
      </h2>
      <h3>На позицию стажера</h3>
      <div>
        <Link className='post-card' to="/posts">Go to Posts</Link>
      </div>
      <h3>Данные из публичного API:</h3>
      <div>
        <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">https://jsonplaceholder.typicode.com/posts</a>
      </div>
      </div>
      <div className="image-container">
        <img src='https://salfa.ru/wp-content/themes/stike/assets/img/shape/19.png' alt="Afla image"></img>
      </div>
    </div>
  );
};

export default Home;
