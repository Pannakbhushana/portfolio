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
    link: "https://messgo.in/",
    github: "https://github.com/Pannakbhushana/messgo",
  },
  {
    title: "PujaPadhati",
    summary: "A spiritual ritual platform with slokas, mantras, aartis, and donation features.",
    techStack: ["Next.js", "Tailwind CSS", "Razorpay API"],
    image: "/pujapadhati.png",
    link: "https://pujapadhati.com",
    github: "https://github.com/Pannakbhushana/puja-padhati",
  },
  {
    title: "ChatBot",
    summary: "A web application where users can create an account and chat with Gemini AI using text or voice. All chats are saved and accessible from any device.",
    techStack: ["React", "Redux toolkit", "Node.js", "Express.js", "Mongoose", "Chakra UI", "Tailwind CSS"],
    image: "https://github.com/Pannakbhushana/zerocode-fe-assignment/blob/main/screenshots/dashboard.png?raw=true",
    link: "https://chitchatwithchatbot.netlify.app/login",
    github: "https://github.com/Pannakbhushana/zerocode-fe-assignme",
  },
  {
    title: "MyTube",
    summary: "MyTube is a video-sharing application inspired by YouTube. It offers a rich media experience like video streaming.",
    techStack: ["HTML", "CSS", "Javascript"],
    image: "https://private-user-images.githubusercontent.com/112654188/334077916-1d87614a-b660-4ff9-b9ce-948214ef2e9d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQzMTExNjcsIm5iZiI6MTc1NDMxMDg2NywicGF0aCI6Ii8xMTI2NTQxODgvMzM0MDc3OTE2LTFkODc2MTRhLWI2NjAtNGZmOS1iOWNlLTk0ODIxNGVmMmU5ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwNFQxMjM0MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMWI3ZjM2M2Q3OThlYjBmOGQzYWVjZDE5YTliYjM0MzQzOWZmYTY1Mjc3ZjFlZjFkMjBmY2I4MTRhNzZkNzRhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.bSNYU8tZpws8hTuM8Ke6EsrHZ7-rWKFygqxI3nE8CpQ",
    link: "https://frolicking-caramel-76c661.netlify.app/",
    github: "https://github.com/Pannakbhushana/MyTube",
  },
  {
    title: "KalpTaru",
    summary: "Welcome to KalpTaru, an Amazon clone application! This project aims to replicate the core functionalities of Amazon, providing an e-commerce platform",
    techStack: ["React", "Chakra Ui", "Javascript"],
    image: "https://private-user-images.githubusercontent.com/112654188/334075773-77a14715-4c58-4ea9-a4fd-6adf89f773b9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQzMTEyODksIm5iZiI6MTc1NDMxMDk4OSwicGF0aCI6Ii8xMTI2NTQxODgvMzM0MDc1NzczLTc3YTE0NzE1LTRjNTgtNGVhOS1hNGZkLTZhZGY4OWY3NzNiOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgwNFQxMjM2MjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMzc4NjkxY2RiYTUxNzY0N2JjM2U0NDZlMzM5ZGY4MGZjMjcxNWQwMzZhZmE5MTg4YTMyZGRkN2VkMjNiMjU0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JfUkMWmW5DHXYUBiYEMW1i17TkXy1UICv_nJDveHHhc",
    link: "https://taupe-salamander-d7555e.netlify.app/",
    github: "https://github.com/Pannakbhushana/amezon-clone?tab=readme-ov-file",
  },
  {
    title: "OneStore",
    summary: "OneStore is a Lifestyle Accessories Brand that curates stunning designs and prints it on a wide range of personal accessories. We vision to bring the things you love on the things you use.",
    techStack: ["React", "Chakra UI", "Redux", "Node.js", "MongoDB"],
    image: "https://github.com/palabhi017/rctc4eva/raw/master/src/styles/Screenshot%20(129).png?raw=true",
    link: "https://ephemeral-brioche-f8dbe6.netlify.app/",
    github: "https://github.com/Pannakbhushana/Meesho-Clone",
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
