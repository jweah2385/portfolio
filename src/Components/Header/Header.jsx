import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


function Header() {
  const [ menuOpen, setMenuOpen ] = useState(false)
  return (
    <>
      <nav>
     
        <ScrollLink
        className='title'
          to="section01"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-70} 
        >
         Home
        </ScrollLink>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? 'open' : ''}>
          <li >
  
            <ScrollLink
              to="section01"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} 
            >
              About
            </ScrollLink>
          </li>
          <li>
           <ScrollLink
              to="section02"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} 
            >
              Skills
            </ScrollLink>
          </li>
          <li>
           <ScrollLink
              to="section03"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} 
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section04"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
