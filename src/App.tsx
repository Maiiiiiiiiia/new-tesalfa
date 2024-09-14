import React from 'react';
import './App.css';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/:id" element={<PostDetail/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
