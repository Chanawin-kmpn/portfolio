import styled, { keyframes } from "styled-components";

const ProjectContent = styled.div`
  display: flex;
  gap: 5.875rem;
`;
const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: fit-content;
`;

const ProjectDetail = styled.div`
  position: absolute;
  width: 60%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: hsla(0, 0%, 7%, 0.8);
  backdrop-filter: blur(10px);
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
  padding: 1.5rem;
`;

const Project = styled.div`
  color: #ffffff;

  position: relative;
  overflow: hidden;

  &:hover ${ProjectDetail} {
    transform: translateX(0);
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const DetailLink = styled.a`
  color: inherit;
  font-weight: bold;
  text-decoration: none;

  & span {
    transition: 250ms;
  }
  &:hover span {
    padding-inline-start: 10px;
  }
`;

const ProjectTitle = styled.h3`
  color: inherit;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Aside = styled.aside`
  align-self: flex-start;
  position: sticky;
  top: 4rem;
  max-width: 35.625rem;
  overflow: hidden;
`;

const rotate = keyframes`
  to {transform: rotate(-35deg);
  opacity: 1;}
`;
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;
const Hidden = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateX(50%);
  max-width: 31.25rem;
  margin-top: 4rem;
`;

const gradientAnimation = keyframes`
  from
    {
      background-position: 100% 0%
    }
    
   to
     {
      background-position: 0% 0%
     }
`;
const HiddenMessage = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 1.25rem;
  max-width: 23.75rem;
  background-color: #121212;
  border-radius: 10px;
  opacity: 0;
  animation: ${fadeIn} 500ms linear 1s forwards;
  padding: 1rem 2rem;
  margin-left: -5rem;

  &::after {
    content: " ";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    left: auto;
    right: 4rem;
    bottom: -40px;
    border: 20px solid;
    border-color: #121212 #121212 transparent transparent;
  }

  & div {
    max-width: 175px;
    margin: 0 auto;
  }

  & div:hover a {
    transform: translateY(-6px);
  }

  & div:active a {
    transform: translateY(-2px);
  }

  & a {
    position: relative;
    display: block;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    background-size: 600%;
    background-image: radial-gradient(
      circle at top left,
      hsl(325deg, 100%, 48%),
      hsl(325deg, 100%, 48%),
      hsl(325deg, 100%, 48%),
      hsl(260deg, 100%, 55%),
      hsl(230deg, 100%, 45%),
      hsl(240deg, 100%, 45%),
      hsl(325deg, 100%, 48%),
      hsl(325deg, 100%, 48%),
      hsl(325deg, 100%, 48%)
    );
    border-radius: 4px;
    animation: ${gradientAnimation} 10s ease-in-out infinite;
    will-change: transform;
    transition: transform 250ms;
    margin-top: 2rem;
    padding: 1rem 2rem;

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 2px;
      left: 6px;
      right: 6px;
      height: 20%;
      margin: 0 auto;
      background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
      );
      border-radius: 20px 20px 100px 100px / 14px 14px 30px 30px;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      bottom: 0px;
      left: 0px;
      right: 0px;
      height: 30%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17));
      border-radius: 0px 0px 4px 4px;
    }
  }
`;
const HiddenImage = styled.div`
  align-self: flex-end;
  transform: rotate(-10deg);
  animation: ${rotate} 400ms linear forwards;
  opacity: 0;
`;
export {
  ProjectContent,
  ProjectWrapper,
  Project,
  ProjectTitle,
  ProjectDetail,
  Description,
  DetailLink,
  Aside,
  Hidden,
  HiddenMessage,
  HiddenImage,
};
