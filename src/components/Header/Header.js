import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import './Header.css';

const Header = () => (
  <header className='header'>
    <Link to='/'><img src={logo} alt='Fylo'/></Link>
    <ul className='header-navbar'>
      <li><Link to="/feature">Features</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/singin">Sign In</Link></li>
    </ul>
  </header>
)

export default Header;