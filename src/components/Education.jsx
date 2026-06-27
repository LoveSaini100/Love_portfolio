import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Quantum University, Roorkee",
    date: "2022 - 2026",
    grade: "Pursuing",
    details: "Focusing on Software Engineering, Full Stack Web Development, and Algorithm Design.",
  },
  {
    degree: "Senior Secondary (12th) (CBSE)",
    institution: "The Skyland School, Shahpur, Muzaffarnagar",
    date: "2021 - 2022",
    grade: "PCM",
    details: "Completed senior secondary school with a focus on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "High School (10th) (CBSE)",
    institution: "SDS Public School, Titawi, Muzaffarnagar",
    date: "2019 - 2020",
    grade: "General",
    details: "Completed secondary education with core foundations in Science and Mathematics.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full overflow-hidden py-20 px-6 bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      {/* Title */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Academic foundation and learning path that shaped my software development career.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 via-indigo-500/40 to-transparent transform -translate-x-1/2" />

        <div className="space-y-12">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between w-full group ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-purple-500 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(168,85,247,0.35)] group-hover:scale-110 group-hover:border-indigo-500 transition-all duration-300">
                  <FaGraduationCap className="text-xs text-purple-600 dark:text-purple-400 group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Card Container */}
                <div className="w-[calc(100%-2rem)] sm:w-[45%] ml-12 sm:ml-0">
                  <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-sm hover:shadow-md dark:hover:shadow-purple-900/10 hover:border-purple-500/50 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1">
                    {/* Glow backdrop indicator */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:via-indigo-500/10 group-hover:to-pink-500/10 -z-10 transition-all duration-500" />
                    
                    {/* Card Head */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300 rounded-md">
                        {edu.date}
                      </span>
                      {edu.grade && (
                        <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    {/* Degree & Inst */}
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-350 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>

                {/* Empty block for wide screen alignment */}
                <div className="hidden sm:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
