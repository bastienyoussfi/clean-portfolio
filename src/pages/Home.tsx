import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Work from "../components/sections/Work";
import ArticlesSection from "../components/sections/Articles";
import Skills from "../components/sections/Skills";
import Testimonials from "../components/sections/Testimonials";
import Subscribe from "../components/sections/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
      <Skills />
      <Work />
      <ArticlesSection />
      <Subscribe />
    </>
  );
};

export default Home; 