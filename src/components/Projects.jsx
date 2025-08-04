import React from "react";
import { FaPalette, FaImages, FaTicketAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CraftHeaven",
    description:
      "An online art and painting selling website with modern design, product showcase, and interactive user experience.",
    tags: ["HTML&CSS", "Bootstrap", "JavaScript"],
    repoLink: "https://github.com/LoveSaini100/CraftHeaven",
    icon: FaPalette,
  },
  
  {
    title: "Photo Gallary App",
    description:
      " A dynamic platform for browsing categorized photos and uploading personal images with seamless user interaction.",
    tags: ["React", "TailWind","Unsplash API"],
    repoLink: "https://github.com/LoveSaini100/photo-gallary-app",
    icon: FaImages,
  },
  {
    title: "Ticket Booking ",
    description: " A complete cinema booking platform where users can select movies, choose showtimes, pick seats, and confirm reservations.",
    tags: ["React", "tailwind"],
    repoLink: "https://github.com/LoveSaini100/ticketBooking",
    icon: FaTicketAlt,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-14 ">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black dark:text-white mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
