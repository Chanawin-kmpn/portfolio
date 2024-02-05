import React from "react";
import LogoImage from "../assets/images/ck-logo.webp";
import { Logo, NavLink, Navbar, SectionLink } from "../styles/NavStyles";
const Nav = () => {
  return (
    <Navbar>
      <Logo>
        <img src={LogoImage} alt="CK-Logo" />
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
