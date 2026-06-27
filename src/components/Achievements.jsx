import React, { useState, useEffect } from "react";
import { FaAward, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const achievements = [
  {
    title: "Web Development Internship",
    platform: "Btech Walleh",
    date: "October 2023 - November 2023",
    link: "/Love_portfolio/btech walleh.jpg",
  },
  {
    title: "Frontend Development Internship",
    platform: "CodTech IT Solutions",
    date: "July 2024 - August 2024",
    link: "/Love_portfolio/codtech.jpg",
  },
  {
    title: "Frontend Development Internship",
    platform: "PRODESK IT & ENGINEERING SERVICES",
    date: "June 2025 - July 2025",
    link: "/Love_portfolio/prodesk.png",
  },
  {
    title: "Frontend Development Internship",
    platform: "Unified Mentors Private Limited",
    date: "June 2025 - September 2025",
    link: "/Love_portfolio/Unified_mentors.png",
  },
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openCertificate = (link, title) => {
    setSelectedImage(link);
    setSelectedTitle(title);
  };

  return (
    <section
      id="achievements"
      className="relative w-full overflow-hidden py-20 px-6 bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Certifications and acknowledgements validating my technical proficiency.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {achievements.map((achieve, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/50 dark:hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Card visual highlight */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-indigo-500/5 group-hover:to-pink-500/5 -z-10 transition-all duration-500" />
              
              <div>
                {/* Badge Icon */}
                <div className="p-3 bg-purple-500/10 dark:bg-purple-500/15 text-purple-655 dark:text-purple-400 rounded-xl text-xl w-fit mb-4">
                  <FaAward />
                </div>

                <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {achieve.title}
                </h3>
                <p className="text-sm font-semibold text-slate-555 dark:text-slate-350 mt-1">
                  {achieve.platform}
                </p>
                <p className="text-xs text-slate-450 dark:text-slate-500 mt-2">
                  {achieve.date}
                </p>
              </div>

              {/* View Trigger */}
              <div className="mt-6">
                <button
                  onClick={() => openCertificate(achieve.link, achieve.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800/100 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3.5 py-2.5 rounded-xl transition-all duration-300"
                >
                  <span>VIEW CERTIFICATE</span>
                  <FaExternalLinkAlt className="text-[9px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Certificate Modal Overlay */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in-up"
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
            className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl animate-float"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-none">
                  {selectedTitle}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mt-1 block">
                  Credential Preview
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="p-2 text-slate-500 hover:text-slate-800 dark:text-slate-450 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <FaTimes className="text-base" />
              </button>
            </div>

            {/* Modal Certificate Image Frame */}
            <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950/50 flex items-center justify-center">
              <img
                src={selectedImage}
                alt={`${selectedTitle} Certificate`}
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
                onError={(e) => {
                  // Fallback generic certificate layout
                  e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df53f7ec?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
