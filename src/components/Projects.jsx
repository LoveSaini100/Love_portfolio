import React, { useState } from "react";
import { FaCouch, FaBuilding, FaUserFriends, FaGithub } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Luxora Furnitures",
    description:
      "A premium online showcase website designed for furniture manufacturers and exporters to exhibit their catalog, collections, and export specifications.",
    tags: ["HTML & CSS", "Bootstrap", "JavaScript", "Responsive Design"],
    category: "Vanilla JS",
    repoLink: "https://github.com/LoveSaini100/CraftHeaven",
    liveLink: "https://luxora-furniture-sample.vercel.app/",
    icon: FaCouch,
  },
  {
    title: "Doon Valley Property",
    description:
      "A full-featured MERN stack real estate portal enabling property dealers to list, edit, and delete properties with ease. Backed by a secure admin dashboard.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Admin Dashboard"],
    category: "React",
    repoLink: "https://github.com/LoveSaini100/DoonValleyProperty",
    liveLink: "https://doonvalleyproperty-frontend.vercel.app/",
    icon: FaBuilding,
  },
  {
    title: "Student–Teacher Appointment Booking System",
    description:
      "A web application facilitating appointment scheduling between students and teachers, featuring user authentication and database management.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    category: "Vanilla JS",
    repoLink: "https://github.com/LoveSaini100/student-teacher-appointment-booking",
    icon: FaUserFriends,
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "React", "Vanilla JS"];

  const filteredProjects = projects.filter((project) =>
    activeTab === "All" ? true : project.category === activeTab
  );

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden py-20 px-6 bg-transparent text-slate-900 dark:text-slate-100 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            A hand-picked selection of applications that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs mx-auto bg-white/80 dark:bg-slate-900/60 p-1.5 rounded-2xl border border-slate-200/65 dark:border-slate-800/80 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm"
                  : "text-slate-650 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        {/* View More Github Link */}
        <div className="flex justify-center pt-8">
          <a
            href="https://github.com/LoveSaini100"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-350 dark:border-slate-805 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="text-base" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
