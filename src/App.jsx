import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';

import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-charcoal min-h-screen text-offwhite selection:bg-violet-500/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ProjectGallery />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
