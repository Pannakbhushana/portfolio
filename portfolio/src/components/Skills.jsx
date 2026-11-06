import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiChakraui,
    SiRazorpay,
} from "react-icons/si";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import SectionHeading from "./layouts/SectionHeading";

const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-600" /> },
    { name: "Razorpay", icon: <SiRazorpay className="text-indigo-500" /> },
];

// Animation for the skill cards
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
    }),
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white text-center"
        >
            <FadeInWhenVisible direction="up" animationType="scale">
                <SectionHeading>Skills & Tech Stack</SectionHeading>
            </FadeInWhenVisible>
            <br />
            <FadeInWhenVisible direction="up" animationType="slideFade">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, i) => (
                        <FadeInWhenVisible key={i} direction="up" delay={i * 0.1}>
                        <div
                            className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                            </span>
                        </div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </FadeInWhenVisible>
        </section>
    );
};

export default Skills;
