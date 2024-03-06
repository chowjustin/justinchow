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
    <div
      id="skills"
      className="p-10 lg:p-24 min-w-[515px] mb-[50px] lg:mb-[30px]"
    >
      <div className=" flex justify-center">
        <h1 className="text-white text-[75px] lg:text-white lg:text-[80px] font-bold lg:absolute">
          Skills
        </h1>
      </div>
      <div className="lg:min-w-[515px]">
        <div className="flex justify-center gap-4 md:gap-7 mt-75 lg:mt-[150px] lg:mb-[50px]">
          <SkillsIcon title="Python" icon={<SiPython />} />
          <SkillsIcon title="C" icon={<SiCoursera />} />
          <SkillsIcon title="C++" icon={<SiCplusplus />} />
          <SkillsIcon title="TypeScript" icon={<SiTypescript />} />
          <SkillsIcon title="JavaScript" icon={<SiJavascript />} />
          <SkillsIcon title="HTML" icon={<SiHtml5 />} />
          <SkillsIcon title="CSS" icon={<SiCss3 />} />
          <SkillsIcon title="PHP" icon={<SiPhp />} />
        </div>
        <div className="flex justify-center gap-7 ">
          <SkillsIcon title="MySQL" icon={<SiMysql />} />
          <SkillsIcon title="ReactJs" icon={<SiReact />} />
          <SkillsIcon title="NextJs" icon={<SiNextdotjs />} />
          <SkillsIcon title="Tailwind" icon={<SiTailwindcss />} />
          <SkillsIcon title="Git" icon={<SiGit />} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
