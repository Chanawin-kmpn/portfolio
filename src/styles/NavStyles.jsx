import styled from "styled-components";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1.25rem 4rem;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.25rem 2rem;
  }
`;

const Logo = styled.div`
  max-width: 130px;
`;

const NavLink = styled.div``;

const DesktopLink = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileLink = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  gap: 2rem;
  top: 0;
  right: 0;
  background: #ffffff;
  padding: 2.5rem 2rem;
  font-size: 1.25rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out; // Added for smooth transition

  @media (max-width: 768px) {
    display: flex;
  }

  &.open {
    transform: translateX(0);
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  align-self: flex-end;
`;

const SectionLink = styled.a`
  position: relative;
  color: inherit;
  font-weight: bold;
  text-decoration: none;

  &.link::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2.5px;
    bottom: 0;
    left: 0;
    background-color: #121212;
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
export {
  Navbar,
  Logo,
  NavLink,
  DesktopLink,
  MobileLink,
  SectionLink,
  MenuButton,
  CloseButton,
};
