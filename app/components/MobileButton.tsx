interface MobileButtonProps {
  title: string;
  id: string;
}

const MobileButton = ({ id, title }: MobileButtonProps) => {
  return (
    <a
      href={id}
      className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
    >
      {title}
    </a>
  );
};

export default MobileButton;
