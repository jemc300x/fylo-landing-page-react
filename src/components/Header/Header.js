import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Header.css';

const Header = () => (
  <header className='header'>
    <img src={logo} alt='Fylo'/>
    <ul className='header-navbar'>
      <li><a href="/">Features</a></li>
      <li><a href="/">Team</a></li>
      <li><a href="/">Sign In</a></li>
    </ul>
  </header>
)

export default Header;