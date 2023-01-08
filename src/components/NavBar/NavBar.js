import React from "react";
import { StyledNavbar, NavItemLink } from "./style";

function NavBar({ children }) {
  return (
    <StyledNavbar>
      {children}
      <NavItemLink to="/login"> Log in</NavItemLink>
      <NavItemLink to="/signup" fill>
        Sign up
      </NavItemLink>
    </StyledNavbar>
  );
}

export default NavBar;
