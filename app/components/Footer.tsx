import Image from "next/image";

const Footer = () => {
  return (
    <div className="min-w-[515px]">
      <div className="text-white flex justify-center items-center text-[11px] font-light gap-1 mb-5">
        <Image src="/images/jclogo.jpg" height={30} width={30} alt="jc logo" />
        <h1>&copy; 2024 Justin Chow.</h1>
      </div>
    </div>
  );
};

export default Footer;
