import React from "react";
import { Section } from "../../styles/SectionStyle";
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
    <Section className="padding-none section" id="hero">
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
            I enjoy creating quality websites with built from scratch designs
            and pixel-perfect execution.
          </p>
        </GreetingDescription>
        <DownloadButton aria-label="download-cv-button">
          <a
            className="download-link"
            href="https://drive.google.com/file/d/1Xzt7DNyYOzHykPRuWrw78aSIggw2GlpW/view?usp=drive_link"
            target="_blank"
          >
            Download CV
            <span>
              <img
                className="download-icon"
                src="/public/assets/icons/download-icon.webp"
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
