import React from "react";
import NT from "../assets/portfolio/NT-2022.png";
import RR from "../assets/portfolio/RR-2022.png";
import TE from "../assets/portfolio/TE-2022.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: NT,
      github: "https://github.com/Ozz760/Note-Taker-Express.js",
      link: "https://lit-cliffs-22896.herokuapp.com/",
    },
    {
      id: 2,
      src: RR,
      github: "https://github.com/Ozz760/Recipe-Roulette",
      link: "https://kreativekntrl.github.io/project-01/",
    },
    {
      id: 3,
      src: TE,
      github: "https://github.com/Ozz760/Text-Editor-io",
      link: "https://murmuring-depths-08823.herokuapp.com/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src, github, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  <a href={github} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
