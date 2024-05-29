import React, { useState } from "react";
import {
  DesktopLink,
  MobileLink,
  Logo,
  MenuButton,
  NavLink,
  Navbar,
  SectionLink,
  CloseButton,
} from "../styles/NavStyles";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const handleLinkClick = (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    setIsMobileMenuOpen((prev) => !prev);
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
        <SectionLink
          onClick={handleLinkClick}
          className="nav-link"
          href="#hero"
        >
          <img src="/assets/images/ck-logo.webp" alt="CK-Logo" />
        </SectionLink>
      </Logo>
      <NavLink>
        <MenuButton aria-label="menu" onClick={toggleMobileMenu}>
          <img src="/assets/icons/menu-icon.webp" alt="menu-icon" />
        </MenuButton>
        <DesktopLink>
          <SectionLink
            onClick={handleLinkClick}
            className="nav-link link"
            href="#aboutme"
          >
            About
          </SectionLink>
          <SectionLink
            onClick={handleLinkClick}
            className="nav-link link"
            href="#project"
          >
            Projects
          </SectionLink>
          <SectionLink
            onClick={handleLinkClick}
            className="nav-link link"
            href="#contact"
          >
            Contact
          </SectionLink>
        </DesktopLink>
        {isMobileMenuOpen && (
          <MobileLink className={`${isMobileMenuOpen ? "open" : ""}`}>
            <CloseButton onClick={toggleMobileMenu}>
              <img src="/assets/icons/close-icon.webp" alt="close-icon" />
            </CloseButton>
            <SectionLink
              onClick={handleLinkClick}
              className="nav-link link"
              href="#aboutme"
            >
              About
            </SectionLink>
            <SectionLink
              onClick={handleLinkClick}
              className="nav-link link"
              href="#project"
            >
              Projects
            </SectionLink>
            <SectionLink
              onClick={handleLinkClick}
              className="nav-link link"
              href="#contact"
            >
              Contact
            </SectionLink>
          </MobileLink>
        )}
      </NavLink>
    </Navbar>
  );
};

export default Nav;
