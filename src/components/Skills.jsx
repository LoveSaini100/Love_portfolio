import React from "react";
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

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500" />,
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-400" />,
    borderColor: "border-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300" />,
    borderColor: "border-yellow-300",
    bgColor: "bg-yellow-300/10",
  },
  {
    name: "React",
    icon: <SiReact className="text-cyan-400" />,
    borderColor: "border-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-500" />,
    borderColor: "border-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    borderColor: "border-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-600" />,
    borderColor: "border-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
    borderColor: "border-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Git",
    icon: <SiGit className="text-red-600" />,
    borderColor: "border-red-600",
    bgColor: "bg-red-600/10",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-gray-100" />,
    borderColor: "border-black dark:border-gray-100",
    bgColor: "bg-black/10 dark:bg-gray-100/10",
  },
];

export default function Skills() {
  return (
    <section className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white py-20 text-center transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 w-full px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center w-24 py-4 px-2 rounded-xl border-2 ${skill.borderColor} ${skill.bgColor} hover:scale-105 transition-transform duration-300`}
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
