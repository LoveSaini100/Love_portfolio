import React from "react";

export default function ProjectCard({
  title,
  description,
  tags = [],
  repoLink,
  icon: Icon,   
}) {
  return (
    <div className="relative w-full sm:w-80 md:w-72 lg:w-80 p-[1px] rounded-xl  
    border-2 hover:shadow-lg
    dark:bg-gradient-to-br from-purple-600/80 via-indigo-700/30 to-transparent dark:hover:scale-[1.02] transition-transform duration-300">
      <div className="h-full rounded-xl bg-white dark:bg-gray-800/80 backdrop-blur-md px-5 py-6 flex flex-col">
        {/* icon in top‑left */}
        {Icon && (
          <div className="text-3xl text-gray-800 dark:text-purple-400 mb-4">
            <Icon />
          </div>
        )}

        <h3 className="text-lg font-semibold text-grey-900 dark:text-white">{title}</h3>
        <p className="text-sm text-grey-900 dark:text-gray-300 mt-1 flex-grow">{description}</p>

        {/* tech badges */}
        <div className="flex gap-2 flex-wrap mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-[2px] rounded-full bg-gray-700 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* action buttons */}
        <div className="flex gap-3 mt-5">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs border border-gray-500 rounded-md py-1 hover:bg-gray-600 hover:text-white transition-colors"
            >
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
