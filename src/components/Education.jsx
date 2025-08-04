import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science ",
    institution: "Quantum University Roorkee",
    date: "2022 - 2026",
    
  },
  {
    degree: "Senior Secondary (12th) (CBSE)",
    institution: "The Skyland School, Shahpur, Muzaffarnagar ",
    date: "2021 - 2022",
    
  },
  {
    degree: "High School (10th) (CBSE)",
    institution: "SDS Public School, Titawi, Muzaffarnagar",
    date: "2019 - 2020",
    
  },
];

export default function Education() {
  return (
    <section className="w-full overflow-x-hidden py-14 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Education
      </h2>

      <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-gray-100 dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-300 dark:border-gray-700 transition"
          >
            <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{edu.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


