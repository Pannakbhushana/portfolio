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
          I’m a Frontend Engineer with professional experience building production web and mobile applications using React, Next.js, TypeScript, and React Native.

          I’ve worked on enterprise applications as well as independently built and shipped production products used by thousands of users. My experience includes building reusable component-driven interfaces, integrating REST APIs, managing application state with Redux, implementing offline-first functionality, and optimizing frontend performance.

          I also have hands-on backend experience with Node.js, Express.js, and MongoDB, which helps me understand and work across the full application stack.

          Beyond development, I’ve worked with production deployments, CI/CD workflows, app releases, and maintaining applications after launch. I enjoy solving engineering problems, learning new technologies, and building products that are reliable, maintainable, and useful to real users.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
