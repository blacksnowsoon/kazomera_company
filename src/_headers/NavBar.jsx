import React from 'react'
import MainNav from './below-nav/mainNav';
import TopNav from './top-nav/topNav';

// this component incloud the 2 components at the top of the pages
// top nav> search-bar, menu in responsive design, the notification Btn, the language options
// below nav > main meddle menu which navigat to main pages [news, investments, compony Page, Projects, Contributions] 

const NavBar = () => {
  return (
    <>
      <TopNav />
      <MainNav />
    </>
  )
}


export default NavBar;