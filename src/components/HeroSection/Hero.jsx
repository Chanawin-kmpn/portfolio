import React from "react";
import { Section } from "../../styles/SectionStyle";
import Nav from "../Nav";
import {
  DownloadButton,
  Greeting,
  GreetingContent,
  Role,
  GreetingDescription,
  Rotate,
} from "../../styles/HeroStyle";
import SocialLink from "../SocialLink";
import BGLeft from "../../styles/BGLeft";
const Hero = () => {
  return (
    <Section className="padding-none">
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
        <SocialLink classValue="float-right" />
      </GreetingContent>
      <BGLeft />
    </Section>
  );
};

export default Hero;
