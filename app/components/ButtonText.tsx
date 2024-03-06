import Link from "next/link";

interface ButtonTextProps {
  title: string;
  id: string;
}

const ButtonText = ({ title, id }: ButtonTextProps) => {
  return (
    <Link href={id}>
      <button className="text-md border-b-2 border-solid border-[black] border-opacity-0 font-medium text-white hover:border-[#FFBD39]  focus:text-[#FFBD39] focus:border-[#FFBD39] focus:duration-500 transition duration-500">
        {title}
      </button>
    </Link>
  );
};

export default ButtonText;
