import EducationBox from "@/app/components/EducationBox";

import React from "react";

const Education = () => {
  return (
    <div id="education" className="p-10 lg:p-24 ">
      <div className=" flex justify-center group" data-aos="fade-up">
        <h1 className="text-white text-5xl dark:text-gray-400 font-bold hidden lg:flex">
          Education
        </h1>
        <h1
          className="text-white dark:text-gray-400 dark:lg:text-gray-100 text-[75px] dark:group-hover:text-[#38bdf8] max-md:text-5xl lg:text-[#FFFFFF1A] lg:text-[100px] font-bold lg:absolute group-hover:text-[#FFBD39] duration-500"
          style={{ zIndex: 0 }}
        >
          Education
        </h1>
      </div>
      <div
        className="lg:flex lg:gap-10 lg:mx-10"
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        <EducationBox
          year="2020-2023"
          major="Natural Science"
          school="Methodist-3 Senior High School Medan"
          grade="Grade: 97.14"
          logo="/images/logom3.png"
          list1="Class Trasurer 2022-2023"
          list2="Robotics Club"
          list3="Designer and Illustrator"
          link="https://www.instagram.com/methodist3medan/"
        />
        <EducationBox
          year="2023-present"
          major="Informatics Engineering"
          school="Sepuluh Nopember Institute of Technology"
          grade="GPA: 3.88"
          logo="/images/itslogo.png"
          list1="Schematics NPC Senior 2023 Finalist"
          list2="Schematics ITS IT Dev Staff"
          list3="GDSC ITS Member"
          link="https://www.its.ac.id/"
        />
      </div>
      <div id="achievements"></div>
    </div>
  );
};

export default Education;
