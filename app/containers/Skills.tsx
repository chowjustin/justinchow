import IconCloud from "../components/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "c",
  "cplusplus",
  "java",
  "react",
  "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "php",
  "mysql",
  "vercel",
  "adobephotoshop",
  "adobeillustrator",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="flex w-full justify-center space-y-20 max-md:space-y-4 mt-8"
    >
      <h1
        className="text-white dark:text-gray-400 text-[75px] max-md:mb-6 max-md:text-5xl lg:text-white lg:text-[80px] font-bold absolute"
        data-aos="fade-up"
      >
        Skills
      </h1>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
