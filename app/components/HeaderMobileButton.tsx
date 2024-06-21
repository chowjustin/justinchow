type HeaderMobileButtonProps = {
  section: string;
  onClick: () => void;
};

export default function HeaderMobileButton({
  section,
  onClick,
}: HeaderMobileButtonProps) {
  return (
    <li>
      <button
        className="font-base text-black dark:text-white active:text-[#FFBD39] dark:active:text-[#38bdf8] hover:font-semibold dark:hover:text-[#38bdf8] hover:text-[#FFBD39] dark:focus:text-[#38bdf8] focus:text-[#FFBD39] transition duration-500"
        onClick={onClick}
      >
        {section}
      </button>
    </li>
  );
}
