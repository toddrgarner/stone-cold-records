import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='narbar'>
        <div className='navbar-container'>
<Link to="/" className='navbar-logo'>
    Stone Cold Records 
</Link>
<div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fas  fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                Artist
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  ); 
} 
 
export default Navbar;
