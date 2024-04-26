import React from "react";
import SchoolIcon from "../Files/education.svg"; // Assuming you have an SVG icon for the school
import { educationData } from "../data";
function Education() {
  return (
    <section id="education">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="education"
            src={SchoolIcon} // Path to your school SVG icon
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-3xl mb-4 font-medium text-gray-900">
            Education Background
          </h2>
          <div className="max-w-xl mx-auto">
            {educationData.map((education, index) => (
              <div
                key={index}
                className="bg-gray-800 shadow-md rounded-lg p-4 mb-4"
              >
                <h3 className="text-xl font-medium mb-2">
                  {education.degreeName}
                </h3>
                <p className="text-white-700">{education.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
