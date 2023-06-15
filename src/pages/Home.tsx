import Wrapper from "../components/Helpers/Wrapper";
import Activities from "../components/Home/Activities/Activities";
import Hero from "../components/Home/Hero";
import SuccessStories from "../components/Home/SuccessStories";
import MainHero from "../components/Home/MainHero";

const HomePage = () => {
  return (
    <>
      <MainHero />
      <Wrapper>
        <Hero />
        <Activities />
        <SuccessStories />
      </Wrapper>
    </>
  );
};

export default HomePage;
