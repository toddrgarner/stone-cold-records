import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../img/logo-16.png';





function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Stone Cold Records
        <img src={ Logo } className='label-logo' alt="logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li> 
            <li className='nav-item'>
              <Link 
              to='/artist' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
                Artist
              </Link>
            </li> 
            <li className='nav-item'>
              <Link 
                to='/videos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/music'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Music
              </Link>
            </li>            

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;