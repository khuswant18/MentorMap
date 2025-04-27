import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (


    <header class="header-container">
        <nav class="nav-container">

           <NavLink to='/'> <div class="nav-logo">
                <img src="./main-logo-removebg.png" alt="" class="main-logo"/>
            </div>
        </NavLink>
            
            <div class="nav-links">
                <NavLink to='/explorecolleges' className='nav-link'>Explore Colleges</NavLink>
                <NavLink to='/findmentor' className='nav-link'>Find Mentors</NavLink>
                <NavLink to='/about' className='nav-link'>About Us</NavLink>
            </div>


            <div className="button">
                <NavLink to='auth' className='login-but'>Login</NavLink>
            </div>
            

        </nav>
    </header>

    

  )
}

export default Navbar 





