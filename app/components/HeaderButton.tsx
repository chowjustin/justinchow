type HeaderButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderButton({ section, onClick }: HeaderButtonProps) {
  return (
    <button
      className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500"
      onClick={onClick}
    >
      {section}
    </button>
  );
}
