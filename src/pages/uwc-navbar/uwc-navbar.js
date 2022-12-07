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
              <span className="logo-1">LOGO</span>
          </div>
          <div className="uwc-navigator">          
            <div className="uwc-nav-button">JANITOR</div>
            <div className="uwc-nav-button">COLLECTOR</div>
            <div className="uwc-nav-button">
                <Link className="text-link" to={"../route-management"}>ROUTE</Link>
            </div>
          </div>
          <div className="personal-info">
            <img className="icon"  alt="msg-icon" src={vector} />
            <img className="icon"  alt="noti-icon" src={vector1} />
            <img className="avatar" alt="avt-icon"  src={ellipse4} />
          </div>
        </div>
    );
};
export default UwcNavbar;