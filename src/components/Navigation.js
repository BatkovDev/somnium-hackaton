import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileButtonComponent from '../components/ProfileButtonComponent';
import Logotype from '../img/logo2.jpeg';

const Navigation = ({ match, title, description }) => {
    return (
        <nav>
            <Link to="/" className='logo'><img src={Logotype} alt="Logo" /></Link>
            
            <div className="links">
                <Link to="/myresume">Мое резюме</Link>
                <Link to="/negotiations">Отклики</Link>
                <Link to="/notifications"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg></Link>
                <div className="switch-theme">
                    <label className="switch">
                        <input type="checkbox" id="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <ProfileButtonComponent/>
            </div>
        </nav>
    );
};

export default Navigation;
