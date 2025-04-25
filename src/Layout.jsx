import React from 'react'
import { Outlet , useLocation} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function Layout() {
  const location = useLocation();
  const showNavbar = location.pathname === "/";
  const showFooter = location.pathname === "/";

  return (
    <div>
      {showNavbar && <Navbar />} 
      <Outlet/>
      {showFooter && <Footer/>}
    </div>
  )
}

export default Layout
