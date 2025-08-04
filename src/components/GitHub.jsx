import react from "react";
import FadeInWhenVisible from "./layouts/FadeInWhenVisible";
import SectionHeading from "./layouts/SectionHeading";

const GitHub = () => {
  return <section id="github" className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white text-center">

    <FadeInWhenVisible direction="up" animationType="scale">
      <SectionHeading>GitHub Contributions</SectionHeading>
    </FadeInWhenVisible>
    <br />
    <div className="flex flex-col items-center gap-6">
      <FadeInWhenVisible direction="up" delay={1 * 0.1}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=pannakbhushana&show_icons=true&theme=default"
          alt="GitHub Stats"
          className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible direction="up" delay={1 * 0.2}>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=pannakbhushana&theme=default"
          alt="GitHub Streak"
          className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible direction="up" delay={1 * 0.3}>
        <img
          src="https://ghchart.rshah.org/2196f3/pannakbhushana"
          alt="GitHub Contribution Chart"
          className="max-w-full w-[90%] md:w-[600px] rounded-lg shadow"
        />
      </FadeInWhenVisible>
    </div>
  </section>
}

export default GitHub