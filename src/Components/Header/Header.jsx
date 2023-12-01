import './Header.css'


function Header() {
  return (
    <>
      <nav  >
        <ul  className="header-options">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <div className='contact-top' >Contact</div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
