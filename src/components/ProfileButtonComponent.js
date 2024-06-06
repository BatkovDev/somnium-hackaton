import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileButtonComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
      setIsMenuOpen(false);
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <>
        {!isLoggedIn && (
          <Link to="/login">
            <a href="javascript:void(0)" className="signin">Войти</a>
          </Link>
        )}
  
        {isLoggedIn && (
          <div className="profile-menu">
            <button className="profile-button" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </button>
  
            {isMenuOpen && (
              <div className="menu-dropdown">
                <Link to="/profile">
                    <button>Профиль</button>
                </Link>
                <button onClick={handleLogout}>Выйти</button>
              </div>
            )}
          </div>
        )}
      </>
    );
  };

export default ProfileButtonComponent;
