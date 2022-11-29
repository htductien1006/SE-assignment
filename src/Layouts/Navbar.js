import React, { useState } from "react";
import "./Navbar.css";

import {BiMessageRounded} from "react-icons/bi";
import {BsBell} from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className="collector">
              <Link to="/" style={{lineHeight: '4rem', color: 'white', textDecoration: 'none'}}>COLLECTOR</Link>
            </li>
            <li className="janitor">
              <Link to="/" style={{lineHeight: '4rem', color: 'white', textDecoration: 'none'}}>JANITOR</Link>
            </li>
            <li className="route">
              <Link to="/" style={{lineHeight: '4rem', color: 'white', textDecoration: 'none'}}>ROUTE</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                target="_thapa">
                <BiMessageRounded className="facebook" style={{color: 'white', width: '3rem', height: '3rem'}}/>
              </a>
            </li>
            <li>
              <a
                target="_thapa">
                <BsBell className="instagram" style={{color: 'white', width: '3rem', height: '3rem'}}/>
              </a>
            </li>
            <li>
              <a
                target="_thapa">
                <CiUser className="youtube" style={{color: 'white', width: '3rem', height: '3rem'}}/>
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;