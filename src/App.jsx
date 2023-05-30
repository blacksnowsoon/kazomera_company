import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Requieres from './pages/requieres/req';
import Create from './pages/create/create';

import ArticlesNews from './components/articles_news/articles_news';
import ArticlesProjects from './components/articles_projects/articles_projects';
import ArticlesContributions from './components/articles_contributions/articles_cont';
import ArticlesInvestments from './components/articles_investments/articles_invest';

import Account from './pages/account/account';
import Login from './pages/account/login';
import Signup from './pages/account/signup';
import Recover from './pages/account/recover';
import Reserved from './pages/reserved/reserved';
import Tooltip from './components/tooltip/tooltip';
import Footer from './components/footer/footer';

import ProjectSector from './pages/create/project/project';
import ContribSector from './pages/create/contrib/contrib';
import InvestSector from './pages/create/invest/invest';


export default function App() {


  return (
    <>
      <Tooltip />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<ArticlesNews />} />
          <Route path="projects" element={<ArticlesProjects />} />
          <Route path="contributions" element={<ArticlesContributions />} />
          <Route path="investments" element={<ArticlesInvestments />} />
          <Route path="projects" />
          <Route path="deals" />
          <Route path="interests" />
        </Route>
        <Route path='profile' element={<Profile />} />
        <Route path='requieres' element={<Requieres />} />
        <Route path="account" element={<Account />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="recover" element={<Recover />} />
        </Route>
        <Route path="reserved" element={<Reserved />} />
        <Route path="create" element={<Create />}>
          <Route path="project" element={<ProjectSector />} />
          <Route path="contribution" element={<ContribSector />} />
          <Route path="investment" element={<InvestSector />} />
        </Route>
        <Route path='*' element={<>No site !!<Link to="/">Go back</Link></>} />
      </Routes>
      <Footer />
    </>
  );
}

// 0 1px .625rem 0 hsla(210, 7%, 22%, .06), 0 .125rem .25rem 0 hsla(210, 7%, 22%, .08)