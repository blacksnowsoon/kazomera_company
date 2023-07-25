import React, {useContext, createContext, useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './_sidebar/SideBar';
//  make sure to divid the imports to 2 sections at the top the packages imports
//  then below the generated modules and componenets
// just to make the code orginized and easy to read

import NavBar from './app/_headers/Header';


const AppContext = createContext().Provider;

// All context values will be passed from the app componenet
export default function App() {
// declare the use state to add it to the context container
const [user, setUser] = useState(null);

  return (
    <AppContext value={{user, setUser}}>
      <header>
        <NavBar />
      </header>

      <aside className='right-sidebar'><SideBar /></aside>
      
      <main>
        <Outlet />
      </main>


      <footer>
      </footer>
    </AppContext>
  );
}
  // <Tooltip />
  //   <Routes>
  //     <Route path='/' element={<Home />}>
  //       <Route index element={<ArticlesNews />} />
  //       <Route path="projects" element={<ArticlesProjects />} />
  //       <Route path="contributions" element={<ArticlesContributions />} />
  //       <Route path="investments" element={<ArticlesInvestments />} />
  //       <Route path="projects" />
  //       <Route path="deals" />
  //       <Route path="interests" />
  //     </Route>

  //     <Route path='profile' element={<Profile />} />
      
  //     <Route path='requieres' element={<Requieres />} />
      
  //     <Route path="account" element={<Account />}>
  //       <Route path="login" element={<Login />} />
  //       <Route path="signup" element={<Signup />} />
  //       <Route path="recover" element={<Recover />} />
  //     </Route>

  //     <Route path="reserved" element={<Reserved />} />

  //     <Route path="create" element={<Create />}>
  //       <Route path="project" element={<ProjectSector />} />
  //       <Route path="contribution" element={<ContribSector />} />
  //       <Route path="investment" element={<InvestSector />} />
  //     </Route>
  //     <Route path='*' element={<>No site !!<Link to="/">Go back</Link></>} />
  //   </Routes>
  // <Footer />
// 0 1px .625rem 0 hsla(210, 7%, 22%, .06), 0 .125rem .25rem 0 hsla(210, 7%, 22%, .08)