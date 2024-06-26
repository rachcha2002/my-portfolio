import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
//import { ArrowRightIcon } from "@heroicons/react/solid";

function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Here My Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            To be a good developer, you need to have a ton of experience. Here
            are some of my projects that I have done so far.Still I'm working on
            more projects to improve my skills.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a key={project.image} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                {/*<img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
          />*/}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br></br>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4  text-green 400 hover:text-green-500"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
