import "./App.css";
import BGLeft from "./styles/BGLeft";
import Hero from "./components/HeroSection/Hero";
import HeroSection from "./components/HeroSection/HeroSection";
import Wrapper from "./components/Wrapper";
import GlobalStyles from "./styles/GlobalStyles";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import AboutMe from "./components/AboutMeSection/AboutMe";
import MySkillSection from "./components/MySkillSection/MySkillSection";
import MySkill from "./components/MySkillSection/MySkill";
import MyProject from "./components/MyProjectSection/MyProject";
import MyProjectSection from "./components/MyProjectSection/MyProjectSection";

function App() {
  return (
    <Wrapper>
      <HeroSection>
        <Hero />
      </HeroSection>
      <AboutMeSection>
        <AboutMe />
      </AboutMeSection>
      <MySkillSection>
        <MySkill />
      </MySkillSection>
      <MyProjectSection>
        <MyProject />
      </MyProjectSection>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
