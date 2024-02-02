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
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
