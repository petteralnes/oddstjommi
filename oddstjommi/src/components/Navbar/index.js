import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/crap" activeStyle>
            Crap
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;