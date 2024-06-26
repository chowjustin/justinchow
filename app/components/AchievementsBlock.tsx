interface AchievementsBlockProps {
  title: string;
  date: string;
  issuer: string;
  desc: string;
}

const AchievementsBlock = ({
  title,
  date,
  issuer,
  desc,
}: AchievementsBlockProps) => {
  return (
    <div data-aos="fade-up">
      <div className="flex items-center mt-12 max-md:mt-6 justify-between">
        <h2 className="text-[#FFBD39] dark:text-[#38bdf8] text-lg lg:text-2xl font-semibold flex items-center gap-2">
          {title}
        </h2>
        <h2 className="text-white lg:text-lg hidden lg:flex">{date}</h2>
      </div>
      <h3 className="text-white dark:text-black">{issuer}</h3>
      <h4 className="text-[#999999] text-sm lg:text-lg  text-justify dark:hover:text-black hover:text-white hover:text-opacity-90 duration-500">
        <br />
        {desc}
      </h4>
    </div>
  );
};

export default AchievementsBlock;
