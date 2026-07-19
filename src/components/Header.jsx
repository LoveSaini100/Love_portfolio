import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaSun,
  FaMoon,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const titles = [
  "Frontend Developer",
  "Web Developer",
  "React Developer",
  "Software Developer",
  "AI Enthusiast",
];

export default function Header({ darkMode, setDarkMode }) {
  // ──────────────────── Typing Animation ────────────────────
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ──────────────────── Sticky Header & Navbar ──────────────────── */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/75 border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#about" className="group flex items-center gap-1.5 font-heading font-extrabold text-xl tracking-tight text-slate-800 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              LOVE
            </span>
            <span className="text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
              .DEV
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons (Right) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle theme"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-300"
            >
              {darkMode ? <FaSun className="text-yellow-400 text-sm sm:text-base animate-pulse" /> : <FaMoon className="text-indigo-600 text-sm sm:text-base" />}
            </button>

            {/* Resume Button */}
            <a
              href="/Love_portfolio/LOVE_Resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-0.5"
            >
              <FaDownload className="text-xs" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="p-2.5 md:hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <FaTimes className="text-base" /> : <FaBars className="text-base" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden text-center absolute top-[73px] pb-10 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4 animate-fade-in-up z-50">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Love_portfolio/LOVE_Resume.pdf"
              download
              className="flex w-56 mx-auto items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium text-sm mt-2"
            >
              <FaDownload className="text-xs" />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </header>

      {/* ──────────────────── Hero Section ────────────────────
      <section
        id="about"
        className="relative w-full max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-10 md:pb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 dark:bg-purple-400/10 rounded-full border border-purple-500/20 dark:border-purple-400/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Hire 
          </div> 

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 dark:from-purple-400 dark:via-indigo-300 dark:to-pink-400 text-transparent bg-clip-text text-glow-purple">
                LOVE SAINI
              </span>
            </h1>

            <div className="h-10 text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-400 flex items-center justify-center md:justify-start">
              <span>I'm a&nbsp;</span>
              <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text border-r-2 border-purple-500 dark:border-purple-400 pr-1.5 animate-pulse">
                {displayedText}
              </span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg text-justify mx-auto md:mx-0 leading-relaxed">
            I am a passionate Frontend Developer who loves crafting beautiful,
            interactive, and responsive user interfaces. I enjoy solving complex UI
            challenges and mastering modern web technologies. My goal is to create
            seamless, engaging, and high-performance digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-center text-sm shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="/Love_portfolio/LOVE_Resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-400 dark:border-slate-400 bg-white/40 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-center text-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <FaDownload className="text-xs" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-5 pt-4 text-2xl">
            <a
              href="https://github.com/LoveSaini100"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-slate-900 dark:hover:border-white text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white rounded-xl shadow-sm transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/love-saini-b877aa277"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-blue-500 text-slate-700 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-xl shadow-sm transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/love_saini_881/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram Profile"
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-pink-500 text-slate-700 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 rounded-xl shadow-sm transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919528634480?text=Hi%20Love%20Saini%2C%20I%20visited%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-850 hover:border-emerald-500 text-slate-700 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 rounded-xl shadow-sm transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center animate-float">
          <div className="relative group w-80 h-80 sm:w-96 sm:h-96 md:w-full md:h-100">         
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-650 via-indigo-600 to-pink-500 rounded-xl opacity-70 blur-sm group-hover:blur-md transition-all duration-500 animate-spin-slow" />
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 opacity-20 dark:opacity-30 blur-[20px] group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-1.5 bg-slate-100 dark:bg-slate-900/5 rounded-xl overflow-hidden border border-white/20 dark:border-slate-800/10 flex items-center justify-center">
              <img
                src="/Love_portfolio/Profile.png"
                alt="Love Saini Profile"
                className="w-full h-full object-contain rounded-xl scale-[1.02] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
