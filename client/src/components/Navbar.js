import React, { useState, useEffect } from "react";
import '../style/navbarstyles.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask} from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='n_head'>
      <div className='n_navbar'>
        <div className="n_logo"><Link  className='link no-hover'><FontAwesomeIcon icon={faMask} style={{fontSize:"1.9rem"}} className="fa-beat-fade"/><span></span>&nbsp;&nbsp;ADID</Link></div>
        <ul className='n_links'>
          <li className="n_li"><Link  className='link no-hover' to="/">Home</Link></li>
          <li className="n_li"><Link  className='link no-hover' to="/dashboard">Dashboard</Link></li>
          <li className="n_li"><Link  className='link no-hover' to="/about">About Us</Link></li>
          <li className="n_li"><Link  className='link no-hover' to="/user">User</Link></li>
        </ul>
        <button onClick={handleLogout} className='n_action-btn'>Get Started</button>
        <div className="n_toggle_btn" onClick={toggleMenu}>
          <i className='bx bx-list-ul'></i>
        </div>
      </div>
      <div className="n_dropdown_menu open" style={{ display: menuOpen ? "block" : "none" }}>
          <li><Link className='link no-hover' to='/'>Home</Link></li>
          <li><Link className='link no-hover' to='/dashboard'>Dashboard</Link></li>
          <li><Link className='link no-hover' to='/about'>About Us</Link></li>
          <li><Link className='link no-hover' to='/user'>User</Link></li>
          <li><button onClick={handleLogout} className='n_action-btn'>Get Started</button></li>
      </div>
    </nav>
  );
}

export default Navbar;