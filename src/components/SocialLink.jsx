import React from "react";
import { Line, SocialWrapper, Link } from "../styles/SocialLinkStyle";

const SocialLink = ({ classValue }) => {
  return (
    <SocialWrapper className={classValue}>
      <Link href="https://github.com/Chanawin-kmpn" target="_blank">
        <img src="/assets/icons/github-icon.webp" alt="github-icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/chanawin-kamolpanus-30422524a/"
        target="_blank"
      >
        <img src="/assets/icons/linkedin-icon.webp" alt="linkedin-icon" />
      </Link>
      <Link href="https://www.facebook.com/pond.kamolpanas/" target="_blank">
        <img src="/assets/icons/facebook-icon.webp" alt="facebook-icon" />
      </Link>
      <Link href="https://www.instagram.com/qpondp/" target="_blank">
        <img src="/assets/icons/instagram-icon.webp" alt="instargram-icon" />
      </Link>
      <Line></Line>
    </SocialWrapper>
  );
};

export default SocialLink;
