import React, { useState } from "react";

const achievements = [
  {
    title: "Web Development Internship",
    platform: "Betch Walleh",
    date: "October 2023 - November 2023",
    link: "/Love_portfolio/btech walleh.jpg",
  },
  
  {
    title: "Frontend Development Internship",
    platform: "CodTech IT Solutions",
    date: "July 2024 - August 2024",
    link: "/Love_portfolio/codtech.jpg", 
  },
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-14 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="w-full sm:w-72 bg-gradient-to-br from-purple-500/50 via-indigo-500/10 to-transparent rounded-lg p-5 shadow-md border border-gray-700 hover:border-purple-500 transition"
          >
            <h3 className="text-lg font-semibold mb-1">{achieve.title}</h3>
            <p className="text-sm text-gray-900 dark:text-gray-200">{achieve.platform}</p>
            <p className="text-xs text-gray-900 dark:text-gray-300 mb-4">{achieve.date}</p>
            <button
              onClick={() => setSelectedImage(achieve.link)}
              className="inline-block text-xs bg-gray-700 text-white dark:bg-gray-100 dark:text-gray-900 hover:underline"
            >
              View Certificate →
            </button>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative p-4 max-w-3xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-purple-700 hover:bg-purple-700 px-3 py-1 rounded"
            >
              Close ✕
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-auto mx-auto h-[80vh] object-contain rounded-lg border border-purple-500 shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
