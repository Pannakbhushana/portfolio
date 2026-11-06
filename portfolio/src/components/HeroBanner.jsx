import React from "react";
import { FiDownload } from "react-icons/fi"; // Download icon
import BackgroundPattern from "./layouts/BackgroundPattern";
import SectionHeading from "./layouts/SectionHeading";

const HeroBanner = () => {
    const handleResume = () => {
        window.open(
            "https://drive.google.com/file/d/1Ys0aZABmK1Rsg3HpruYq8kN1vk9VjS1q/view?usp=sharing",
            "_blank"
        );
    };

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
                        Frontend Engineer | React • Next.js • TypeScript • React Native <br />

                        I build and ship production web and mobile applications. I have experience developing enterprise applications and independently building, publishing, and maintaining production products used by thousands of users.
                    </p>

                    {/* Resume Button */}
                    <div className="mt-6 flex justify-center" onClick={handleResume}>
                        <a
                            href="/Rahul%20Kumar%20Mishra%20-%20Resume.pdf"
                            download="Rahul-Kumar-Mishra-Resume"
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
                        src="./rahul-img.png"
                        alt="Rahul Kumar Mishra"
                        className="w-60 h-60 md:w-80 md:h-80 rounded-full border-2 border-blue-500 shadow-xl object-cover"
                    />
                </div>
            </div>
        </section >
    );
};

export default HeroBanner;
