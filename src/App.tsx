import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Work from './components/sections/Work';
import Articles from './components/sections/Articles';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="bg-neutral-900">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Header />
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
