import React from "react";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "./layouts/SectionHeading";

const projects = [
{
  title: "PujaPadhati Version 1",
  summary:
    "A spiritual ritual platform featuring slokas, mantras, aartis, and donation capabilities. Built with a simple yet elegant UI for exploring Hindu rituals and devotional content.",
  techStack: ["React.js", "Chakra UI", "EmailJS"],
  image: "/pujapadhati.png",
  link: "https://puja-padhati.netlify.app",
  github: "https://github.com/Pannakbhushana/puja-padhati",
},
{
  title: "PujaPadhati Version 2.0 visit: (pujapadhati.com)",
  summary:
    "An SEO-optimized spiritual platform with Festivals, Remedies, Dark Mode, Search, and a Play Store app (PujaPadhati).",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Fuse.js", "EmailJS"],
  image: "pujapadhati-v2.webp",
  link: "https://pujapadhati.com",
  github: "https://github.com/Pannakbhushana/pujapadhati-version-2",
},
  {
    title: "MessGo App",
    summary: "A meal subscription platform for users and mess owners with payment integration.",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB"],
    image: "/messgo.jpg",
    link: "https://messgo.in/",
    github: "https://github.com/Pannakbhushana/messgo",
  },
  {
    title: "ChatBot",
    summary: "A web application where users can create an account and chat with Gemini AI using text or voice. All chats are saved and accessible from any device.",
    techStack: ["React", "Redux toolkit", "Node.js", "Express.js", "Mongoose", "Chakra UI", "Tailwind CSS"],
    image: "/chatbot.png",
    link: "https://chitchatwithchatbot.netlify.app/login",
    github: "https://github.com/Pannakbhushana/zerocode-fe-assignme",
  },
  {
    title: "MyTube",
    summary: "MyTube is a video-sharing application inspired by YouTube. It offers a rich media experience like video streaming.",
    techStack: ["HTML", "CSS", "Javascript"],
    image: "/mytube.png",
    link: "https://frolicking-caramel-76c661.netlify.app/",
    github: "https://github.com/Pannakbhushana/MyTube",
  },
  {
    title: "KalpTaru",
    summary: "Welcome to KalpTaru, an Amazon clone application! This project aims to replicate the core functionalities of Amazon, providing an e-commerce platform",
    techStack: ["React", "Chakra Ui", "Javascript"],
    image: "/kalptaru.jpg",
    link: "https://taupe-salamander-d7555e.netlify.app/",
    github: "https://github.com/Pannakbhushana/amezon-clone?tab=readme-ov-file",
  }
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
