import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillsData = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    icon: <SiHtml5 className="text-orange-500" />,
    glowColor: "group-hover:border-orange-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
    bgColor: "bg-orange-500/5",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: <SiCss3 className="text-blue-400" />,
    glowColor: "group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.25)]",
    bgColor: "bg-blue-400/5",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript className="text-yellow-400" />,
    glowColor: "group-hover:border-yellow-400 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]",
    bgColor: "bg-yellow-400/5",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <SiReact className="text-cyan-400 animate-spin-slow" />,
    glowColor: "group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]",
    bgColor: "bg-cyan-400/5",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <SiTailwindcss className="text-cyan-400" />,
    glowColor: "group-hover:border-cyan-450 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    bgColor: "bg-cyan-500/5",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: <SiBootstrap className="text-purple-500" />,
    glowColor: "group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    bgColor: "bg-purple-500/5",
  },
  // Languages & DB
  {
    name: "Java",
    category: "Languages & DB",
    icon: <FaJava className="text-red-500" />,
    glowColor: "group-hover:border-red-500 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]",
    bgColor: "bg-red-500/5",
  },
  {
    name: "MySQL",
    category: "Languages & DB",
    icon: <SiMysql className="text-blue-600" />,
    glowColor: "group-hover:border-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.25)]",
    bgColor: "bg-blue-600/5",
  },
  // Tools & Systems
  {
    name: "Git",
    category: "Tools & Systems",
    icon: <SiGit className="text-red-650" />,
    glowColor: "group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.25)]",
    bgColor: "bg-red-600/5",
  },
  {
    name: "GitHub",
    category: "Tools & Systems",
    icon: <SiGithub className="text-slate-800 dark:text-slate-200" />,
    glowColor: "group-hover:border-slate-800 dark:group-hover:border-slate-200 group-hover:shadow-[0_0_20px_rgba(100,116,139,0.25)]",
    bgColor: "bg-slate-500/5",
  },
];

export default function Skills() {
  const categories = ["All", "Frontend", "Languages & DB", "Tools & Systems"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden py-20 px-6 bg-slate-100/50 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Tools, libraries, and programming languages that I use to bring ideas to life.
          </p>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto bg-white/80 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/65 dark:border-slate-800/80 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm"
                  : "text-slate-650 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-600/80 backdrop-blur-md hover:-translate-y-1.5 transition-all duration-300 ${skill.glowColor}`}
            >
              {/* Inner subtle glow matching technology theme */}
              <div className={`absolute inset-0 rounded-2xl ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

              {/* Icon */}
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Name */}
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
              
              {/* Category indicator (only shown when in "All" view) */}
              {activeCategory === "All" && (
                <span className="text-[10px] text-slate-450 dark:text-slate-500 mt-1 font-medium">
                  {skill.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
