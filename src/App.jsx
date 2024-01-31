import "./App.css";
import BGLeft from "./components/BGLeft";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Wrapper from "./components/Wrapper";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Wrapper>
      <HeroSection>
        <BGLeft />
        <Hero />
      </HeroSection>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
