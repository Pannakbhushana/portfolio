import React from "react";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./layouts/SectionHeading";

const projects = [
  {
    title: "MessGo App",
    summary: "A meal subscription platform for users and mess owners with payment integration.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB"],
    image: "/messgo.jpg",
    link: "https://messgo.com",
    github: "https://github.com/yourusername/messgo",
  },
  {
    title: "PujaPadhati",
    summary: "A spiritual ritual platform with slokas, mantras, aartis, and donation features.",
    techStack: ["Next.js", "Tailwind CSS", "Razorpay API"],
    image: "/pujapadhati.png",
    link: "https://pujapadhati.com",
    github: "https://github.com/yourusername/messgo",
  },
  {
    title: "Taskify",
    summary: "A simple task management app with drag-and-drop support and real-time sync.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    image: "/taskify.jpg",
    link: "#",
    github: "https://github.com/yourusername/messgo",
  },
  {
    title: "DevPortfolio",
    summary: "A customizable portfolio template for developers with light/dark theme toggle.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/portfolio.jpg",
    link: "#",
    github: "https://github.com/yourusername/messgo",
  },
  {
    title: "Blogverse",
    summary: "A markdown-based blogging platform with tagging and code highlighting.",
    techStack: ["React", "Express", "MongoDB"],
    image: "/blogverse.jpg",
    link: "#",
    github: "https://github.com/yourusername/messgo",
  },
  {
    title: "Weatherly",
    summary: "A sleek weather app with hourly forecasts and animated icons.",
    techStack: ["React", "OpenWeather API", "Tailwind"],
    image: "/weatherly.jpg",
    link: "#",
    github: "https://github.com/yourusername/messgo",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 relative">
      <FadeInWhenVisible direction="up" animationType="scale">
        <SectionHeading>Projects</SectionHeading>
      </FadeInWhenVisible>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <FadeInWhenVisible key={i} direction="up" delay={i * 0.1}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-1">{project.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <FaExternalLinkAlt />
                    Live Site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-700 font-medium hover:underline"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};

export default Projects;
