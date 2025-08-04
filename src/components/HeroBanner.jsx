import React from "react";
import { FiDownload } from "react-icons/fi"; // Download icon
import BackgroundPattern from "./layouts/BackgroundPattern";
import SectionHeading from "./layouts/SectionHeading";

const HeroBanner = () => {
    return (
        <section
            id="hero"
            className="relative px-6 pt-[100px] bg-gradient-to-b from-blue-50 to-white min-h-[95vh] flex items-center"
        >
            <BackgroundPattern />

            {/* Content */}
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20 md:gap-28 relative z-10">
                {/* Left: Text */}
                <div className="text-center md:w-[70%]">
                    <SectionHeading >Hi</SectionHeading>
                    <SectionHeading>I'm Rahul Kumar Mishra</SectionHeading>

                    <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                        Full-Stack Web Developer 👨‍💻 <br />
                        I build responsive, high-performance web applications using the MERN stack.
                        Passionate about clean code, intuitive UI, and continuous learning.
                    </p>

                    {/* Resume Button */}
                    <div className="mt-6 flex justify-center">
                        <a
                            href="/Rahul_Mishra_Resume.pdf"
                            download
                            target="_blank"
                            className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#8A3B12] text-[#8A3B12] rounded-lg text-base font-medium hover:bg-[#8A3B12] hover:text-white transition duration-300"
                        >
                            <FiDownload className="text-xl" />
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="md:w-[40%] flex justify-center">
                    <img
                        src="./rahul.jpg"
                        alt="Rahul Kumar Mishra"
                        className="w-60 h-60 md:w-80 md:h-80 rounded-full border-2 border-blue-500 shadow-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
