import React from "react";
import { FaBriefcase } from "react-icons/fa";

const internships = [
  {
    title: "FrontEnd Web Developer",
    platform: "ERT Tech Pro, Roorkee",
    date: "March 2026 - Present",
    description: [
      "Contributing to the development of robust web applications.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
  {
    title: "Web Development Intern",
    platform: "Digital In App, Dehradun",
    date: "Jan 2026 - March 2026",
    description: [
      "Assisted in developing and maintaining web applications.",
      "Gained hands-on experience in modern web development technologies.",
    ],
  },
  {
    title: "FrontEnd Web Development Intern",
    platform: "Unified Mentors Private Limited",
    date: "June 2025 - Sep 2025",
    description: [
      "Developed full-featured web projects including Student–Teacher Appointment System and E-Gram Panchayat Portal using HTML, CSS, Bootstrap, JavaScript, and Firebase.",
      "Implemented core functionalities such as user authentication, data management, and responsive layouts to enhance accessibility and usability.",
      "Strengthened front-end development skills and learned best practices for building and deploying real-world web applications.",
    ],
  },
  {
    title: "FrontEnd Web Development Intern",
    platform: "PRODESK IT & ENGINEERING SERVICES",
    date: "June 2025 - July 2025",
    description: [
      "Deployed personal portfolio via GitHub Pages during the internship.",
      "Gained hands-on experience with Git, version control, and site hosting.",
      "Applied front-end skills like React and Tailwind to build and optimize real-world projects.",
    ],
  },
  {
    title: "FrontEnd Web Development Intern",
    platform: "CODTECH IT SOLUTIONS",
    date: "July 2024 - August 2024",
    description: [
      "Built responsive user interfaces using HTML, CSS, and Tailwind CSS.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Applied Git for version control and team collaboration on GitHub.",
    ],
  },
  {
    title: "Web Development Intern",
    platform: "BTECH WALLEH",
    date: "Oct 2023 - Nov 2023",
    description: [
      "Developed reusable UI components using HTML, CSS and JavaScript.",
      "Assisted in building mobile-friendly web pages using responsive design principles.",
      "Participated in daily stand-ups and contributed to code reviews and testing.",
    ],
  },
];

export default function Internship() {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden py-20 px-6 bg-slate-100/50 dark:bg-slate-900/30 text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            My professional career path, internships, and industrial exposures.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-8 sm:pl-10 space-y-12">
          
          {internships.map((intern, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.3)] group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300 z-10">
                <FaBriefcase className="text-xs text-purple-600 dark:text-purple-400 group-hover:text-indigo-450 transition-colors" />
              </div>

              {/* Glowing vertical connector highlight */}
              <div className="absolute -left-[45px] sm:-left-[53px] top-9 bottom-[-48px] w-0.5 bg-gradient-to-b from-purple-550 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/50 dark:hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-purple-950/5 transition-all duration-300">
                {/* Visual glow backdrop */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:to-indigo-500/10 -z-10 transition-all duration-500" />
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {intern.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {intern.platform}
                    </p>
                  </div>
                  <span className="inline-block self-start sm:self-center px-3 py-1 text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-750 dark:bg-purple-500/15 dark:text-purple-300 rounded-md">
                    {intern.date}
                  </span>
                </div>

                {/* Description details */}
                <ul className="space-y-2.5 pl-1.5">
                  {intern.description.map((line, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="text-purple-500 mt-1.5 flex-shrink-0 text-[10px]">✦</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
