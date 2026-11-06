import { useEffect } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const projects = [
//   {
//     title: "MessGo App",
//     summary: "A meal subscription platform for users and mess owners with payment integration.",
//     techStack: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB"],
//     image: "./messgo.jpg",
//     link: "https://messgo.com",
//   },
//   {
//     title: "PujaPadhati",
//     summary: "A spiritual ritual platform with slokas, mantras, aartis, and donation features.",
//     techStack: ["Next.js", "Tailwind CSS", "Razorpay API"],
//     image: "./pujapadhati.png",
//     link: "https://pujapadhati.com",
//   },
// ];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Rahul Kumar Mishra | Portfolio";
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      {/* <nav className="w-full flex justify-between items-center p-4 shadow-md fixed top-0 z-50 bg-white">
        <div className="text-xl font-bold">Rahul Mishra</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <a
            href="/Rahul_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-blue-600 font-semibold"
          >
            Resume
          </a>
        </div>
      </nav> */}

      {/* About Me */}
      {/* <section
        id="about"
        className="pt-32 pb-16 px-6 text-center bg-gradient-to-r from-blue-50 via-white to-pink-50"
      >
        <img
          src="./rahul.jpg"
          alt="Rahul Kumar Mishra"
          className="w-52 h-52 rounded-full mx-auto border-4 border-blue-500 shadow-lg object-cover"
        />
        <h1 className="text-4xl mt-6 font-extrabold text-gray-800">
          Hi, I'm Rahul Kumar Mishra
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Full-stack developer passionate about building modern, performant, and user-friendly applications.
          Currently working at <strong>Ovik Techfin Pvt. Ltd.</strong>
        </p>
      </section> */}

      {/* Skills */}
      {/* <section id="skills" className="py-12 p-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-6">Skills & Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React",
            "Redux", "Next.js", "Node.js", "MongoDB", "Tailwind CSS",
            "Chakra UI", "Razorpay Integration"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section> */}

      {/* Projects */}
      {/* <section id="projects" className="py-12 p-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{project.summary}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section id="github" className="py-12 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">GitHub Contributions</h2>

        <div className="flex flex-col items-center gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=pannakbhushana&show_icons=true&theme=default"
            alt="GitHub Stats"
            className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=pannakbhushana&theme=default"
            alt="GitHub Streak"
            className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
          />
          <img
            src="https://ghchart.rshah.org/2196f3/pannakbhushana"
            alt="GitHub Contribution Chart"
            className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
          />
        </div>
      </section> */}


      {/* Contact */}
      <section id="contact" className="py-12 p-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="mb-6">Feel free to reach out through any of the platforms below:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/rahulmishra-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rahulmishra-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Rahul Kumar Mishra. All rights reserved.
      </footer>
    </div>
  );
}
