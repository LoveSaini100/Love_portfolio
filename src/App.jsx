import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internship from "./components/internships";

function App() {
  const [darkMode, setDarkMode] = useState(true); 

  useEffect(() => {
    
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen w-screen   transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="w-full mx-auto ">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
