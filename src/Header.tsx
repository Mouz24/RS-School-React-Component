import { Link, Route, Router, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import './Header.css';
import Movies from './Movies';
import NotFound from './NotFound';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header">
        <div className="container">
            <nav className="nav-bar">
                <div className="logo">
                    <p id='logo-text'><Link to="/" className='nav-link'>Movies</Link></p>
                </div>
                <ul className="nav-list" id="header-nav">
                    <li className="nav-item"><Link to="/aboutus" className='nav-link'>About us</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header;
