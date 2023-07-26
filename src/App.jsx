import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './app/_sidebar/SideBar';
//  make sure to divid the imports to 2 sections at the top the packages imports
//  then below the generated modules and componenets
// just to make the code orginized and easy to read

import Layout from 'app/_layout/Layout';
import NewsList from 'app/_main/_news/NewsList';
import ProjectsList from 'app/_main/_projects/projectsList';
import ContributionsList from 'app/_main/_contributions/ContributionsList';


// All context values will be passed from the app componenet
export default function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<NewsList />} />
        <Route path='projects' element={<ProjectsList />} />
        <Route path='contributions' element={<ContributionsList />} />
      </Route>
    </Routes>
  );
}
  