import EducationBox from "./EducationBox";

import React from "react";

const Education = () => {
  return (
    <div id="education" className="p-10 lg:p-24 min-w-[515px]">
      <div className=" flex justify-center ">
        <h1
          className="text-white text-5xl font-bold hidden lg:flex "
          style={{ zIndex: 1 }}
          data-aos="fade-up"
        >
          Education
        </h1>
        <h1
          className="text-white text-[75px] lg:text-[#FFFFFF1A] lg:text-[100px] font-bold lg:absolute hover:text-[#FFBD39] duration-500"
          style={{ zIndex: 0 }}
          data-aos="fade-up"
        >
          Education
        </h1>
      </div>
      <div className="lg:flex lg:gap-10 lg:mx-10">
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
