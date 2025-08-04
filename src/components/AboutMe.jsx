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
          I am a results-oriented Full-Stack Web Developer with hands-on experience in designing and building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).
          My expertise includes frontend technologies like HTML, CSS, JavaScript, and React, along with backend proficiency in Node.js and Express.

          <br /><br />
          I’ve completed over 100+ hours of holistic development work, including six fully functional projects and 30+ mini projects. I’m passionate about clean code, performance optimization, and intuitive user experiences. With a strong grasp of data structures and algorithms, I enjoy solving complex problems and working in collaborative environments to bring impactful ideas to life.

          <br /><br />
          I’m constantly exploring new technologies and aiming to grow as a developer by contributing to challenging and meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
