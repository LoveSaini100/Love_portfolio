import React from "react";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-slate-200/50 dark:border-slate-900 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md transition-colors duration-300 py-10 px-6 mt-10">
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-md hover:-translate-y-1 transition-all duration-300 z-10"
      >
        <FaChevronUp className="text-xs" />
      </button>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Brand */}
        <div className="text-center md:text-left space-y-1.5">
          <p className="font-heading font-extrabold text-lg tracking-tight text-slate-850 dark:text-white">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-650 dark:from-purple-450 dark:to-indigo-400 bg-clip-text text-transparent">
              LOVE
            </span>
            <span className="text-slate-400 dark:text-slate-500">.DEV</span>
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Crafting responsive and interactive digital user interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-650 dark:text-slate-400">
          <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">About</a>
          <a href="#education" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Education</a>
          <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Experience</a>
          <a href="#achievements" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-450 transition-colors">Contact</a>
        </div>

        {/* Tech Badges & Copyright */}
        <div className="text-center md:text-right space-y-2">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Love Saini. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-slate-450 dark:text-slate-500">
            Built with <span className="text-purple-500 dark:text-purple-450">React</span> &bull; <span className="text-purple-500 dark:text-purple-450">Tailwind CSS</span> &bull; <span className="text-purple-500 dark:text-purple-450">Vite</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
