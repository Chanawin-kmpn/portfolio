import React from "react";
import LogoImage from "../assets/images/ck-logo.webp";
import { Logo, NavLink, Navbar, SectionLink } from "../styles/NavStyles";
const Nav = () => {
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetId = event.currentTarget.getAttribute("href").slice(1); // Get the target element's id
    const targetElement = document.getElementById(targetId); // Get element by id that is a name of section

    if (targetElement) {
      // Calculate the top offset of the target element
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Desired offset value (e.g., decrease offsetTop by 125px)
      const offset = -125;

      // Scrolls to the target element smoothly with the offset
      window.scrollTo({
        top: targetPosition + offset, // Apply the offset here
        behavior: "smooth",
      });
    }
  };
  return (
    <Navbar>
      <Logo>
        <img src={LogoImage} alt="CK-Logo" />
      </Logo>
      <NavLink>
        <SectionLink
          onClick={handleLinkClick}
          className="nav-link"
          href="#aboutme"
        >
          About
        </SectionLink>
        <SectionLink
          onClick={handleLinkClick}
          className="nav-link"
          href="#project"
        >
          Projects
        </SectionLink>
        <SectionLink
          onClick={handleLinkClick}
          className="nav-link"
          href="#contact"
        >
          Contact
        </SectionLink>
      </NavLink>
    </Navbar>
  );
};

export default Nav;
