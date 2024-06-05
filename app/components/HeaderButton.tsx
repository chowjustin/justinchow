type HeaderButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderButton({ section, onClick }: HeaderButtonProps) {
  return (
    <button
      className="text-md border-b-2 dark:border-b-1 border-solid border-[black] border-opacity-0 font-medium text-white dark:text-black hover:border-[#FFBD39] dark:hover:border-sky-400  focus:text-[#FFBD39] dark:focus:text-sky-600 dark:focus:border-sky-400 focus:border-[#FFBD39] focus:duration-500 transition duration-500"
      onClick={onClick}
    >
      {section}
    </button>
  );
}
