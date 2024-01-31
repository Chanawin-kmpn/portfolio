import React from "react";
import { Logo, NavLink, Navbar, SectionLink } from "../styles/NavStyles";
const Nav = () => {
  return (
    <Navbar>
      <Logo>
        <img src="/src/assets/images/ck-logo.webp" alt="CK-Logo" />
      </Logo>
      <NavLink>
        <SectionLink href="#about">About</SectionLink>
        <SectionLink href="#">Projects</SectionLink>
        <SectionLink href="#">Contact</SectionLink>
      </NavLink>
    </Navbar>
  );
};

export default Nav;
