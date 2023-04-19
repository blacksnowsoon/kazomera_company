import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Projects from './pages/projects/projects';
import Profile from './pages/profile/profile';
import Requieres from './pages/requieres/req';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Projects />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/requieres' element={<Requieres />} />
    </Routes>
  );
}