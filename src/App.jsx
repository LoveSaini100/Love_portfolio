import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internship from "./components/internships";

function App() {
  const [darkMode, setDarkMode] = useState(true); // ✅ start in dark mode

  useEffect(() => {
    // Apply "dark" class to the document node
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 relative overflow-hidden bg-grid-pattern flex flex-col">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[35%] left-[-100px] w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-100px] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-600/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Page Contents */}
      <div className="w-full flex-grow flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="w-full flex-grow">
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Internship />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
