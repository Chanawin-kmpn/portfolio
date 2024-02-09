import React from "react";
import MyProfile from "../../assets/images/my-profile.webp";
import { Section } from "../../styles/SectionStyle";
import {
  AboutmeDescription,
  ProfileWrapper,
  AboutmeContent,
} from "../../styles/AboutMeStyle";
import { BorderText, SectionTitle, TextTitle } from "../../styles/TitleStyle";

const AboutMe = () => {
  return (
    <Section className="black-bg section" id="aboutme">
      <SectionTitle className="white-text">
        <TextTitle>About me</TextTitle>
      </SectionTitle>
      <AboutmeContent>
        <AboutmeDescription>
          <p>
            Hello there! I’m Chanawin Kamolpanus you can call me Pond who likes
            and enjoys creating things with creative design and solving problem.
          </p>
          <p>
            First of all I’m want to tell that I’m graduate from Silpakorn
            University department of electrical engineering.
          </p>
          <p>
            My first experience with programming was in my first year at
            university, coding in C++ for an Arduino. At that time, I still felt
            indifferent about programming.
          </p>
          <p>
            In my last year I had the opportunity to participate in a program of
            my department. On the topic of creating a Web Application using
            HTML, CSS, JavaScript, Bootstrap and PHP.
          </p>
          <p>
            That was a turning point for me that made me eager to learn more and
            gain new experiences to advance my career as a Front-end developer.
          </p>
          <p>
            After Graduated from university I decided to participate in
            Generation's Junior Software developer Bootcamp for changing my
            career path and learn about technical skill and soft skill that suit
            for this career.
          </p>
        </AboutmeDescription>
        <ProfileWrapper>
          <img src={MyProfile} alt="" />
        </ProfileWrapper>
      </AboutmeContent>
      {/* <BGLeft /> */}
    </Section>
  );
};

export default AboutMe;
