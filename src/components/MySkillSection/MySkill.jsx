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
          </SkillWrapper>
        </SkillSection>
      </MySkillContent>
      <BGLeft />
    </Section>
  );
};

export default MySkill;
