import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from 'app/_headers/Header'
import SideBar from 'app/_sidebar/SideBar'


const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <aside className='right-sidebar'>
        <SideBar />
      </aside>
      
      <main>
        <Outlet />
      </main>

      <footer>
      </footer>
    </>
  )
}

export default Layout