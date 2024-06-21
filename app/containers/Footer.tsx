import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="text-white dark:text-black flex justify-center items-center text-[11px] font-light dark:font-medium gap-1 mb-5">
        <Image
          src="/images/jcblack.png"
          height={30}
          width={30}
          alt="jc logo"
          className="hidden dark:flex"
        />
        <Image
          src="/images/jcwhite.png"
          height={30}
          width={30}
          alt="jc logo"
          className="dark:hidden flex"
        />
        <h1>&copy; 2024 Justin Chow.</h1>
      </div>
    </div>
  );
};

export default Footer;
