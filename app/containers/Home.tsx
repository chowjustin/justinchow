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
      className="h-screen items-center flex max-w-screen max-xl:mt-[74px] max-md:mt-[66px] mt-[90px]"
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="home"
    >
      <div className="m-auto max-md:px-4 p-24 text-center justify-center">
        <h1 className="text-white text-5xl md:text-[60px] font-bold md:hover:tracking-[0.1em] duration-500 flex">
          Hello, <br className="md:hidden" /> welcome
          <br className="md:hidden" />
          <p className="md:ml-4 max-md:hidden">to my</p>
        </h1>
        <h1 className="text-[#FFBD39] text-5xl md:text-[60px] font-bold md:hover:tracking-[0.1em] duration-500">
          personal <br className="md:hidden" /> page!
        </h1>
        <h1 className="text-white text-md md:text-xl">
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
