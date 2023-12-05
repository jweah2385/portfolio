import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';

function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false)

  return (
   <>
      <nav>
        <Link to="/" className="title">
          Home
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          
        </ul>
      </nav>
     
    </>
  );
}

export default Header;
