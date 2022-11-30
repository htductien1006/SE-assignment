import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navbar";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/route-management/spec" activeStyle>
            Route Management - Spec
          </NavLink>
          {<NavLink to="/route-management/list" activeStyle>
            Route Management - List
          </NavLink>
          /* <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;