// import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
// import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
     
      <main id="home">
        <Hero />
        <About />
        <Education />
        <Projects />
        <TechStack />
        {/* <Skills /> */}
        <Certifications />
        <Contact />
      </main>
      <footer className="relative bg-black text-slate-400 py-8 overflow-hidden">
  {/* Subtle teal glow background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-[#0FA4AF]/10 rounded-full blur-3xl animate-glow-slow"></div>
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0FA4AF]/5 rounded-full blur-3xl animate-glow-slow delay-1000"></div>
  </div>

  <div className="container mx-auto px-6 text-center relative z-10">
    <p className="text-sm text-slate-400">
      © {new Date().getFullYear()}{" "}
      <span className="text-[#0FA4AF] font-medium hover:text-cyan-300 transition-colors">
        Ashutosh Deore
      </span>
      . All rights reserved.
    </p>
  </div>

  <style>{`
    @keyframes glow-slow {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
      50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.9; }
    }
    .animate-glow-slow {
      animation: glow-slow 20s ease-in-out infinite;
    }
  `}</style>
</footer>

    </div>
  );
}

export default App;
