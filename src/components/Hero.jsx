import React from "react";
import { Section } from "../styles/Section";
import Nav from "./Nav";
import {
  DownloadButton,
  Greeting,
  GreetingContent,
  Role,
  GreetingDescription,
  Rotate,
} from "../styles/HeroStyle";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <Section>
      <Nav />
      <GreetingContent>
        <Greeting>
          Hi, <Rotate>👋</Rotate>
        </Greeting>
        <Greeting>I'm Chanawin</Greeting>
        <Greeting>
          <Role>Frontend Developer</Role>
        </Greeting>
        <GreetingDescription>
          <p className="description">
            I like to build quality website with design and perfect-pixel
          </p>
        </GreetingDescription>
        <DownloadButton aria-label="download-cv-button">
          <a
            className="download-link"
            href="/src/assets/files/CV-Chanawin-Kamolpanus.pdf"
            download
          >
            Download CV
            <span>
              <img
                className="download-icon"
                src="/src/assets/icons/download-icon.svg"
                alt="Download-icon"
              />
            </span>
          </a>
        </DownloadButton>
        <SocialLink />
      </GreetingContent>
    </Section>
  );
};

export default Hero;
