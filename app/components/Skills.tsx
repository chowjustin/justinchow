import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiCoursera,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import SkillsIcon from "./SkillsIcon";

const Skills = () => {
  return (
    <div id="skills" className="p-10 lg:p-24 mb-[50px] lg:mb-[30px]">
      <div className=" flex justify-center">
        <h1
          className="text-white text-[75px] max-md:mb-6 max-md:text-5xl lg:text-white lg:text-[80px] font-bold lg:absolute"
          data-aos="fade-up"
        >
          Skills
        </h1>
      </div>
      <div className="lg:min-w-[515px] px-6">
        <div className="flex justify-center gap-3 md:gap-7 mt-75 lg:mt-[150px] lg:mb-[50px]">
          <SkillsIcon title="Python" icon={<SiPython />} duration="1000" />
          <SkillsIcon title="C" icon={<SiCoursera />} duration="1250" />
          <SkillsIcon title="C++" icon={<SiCplusplus />} duration="1500" />
          <SkillsIcon
            title="TypeScript"
            icon={<SiTypescript />}
            duration="1750"
          />
          <SkillsIcon
            title="JavaScript"
            icon={<SiJavascript />}
            duration="2000"
          />
          <SkillsIcon title="HTML" icon={<SiHtml5 />} duration="2250" />
          <SkillsIcon title="CSS" icon={<SiCss3 />} duration="2500" />
          <SkillsIcon title="PHP" icon={<SiPhp />} duration="2750" />
        </div>
        <div className="flex justify-center gap-3 md:gap-7 ">
          <SkillsIcon title="MySQL" icon={<SiMysql />} duration="500" />
          <SkillsIcon title="ReactJs" icon={<SiReact />} duration="800" />
          <SkillsIcon title="NextJs" icon={<SiNextdotjs />} duration="1100" />
          <SkillsIcon
            title="Tailwind"
            icon={<SiTailwindcss />}
            duration="1300"
          />
          <SkillsIcon title="Git" icon={<SiGit />} duration="1500" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
