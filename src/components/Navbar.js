import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

import logo from "../Files/rachithLogo.png";
import linkedin from "../Files/linkedin.png";
import github from "../Files/github.png";
import facebook from "../Files/facebook.png";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="title-font font-medium text-white mb-4 md:mb-0"
          href="#about"
        >
          <img src={logo} alt="Rachith Tharana" className="w-30 h-5 " />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="https://github.com/rachcha2002"
          className="text-gray-400 hover:text-gray-300 mr-4"
        >
          <img src={github} alt="Rachith Tharana" className="w-8 h-8 " />
        </a>
        <a
          href="linkedin.com/in/rachith-tharana-a27a532a0"
          className="text-gray-400 hover:text-gray-300 mr-4"
        >
          <img src={linkedin} alt="Rachith Tharana" className="w-8 h-8 " />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61550494125956"
          className="text-gray-400 hover:text-gray-300"
        >
          <img src={facebook} alt="Rachith Tharana" className="w-8 h-8 " />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          style={{ marginLeft: "1%" }}
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
