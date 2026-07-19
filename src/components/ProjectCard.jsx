import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tags = [],
  liveLink,
  icon: Icon,
}) {
  return (
    <div className="group relative flex flex-col justify-between h-full rounded-2xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-md hover:border-purple-500/50 dark:hover:border-purple-550/40 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.15)] dark:hover:shadow-[0_15px_30px_-10px_rgba(168,85,247,0.05)] transition-all duration-350 overflow-hidden">
      
      {/* Visual background gradient overlay */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-indigo-550/5 group-hover:to-pink-500/5 -z-10 transition-all duration-500" />

      {/* Card Header (Mac IDE style) */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          {liveLink ? "Deployment" : "Repository"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Icon & Title */}
        <div className="flex items-center gap-3.5 mb-3.5">
          {Icon && (
            <div className="p-3 bg-purple-500/10 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 rounded-xl text-xl">
              <Icon />
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2 flex gap-3">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-550 hover:to-indigo-650 text-white rounded-xl font-medium text-xs transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <span>Live Link</span>
            <FaExternalLinkAlt className="text-[9px]" />
          </a>
        )}
      </div>
    </div>
  );
}
