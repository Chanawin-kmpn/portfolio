import React from "react";
import { Section } from "../../styles/SectionStyle";
import BGLeft from "../../styles/BGLeft";
import { BorderText, SectionTitle, TextTitle } from "../../styles/TitleStyle";
import {
  MySkillContent,
  MySkillDescription,
  SkillList,
  SkillSection,
  SkillWrapper,
  SkillIconWrapper,
  SkillIconList,
} from "../../styles/MySkillStyle";
const MySkill = () => {
  return (
    <Section>
      <SectionTitle>
        <TextTitle className="right">
          My <BorderText>Skill</BorderText>
        </TextTitle>
      </SectionTitle>
      <MySkillContent>
        <MySkillDescription>
          <p>
            I learned writing language from various sources such as Documents,
            Online Courses, Youtube, Learning website and Bootcamp. So these are
            the skills I learned that are used in the real-world scenarios and
            application.
          </p>
        </MySkillDescription>
        <SkillSection>
          <SkillWrapper>
            <SkillList>HTML&CSS</SkillList>
            <SkillList>JavaScript ES6</SkillList>
            <SkillList>React</SkillList>
            <SkillList>TailwindCSS</SkillList>
            <SkillList>Bootstrap</SkillList>
            <SkillList>Material UI</SkillList>
            <SkillList>NodeJS/Express</SkillList>
            <SkillList>Styled-Components</SkillList>
            <SkillList>GIT</SkillList>
            <SkillList>MongoDB</SkillList>
          </SkillWrapper>
          <SkillIconWrapper>
            <SkillIconList className="double-icon">
              <img
                src="/assets/skill-icon/html5-original.webp"
                alt="html-icon"
              />
              <img src="/assets/skill-icon/css3-original.webp" alt="css-icon" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/javascript-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/react-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/tailwindcss-plain.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/bootstrap-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/materialui-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList className="double-icon">
              <img
                src="/assets/skill-icon/nodejs-original-wordmark.webp"
                alt=""
              />
              <img src="/assets/skill-icon/express-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/styled-component.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/github-original.webp" alt="" />
            </SkillIconList>
            <SkillIconList>
              <img src="/assets/skill-icon/mongodb-original.webp" alt="" />
            </SkillIconList>
          </SkillIconWrapper>
        </SkillSection>
      </MySkillContent>
      <BGLeft />
    </Section>
  );
};

export default MySkill;
