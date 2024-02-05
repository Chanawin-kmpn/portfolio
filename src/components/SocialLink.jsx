import React from "react";
import GitHubLogo from "../assets/icons/github-icon.svg";
import LinkedinLogo from "../assets/icons/linkedin-icon.svg";
import FacebookLogo from "../assets/icons/facebook-icon.svg";
import InstragramLogo from "../assets/icons/instagram-icon.svg";
import { Line, SocialWrapper, Link } from "../styles/SocialLinkStyle";

const SocialLink = ({ classValue }) => {
  return (
    <SocialWrapper className={classValue}>
      <Link href="https://github.com/Chanawin-kmpn" target="_blank">
        <img src={GitHubLogo} alt="github-icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/chanawin-kamolpanus-30422524a/"
        target="_blank"
      >
        <img src={LinkedinLogo} alt="linkedin-icon" />
      </Link>
      <Link href="https://www.facebook.com/pond.kamolpanas/" target="_blank">
        <img src={FacebookLogo} alt="facebook-icon" />
      </Link>
      <Link href="https://www.instagram.com/qpondp/" target="_blank">
        <img src={InstragramLogo} alt="instargram-icon" />
      </Link>
      <Line></Line>
    </SocialWrapper>
  );
};

export default SocialLink;
