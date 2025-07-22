import React from "react";

const internships = [
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
  {
    title: "FrontEnd Development Intern",
    platform: "CODTECH IT SOLUTIONS",
    date: "July 2024 - August 2024",
    description: [
      "Built responsive user interfaces using HTML, CSS, and Tailwind CSS.",
      "Collaborated with backend developers to integrate RESTful APIs.",
      "Applied Git for version control and team collaboration on GitHub."
      
    ],
  },
];


export default function Internship() {
  return (
    <section className="py-14 bg-gray-100  dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Work Experience/Internships
      </h2>

      <div className="flex flex-wrap justify-around gap-8 w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto px-4">
        {internships.map((intern, index) => (
          <div
           key={index}
            className="w-full dark:bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 
             border border-purple-600 
             rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-1 text-white tracking-wide">
              <span className="text-gray-700 dark:text-purple-400">{intern.title}</span>
            </h2>

          <p className="text-sm text-gray-700 dark:ext-gray-300 italic">{intern.platform}</p>
          <p className="text-xs text-grey-900 dark:text-gray-400 mb-4">{intern.date}</p>

          <ul className=" list-inside list-none space-y-1 text-sm text-gray-800 dark:text-gray-200 leading-relaxed pl-1">
             {intern.description.map((line, idx) => (
             <li key={idx} className="before:content-['✦'] before:text-purple-500 before:mr-2">
                {line}
            </li>
             ))}
         </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
