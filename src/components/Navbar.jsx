import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-transparent backdrop-blur-md shadow-md font-serif px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#8A3B12] tracking-wide">Rahul Mishra</div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {["about", "skills", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[#8A3B12] hover:text-blue-600 relative transition duration-300 group"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Rahul_Mishra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-[#8A3B12] text-white px-4 py-2 rounded-md font-medium shadow hover:shadow-lg transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
