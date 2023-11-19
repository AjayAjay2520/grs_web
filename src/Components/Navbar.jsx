import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
import {HashLink, HashLink as Link} from 'react-router-hash-link'

import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from "react";
import logo from '../assets/grs_logo.png'
import '../Styles/Nav.css'

import Home from './Home'
import About from './About';
import Our_team from './Our_team';
import Services from './Services';
import Register from './Register';
import Footer from './Footer';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-md bg-dark ">
      <div className="container">
        <div className="logo navbar-brand text-light fw-bold fs-4">
          <img className="me-3" style={{width:"4rem",height:"2.5rem"}} src={logo} alt="" /> 
           G R Systems
        </div>
        <button
          className="navbar-toggler text-light"
          type="button"
          onClick={handleNav}
         
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-2  ">
            <li className="nav-item">
              <HashLink smooth to="#home" className="home nav_top nav-link text-light  fw-bold">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="#about" className="about nav_top nav-link text-light  fw-bold">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="#our_team" className="ourteam nav_top nav-link text-light  fw-bold">
                Our Team
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="#services" className="services nav_top nav-link text-light  fw-bold ">
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth to="#register" className="register nav_top nav-link text-light  fw-bold ">
                Register
              </HashLink>
            </li>
          </ul>
        </div>   
      </div>
      <style>
          {`.navbar {background-color: #c9c5c3;}` 
          }
        </style>
        
    </nav>

      <Home/>
      <About/>
      <Our_team/>
      <Services/>
      <Register/>
      <Footer/>
    </div>
  );
};

export default Navbar;