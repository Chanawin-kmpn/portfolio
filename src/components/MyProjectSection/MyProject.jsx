import React, { useEffect, useState } from "react";
import { Section } from "../../styles/SectionStyle";
import { BorderText, SectionTitle, TextTitle } from "../../styles/TitleStyle";
import {
  Aside,
  Description,
  DetailLink,
  Hidden,
  HiddenImage,
  HiddenMessage,
  Project,
  ProjectContent,
  ProjectDetail,
  ProjectTitle,
  ProjectWrapper,
} from "../../styles/MyProjectStyle";

const MyProject = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPoint = 3300; // Adjust this value based on when you want the message to appear
    console.log(scrollPosition);

    if (scrollPosition > triggerPoint) {
      setShowMessage(true);
    } else if (scrollPosition < 2000) {
      setShowMessage(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Section>
      <SectionTitle>
        <TextTitle>
          My <BorderText>Project</BorderText>
        </TextTitle>
      </SectionTitle>
      <ProjectContent>
        <ProjectWrapper>
          <Project>
            <img src="https://placehold.co/648" alt="" />
            <ProjectDetail>
              <ProjectTitle>First Project</ProjectTitle>
              <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                molestias cupiditate perferendis, facere cum nobis quis ipsum
                harum officiis architecto repellat quam numquam tenetur ullam
                natus aut voluptatum soluta incidunt?
              </Description>
              <DetailLink href="">
                More detail <span>--&gt;</span>
              </DetailLink>
            </ProjectDetail>
          </Project>
          <Project>
            <img src="https://placehold.co/648" alt="" />
            <ProjectDetail>
              <p></p>
              <a href=""></a>
            </ProjectDetail>
          </Project>
          <Project>
            <img src="https://placehold.co/648" alt="" />
            <ProjectDetail>
              <p></p>
              <a href=""></a>
            </ProjectDetail>
          </Project>
        </ProjectWrapper>
        <Aside>
          <div>
            <h3>In every my project.</h3>
            <p>
              I like to spend time honing my skills based on challenges I come
              across online or come up with my own ideas and here are some
              examples of my work.
            </p>
          </div>
          {showMessage && (
            <Hidden>
              <HiddenMessage>
                <p>If you are interesting me please contact me.</p>
                <div>
                  <a href="">Contact me!</a>
                </div>
              </HiddenMessage>

              <HiddenImage>
                <img
                  src="/src/assets/images/My illustrator.png"
                  alt="My illustrator"
                />
              </HiddenImage>
            </Hidden>
          )}
        </Aside>
      </ProjectContent>
    </Section>
  );
};

export default MyProject;
