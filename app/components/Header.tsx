"use client";

import Link from "next/link";
import ButtonText from "./ButtonText";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileButton from "./MobileButton";

const Header = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black bg-opacity-85 px-5 py-2 md:px-7 md:py-3 xl:p-5 ">
        <div className="flex items-center justify-between max-w-[1320px] lg:w-10/12 lg:m-auto">
          <Link href="#">
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
          </Link>
          <div className="relative md:hidden">
            <button onClick={handleButtonClick} className="text-white text-3xl">
              <IoMenu />
            </button>
            {isMenuOpen && (
              <div className="absolute top-10 right-0 bg-white border border-gray-300 p-7 rounded shadow text-2xl ">
                <ul>
                  <li />
                  <MobileButton title="Home" id="#" />
                  <li />
                  <MobileButton title="About" id="#about" />
                  <li />
                  <MobileButton title="Education" id="#education" />
                  <li />
                  <MobileButton title="Achievements" id="#achievements" />
                  <li />
                  <MobileButton title="Skills" id="#skills" />
                  <li />
                  <MobileButton title="Contact" id="#contact" />
                </ul>
              </div>
            )}
          </div>
          <div className="gap-6 xl:gap-12 hidden md:flex">
            <ButtonText title="Home" id="#" />
            <ButtonText title="About" id="#about" />
            <ButtonText title="Education" id="#education" />
            <ButtonText title="Achievements" id="#achievements" />
            <ButtonText title="Skills" id="#skills" />
            <ButtonText title="Contact" id="#contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
