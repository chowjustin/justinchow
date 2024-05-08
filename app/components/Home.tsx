"use client";

import { FiChevronsDown } from "react-icons/fi";

import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeLayout = ({}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const handleClick = () => {
    const element = document.getElementById("about");
    if (element) {
      let offset;
      if (window.innerWidth < 768) {
        offset = element.getBoundingClientRect().top + window.scrollY - 66;
      } else if (window.innerWidth < 1280) {
        offset = element.getBoundingClientRect().top + window.scrollY - 74;
      } else {
        offset = element.getBoundingClientRect().top + window.scrollY - 90;
      }
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="h-screen items-center flex mt-[120px] max-w-screen min-h-[900px] md:min-h-0"
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="home"
    >
      <div className="m-auto p-24 text-center justify-center">
        <h1 className="text-white text-6xl md:text-[60px] font-bold  hover:tracking-[0.1em] duration-500">
          Hello, welcome <br className="md:hidden" />
          to my
        </h1>
        <h1 className="text-[#FFBD39] text-6xl md:text-[60px] font-bold  hover:tracking-[0.1em] duration-500">
          personal page!
        </h1>
        <h1 className="text-white text-lg md:text-xl">
          <br />
          <br />
          <i>Scroll down to find more!</i>
        </h1>
        <div
          className="text-white flex mx-auto text-2xl md:text-3xl justify-center mt-5 animate-bounce"
          onClick={handleClick}
        >
          <button>
            <FiChevronsDown />
          </button>
        </div>
        <div id="about" className="mt-[150px]"></div>
      </div>
    </div>
  );
};

export default HomeLayout;
