import React from 'react';
import { Link } from 'react-router-dom';
import "./uwc-navbar.css";
import vector1 from "../../assets/page-management/vector1.svg";
import vector from "../../assets/page-management/vector.svg";
import ellipse4 from "../../assets/page-management/ellipse4.png";

const UwcNavbar = () => {
    return (
        <div className="uwc-navbar">
          <div className="logo">
            <Link className="text-link" to={"../dashboard"}>
              <span className="logo-1">LOGO</span>
            </Link>
          </div>
          <div className="uwc-navigator">          
            <div className="uwc-nav-button">
              <Link className="text-link" to={"../janitor-list"}>JANITOR</Link>
            </div>
            <div className="uwc-nav-button">              
              <Link className="text-link" to={"../collector-list"}>COLLECTOR</Link>
            </div>
            <div className="uwc-nav-button">
                <Link className="text-link" to={"../route-management"}>ROUTE</Link>
            </div>
          </div>
          <div className="personal-info">
            <img className="icon"  alt="msg-icon" src={vector} />
            <img className="icon"  alt="noti-icon" src={vector1} />
            <Link className="text-link" to={"../"}><img className="avatar" alt="avt-icon"  src={ellipse4} /></Link>
          </div>
        </div>
    );
};
export default UwcNavbar;