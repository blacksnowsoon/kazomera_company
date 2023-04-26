import React, { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Requieres from './pages/requieres/req';
import axios from 'axios';
import News from './components/articles_news/news';
import { ProjectsArts } from './components/articles_projects/projectsArts';
import ContribsArts from './components/articles_contributions/contribsArts';
import InvestsArts from './components/articles_investments/investsArts';
import Account from './pages/account/account';
import Login from './pages/account/login';
import Signup from './pages/account/signup';
import Footer from './components/footer/footer';
import Recover from './pages/account/recover';

export default function App() {

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/', {method:"GET"})
  //   .then(response => console.log(response))
  //   // .then(data => console.log(data))
  // })

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<News />} />
          <Route path="projects" element={<ProjectsArts />} />
          <Route path="contributions" element={<ContribsArts />} />
          <Route path="investments" element={<InvestsArts />} />
          <Route path="projects" />
          <Route path="deals" />
          <Route path="interests" />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='/requieres' element={<Requieres />} />
        <Route path="/account" element={<Account />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="recover" element={<Recover />} />
        </Route>
        <Route path='*' element={<>No site !!<Link to="/">Go back</Link></>} />
      </Routes>
      <Footer />
    </>
  );
}

// 0 1px .625rem 0 hsla(210, 7%, 22%, .06), 0 .125rem .25rem 0 hsla(210, 7%, 22%, .08)