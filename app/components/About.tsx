"use client";

import Image from "next/image";

function openPdfInNewTab() {
  window.open("/others/CVNEW.pdf", "_blank");
}

const About = () => {
  return (
    <div className="flex justify-center mx-auto min-w-[515px] mb-14">
      <div className="lg:w-1/2">
        <div className="relative text-center lg:text-left">
          <h1 className="text-white text-5xl font-bold hidden lg:flex ">
            About me
          </h1>
          <h1 className="text-white text-[75px] lg:text-[#FFFFFF1A] lg:text-[100px] font-bold lg:absolute lg:top-[-10px] lg:left-0 z-10 hover:text-[#FFBD39] hover:top-2 duration-500">
            About
          </h1>
          <h1 className="text-[#999999] text-xl px-10 lg:px-0 hover:text-white hover:text-opacity-90 duration-500">
            <br className="hidden lg:flex" />
            <br className="hidden lg:flex" />
            <br className="hidden lg:flex" />
            <br className="hidden lg:flex" />
            Hello everyone, I am Justin Chow! <br />I am currently a freshman at
            the Sepuluh Nopember Institute of Technology (ITS) majoring in
            Informatics. I have a lot of enthusiasm for technology, web
            development, learning new stacks snd working as a team.
          </h1>
        </div>
        <div className="justify-center items-center flex gap-3 lg:block">
          <div className=" hidden gap-1 my-10">
            <h1 className="text-white text-2xl">3,88</h1>
            <h1 className="text-[#FFBD39] text-2xl font-semibold"> GPA</h1>
          </div>
          <button
            className="bg-[#FFBD39] mt-5 h-10 lg:h-14 px-5 py-2 lg:p-5 font-semibold tracking-wide text-sm rounded-full hover:text-white duration-300"
            onClick={openPdfInNewTab}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Image src="/images/pics.png" width={400} height={400} alt="pics" />
      </div>
    </div>
  );
};

export default About;
