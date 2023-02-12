import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quae
          excepturi accusamus praesentium, maiores fugiat. Minima, similique
          fugit? Dicta quisquam quibusdam eos inventore impedit aliquam optio
          aperiam maiores iusto obcaecati? Asperiores aliquam voluptatem eveniet
          nisi dolores saepe magni quaerat quod nihil quisquam! Consequuntur,
          odit nesciunt. Amet harum alias earum doloremque.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, est
          quos expedita minus sapiente rerum voluptatum quasi? Ea nisi eos ex
          repudiandae quasi culpa porro voluptate beatae atque nemo et ducimus
          aut iste, ipsam, possimus perferendis vel! Iure voluptatem soluta
          quisquam minima deserunt officia incidunt blanditiis quia, nihil
          laborum! Itaque.
        </p>
      </div>
    </div>
  );
};

export default About;
