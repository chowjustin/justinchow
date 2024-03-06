interface SkillsIconProps {
  icon: React.ReactNode;
  title: string;
}

const SkillsIcon = ({ icon, title }: SkillsIconProps) => {
  return (
    <div className=" justify-center lg:text-base text-center text-white font-light hover:text-[#FFBD39] duration-500">
      <div className="text-[#FFBD39] text-4xl md:text-6xl lg:text-[75px] font-semibold mb-[10px] hover:text-[90px] duration-500">
        {icon}
      </div>
      <div className="hidden lg:flex justify-center">{title}</div>
    </div>
  );
};

export default SkillsIcon;
