import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! My name is Oscar and I enjoy creating and discovering new ways
          to make exciting full stack applications. My interest in full stack
          development and software engineering started back in 2022 when I
          wanted to make a page where I can showcase my work in business
          administration and display the business ideas that I had while
          attending MiraCosta College. Soon I was hooked on web development and
          I enrolled in a Full Stack Web Development BootCamp at UCSD.
        </p>
        <br />

        <p className="text-xl">
          Today I work everyday to harness and improve my web development skills
          learning new technologies like Java, Python, and TypeScript to expand
          my knowledge and further enhance my skills. I've had exciting
          opportunities where I worked on a mobile application using React
          Native and Firebase for a start-up called Packed ( then DormIt ) where
          their goal was to provide college students with affordable
          conveniences like food deliveries.
        </p>
      </div>
    </div>
  );
};

export default About;
