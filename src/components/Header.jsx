import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaSun,
  FaMoon,
  FaDownload,
} from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  // ──────────────────── Typing Animation ────────────────────
  const titles = [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Software Developer",
    "AI Enthusiast",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTitleIndex, titles]);

  // ──────────────────── Render ────────────────────
  return (
    <header className=" relative text-center bg-gray-100 text-black dark:bg-gradient-to-b overflow-x-hidden p-10
    dark:from-black dark:via-gray-900 dark:to-gray-800 dark:text-white transition-colors">
      {/* Top-right buttons */}
      <div className="absolute top-4 right-6 flex items-center gap-3 text-lg">
        {/* Theme toggle */}
        <button
          title="Toggle theme"
          onClick={() => setDarkMode((prev) => !prev)}
          className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        {/* Download resume */}
        <a
          href="/Love_portfolio/LOVE_Resume.pdf"
          download
          title="Download resume"
          className="flex items-center gap-1 p-2 bg-gray-600 text-gray-100 dark:bg-gray-200 dark:text-black dark:hover:bg-purple-900 hover:bg-purple-900 hover:text-white dark:hover:text-white rounded-md transition text-sm"
        >
          <FaDownload />
          <span className="hidden sm:inline">Resume</span>
        </a>
      </div>

      {/* Profile photo and intro */}
      <img
        src="/Love_portfolio/Profile.jpg"
        alt="Profile"
        className="w-44 h-auto mx-auto rounded-full  border  border-black dark:border-4 dark:border-purple-600 mb-4"
      />
      <h1 className="text-3xl font-bold">Hi, I'm LOVE SAINI</h1>

      {/* Typing title */}
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-1 h-7">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>

      {/* About paragraph */}
      <p className="mt-4 text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300 px-4">
        I am a passionate Frontend developer who loves crafting beautiful,
        interactive, and responsive user interfaces. I enjoy solving complex UI
        challenges and mastering modern web technologies. My goal is to create
        seamless and engaging digital experiences.
      </p>

      {/* Social icons */}
      <div className="flex justify-center mt-6 space-x-5 text-3xl">
        <a
          href="https://github.com/LoveSaini100"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/love-saini-b877aa277"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/love_saini_881/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/919528634480?text=Hi%20Love%20Saini%2C%20I%20visited%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
      </div>
    </header>
  );
}
