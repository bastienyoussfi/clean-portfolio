import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Work from "./components/sections/Work";
import Articles from "./components/sections/Articles";
import Skills from "./components/sections/Skills";
import Testimonials from "./components/sections/Testimonials";

function App() {
  return (
    <div className="dark:bg-neutral-900">
      <Header />

      <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
        <main>
          <Hero />
          <Projects />
          <Testimonials />
          <Skills />
          <Work />
          <Articles />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
