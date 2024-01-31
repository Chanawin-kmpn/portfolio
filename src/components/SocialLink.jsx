import React from "react";
import { Line, SocialWrapper, Link } from "../styles/SocialLinkStyle";

const SocialLink = () => {
  return (
    <SocialWrapper className="float-right">
      <Link href="https://github.com/Chanawin-kmpn" target="_blank">
        <img src="/src/assets/icons/github-icon.svg" alt="github-icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/chanawin-kamolpanus-30422524a/"
        target="_blank"
      >
        <img src="/src/assets/icons/linkedin-icon.svg" alt="linkedin-icon" />
      </Link>
      <Link href="https://www.facebook.com/pond.kamolpanas/" target="_blank">
        <img src="/src/assets/icons/facebook-icon.svg" alt="facebook-icon" />
      </Link>
      <Link href="https://www.instagram.com/qpondp/" target="_blank">
        <img src="/src/assets/icons/instagram-icon.svg" alt="instargram-icon" />
      </Link>
      <Line></Line>
    </SocialWrapper>
  );
};

export default SocialLink;
