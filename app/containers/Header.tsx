"use client";

import Image from "next/image";
import { IoMenu } from "react-icons/io5";

import DarkModeToggle from "@/app/components/DarkModeToggle";
import HeaderButton from "@/app/components/HeaderButton";
import HeaderMobileButton from "@/app/components/HeaderMobileButton";

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
        setIsHidden(true);
      } else {
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
      <div className="dark:bg-white bg-black text-black-2 bg-opacity-85 px-5 py-2 md:px-7 md:py-3 xl:p-5 shadow-lg dark:shadow-sky-400 shadow-[#FFBD39]">
        <div className="flex items-center justify-between max-md:max-w-screen max-w-[1320px] lg:w-10/12 lg:m-auto">
          <button onClick={() => handleClick("home")}>
            <div className="flex items-center gap-2">
              <Image
                src="/images/jcblack.png"
                height={50}
                width={50}
                alt="jc logo"
                className="hidden dark:flex"
              />
              <Image
                src="/images/jcwhite.png"
                height={50}
                width={50}
                alt="jc logo"
                className="dark:hidden flex"
              />
              <h1 className="md:hidden lg:flex dark:text-black font-bold text-2xl text-white">
                JUSTINCHOW
              </h1>
            </div>
          </button>

          <div className="relative  md:hidden">
            <button onClick={handleButtonClick} className="text-black text-3xl">
              <IoMenu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-10 right-0 bg-black border border-gray-300 p-7 rounded shadow text-2xl ">
                <ul>
                  <HeaderMobileButton
                    section="Home"
                    onClick={() => handleClick("#home")}
                  />
                  <HeaderMobileButton
                    section="About"
                    onClick={() => handleClick("about")}
                  />
                  <HeaderMobileButton
                    section="Education"
                    onClick={() => handleClick("education")}
                  />
                  <HeaderMobileButton
                    section="Achievements"
                    onClick={() => handleClick("achievements")}
                  />
                  <HeaderMobileButton
                    section="Skills"
                    onClick={() => handleClick("skills")}
                  />
                  <HeaderMobileButton
                    section="Contact"
                    onClick={() => handleClick("contact")}
                  />
                  <li>
                    <DarkModeToggle />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="gap-6 xl:gap-12 hidden md:flex">
            <HeaderButton section="Home" onClick={() => handleClick("home")} />
            <HeaderButton
              section="About"
              onClick={() => handleClick("about")}
            />
            <HeaderButton
              section="Education"
              onClick={() => handleClick("education")}
            />
            <HeaderButton
              section="Achievements"
              onClick={() => handleClick("achievements")}
            />
            <HeaderButton
              section="Skills"
              onClick={() => handleClick("skills")}
            />
            <HeaderButton
              section="Contact"
              onClick={() => handleClick("contact")}
            />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
