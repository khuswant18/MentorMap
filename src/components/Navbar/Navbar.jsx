import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebase';
import { UserRound } from 'lucide-react';

const auth = getAuth(app);

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // new: for dropdown

  useEffect(() => {  
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setMenuOpen(false); // close menu after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <nav className="nav-container">
        <NavLink to="/">
          <div className="nav-logo">
            <img src="./main-logo-removebg.png" alt="Logo" className="main-logo" />
          </div>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/explorecolleges" className="nav-link">Explore Colleges</NavLink>
          <NavLink to="/findmentor" className="nav-link">Find Mentors</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
        </div>

        <div className="button">
          {user ? (
            <div className="user-icon-container">
              <UserRound onClick={toggleMenu} className="user-icon" />

              {menuOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout} className="logout-button">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/auth" className="login-but">Login</NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
