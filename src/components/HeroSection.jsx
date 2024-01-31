import React from "react";
import { HeroWrapper } from "../styles/HeroSectionStyle";

const HeroSection = ({ children }) => {
  return <HeroWrapper>{children}</HeroWrapper>;
};

export default HeroSection;
