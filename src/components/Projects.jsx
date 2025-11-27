import React from "react";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import { FaExternalLinkAlt, FaGithub, FaPlayCircle } from "react-icons/fa";
import SectionHeading from "./layouts/SectionHeading";

const projects = [
  {
    title: "PujaPadhati – Mobile App (Published on Google Play Store)",
    summary:
      "A spiritual mobile app featuring festivals, rituals, remedies, and search functionality. Published on the Google Play Store with active users.",
    techStack: ["React Native", "TypeScript", "Expo", "React Navigation"],
    image: "/omorg.webp",
    link: "https://play.google.com/store/apps/details?id=com.rahulmishra.PujaPadhati",
    video: "https://www.youtube.com/shorts/_iMcF-stVYM",
  },
  {
    title: "PujaPadhati (v2.0) – Web Application",
    live: "www.pujapadhati.com",
    summary:
      "An SEO-optimized spiritual platform with Festivals, Remedies, Dark Mode, Search, and a Play Store app (PujaPadhati).",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Fuse.js", "EmailJS"],
    image: "/pujapadhati-v2.webp",
    link: "https://pujapadhati.com",
    video: "https://www.youtube.com/shorts/_iMcF-stVYM",
  },
  {
    title: "MessGo",
    live: "www.messgo.in",
    summary: "A subscription-based meal management platform enabling users to book plans and mess owners to manage orders, menus, and payments seamlessly",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB"],
    image: "/messgo.jpg",
    link: "https://messgo.in/",
    github: "https://github.com/Pannakbhushana/messgo",
    video: "https://www.youtube.com/watch?v=2pq5RbrPw3I"
  },
  {
    title: "ChatBot",
    summary: "A web application where users can create an account and chat with Gemini AI using text or voice. All chats are saved and accessible from any device.",
    techStack: ["React", "Redux toolkit", "Node.js", "Express.js", "Mongoose", "Chakra UI", "Tailwind CSS"],
    image: "/chatbot.png",
    link: "https://chitchatwithchatbot.netlify.app/",
    github: "https://github.com/Pannakbhushana/zerocode-fe-assignment",
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
    title: "PujaPadhati Version 1",
    summary:
      "A spiritual ritual platform featuring slokas, mantras, aartis, and donation capabilities. Built with a simple yet elegant UI for exploring Hindu rituals and devotional content.",
    techStack: ["React.js", "Chakra UI", "EmailJS"],
    image: "/pujapadhati.png",
    link: "https://puja-padhati.netlify.app",
    video: "https://www.youtube.com/shorts/XF7gd51ssnA",
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
                className="w-full h-50 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                {project.live && (
                  <div className="mt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-block text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium hover:bg-blue-100 transition"
                    >
                      Live at: {project.live}
                    </a>
                  </div>
                )}

                <p className="text-sm text-gray-600 mt-4 leading-relaxed flex-1">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t flex items-center gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
                  >
                    <FaExternalLinkAlt />
                    Go Live
                  </a>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-700 font-medium hover:underline"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500 italic">
                      Source code on request
                    </span>
                  )}

                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-500 font-medium hover:underline"
                    >
                      <FaPlayCircle className="text-red-500" size={18} />
                      Presentation
                    </a>
                  )}
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
