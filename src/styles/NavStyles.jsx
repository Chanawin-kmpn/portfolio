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
`;

const Logo = styled.div`
  max-width: 130px;
`;

const NavLink = styled.div`
  display: flex;
  gap: 2rem;
`;

const SectionLink = styled.a`
  position: relative;
  color: inherit;
  font-weight: bold;
  text-decoration: none;

  &::before {
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
export { Navbar, Logo, NavLink, SectionLink };
