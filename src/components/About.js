import React from "react";
import ProfilePic from "../Files/RachithMain.jpg";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="flex items-center title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <img
              src={ProfilePic}
              alt="Profile Photo"
              className="w-40 h-40 rounded-full mr-4"
            />
            <span>
              Hi, I'm Rachith.
              <br className="hidden lg:inline-block" />I love to learn new
              things.
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello, I'm Rachith Tharana and I'm a second year Software
            Engineering undergraduate student at{" "}
            <a href="https://www.sliit.lk/" style={{ color: "white" }}>
              SLIIT Sri Lanka
            </a>
            .
            <br />
            <br /> I'm currently working on my academic work and learning new
            cutting edge technologies and applying them to real-world
            applications. And these days I spend most of my time to solving data
            structure problems using JAVA and in the meantime, I spend some time
            learning the MERN stack.
            <br />
            <br /> I am most passionate about cloud computing, full stack
            development and development frameworks. Also I have a keen interest
            in Software Quality Assurance. And I stay in tune with the latest
            technologies in the current tech world.
          </p>
          <div className="flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/12QSMNsxmkea6Q8fAsN52phEvzHa9TLdp?usp=sharing"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
