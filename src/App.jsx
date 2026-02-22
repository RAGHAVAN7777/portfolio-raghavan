import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundGrid from './components/BackgroundGrid';
import TechnicalDots from './components/TechnicalDots';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-cyan-500/30">
      <TechnicalDots />
      <BackgroundGrid />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
      <SectionDivider />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 RAGHAVAN S. All rights reserved.</p>
        <div className="flex justify-center gap-6 my-4">
          <a href="https://github.com/RAGHAVAN7777" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/raghavan-s-b6b37a31b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:sraghavan4747@gmail.com" className="hover:text-white transition-colors">Email</a>
        </div>
        <p className="mt-2">Created with React, Tailwind CSS & Framer Motion</p>
      </footer>
    </main>
  )
}

export default App
