import { keyframes } from "styled-components";

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

const gradientBg = `
&.gradient-btn {
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
    will-change: transform;
    transition: transform 250ms;
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

export { gradientBg, gradientAnimation };
