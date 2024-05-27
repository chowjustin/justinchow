"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import React, { useState, useEffect } from "react";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
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
      className={clsx("fixed w-full transition-transform z-50 duration-300", {
        "-translate-y-full": isHidden,
        "translate-y-0": !isHidden,
      })}
    >
      <div className="bg-black bg-opacity-85 px-5 py-2 md:px-7 md:py-3 xl:p-5 ">
        <div className="flex items-center justify-between max-md:max-w-screen max-w-[1320px] lg:w-10/12 lg:m-auto">
          <button onClick={() => handleClick("home")}>
            <div className="flex items-center gap-2">
              <Image
                src="/images/jclogo.jpg"
                height={50}
                width={50}
                alt="jc logo"
              />
              <h1 className="md:hidden lg:flex text-white font-bold text-2xl">
                JUSTINCHOW
              </h1>
            </div>
          </button>

          <div className="relative  md:hidden">
            <button onClick={handleButtonClick} className="text-white text-3xl">
              <IoMenu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-10 right-0 bg-white border border-gray-300 p-7 rounded shadow text-2xl ">
                <ul>
                  <li />
                  <button
                    onClick={() => handleClick("home")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    Home
                  </button>
                  <li />
                  <button
                    onClick={() => handleClick("about")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    About
                  </button>
                  <li />
                  <button
                    onClick={() => handleClick("education")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    Education
                  </button>
                  <li />
                  <button
                    onClick={() => handleClick("achievements")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    Achievements
                  </button>
                  <li />
                  <button
                    onClick={() => handleClick("skills")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    Skills
                  </button>
                  <li />
                  <button
                    onClick={() => handleClick("contact")}
                    className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
                  >
                    Contact
                  </button>
                </ul>
              </div>
            )}
          </div>
          <div className="gap-6 xl:gap-12 hidden md:flex">
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("home")}
            >
              Home
            </button>
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("about")}
            >
              About
            </button>
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("education")}
            >
              Education
            </button>
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("achievements")}
            >
              Achievements
            </button>
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("skills")}
            >
              Skills
            </button>
            <button
              className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
              onClick={() => handleClick("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
