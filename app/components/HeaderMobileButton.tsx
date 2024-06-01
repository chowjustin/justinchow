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
        className="font-base text-black active:text-[#FFBD39] hover:font-semibold hover:text-[#FFBD39] focus:text-[#FFBD39] transition duration-500"
        onClick={onClick}
      >
        {section}
      </button>
    </li>
  );
}
