import React from 'react';
import FadeInWhenVisible from './layouts/FadeInWhenVisible';
import SectionHeading from './layouts/SectionHeading';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible direction="up" animationType="scale">
          <SectionHeading>About Me</SectionHeading>
        </FadeInWhenVisible>

        <p className="text-gray-700 leading-relaxed text-lg">
          I am a dedicated Web Developer with practical experience in building responsive and scalable applications using the MERN stack. My core strengths lie in frontend development, particularly in React, JavaScript, TypeScript, Redux Toolkit, Chakra UI, and Tailwind CSS. On the backend, I work with Node.js and Express to create secure and efficient APIs.
          I have built multiple end-to-end projects that reflect strong fundamentals in clean code, component-driven architecture, and performance optimization. I also have a good understanding of data structures and algorithms, and I enjoy solving technical problems through logical and structured approaches.
          I continuously explore modern tools and technologies and aim to contribute to products that offer meaningful user experiences while growing as a developer in a collaborative environment.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
