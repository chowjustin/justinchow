import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-10 lg:p-24 min-w-[515px] mb-[50px] lg:mb-[30px]"
    >
      <div className=" flex justify-center">
        <h1
          className="text-white text-5xl font-bold hidden lg:flex "
          style={{ zIndex: 1 }}
        >
          Contact me
        </h1>
        <h1
          className="text-white text-[75px] lg:text-[#FFFFFF1A] lg:text-[100px] font-bold lg:absolute  hover:text-[#FFBD39] duration-500"
          style={{ zIndex: 0 }}
        >
          Contact
        </h1>
      </div>
      <div className="flex text-center justify-center">
        <div className="flex text-[#FFBD39] text-xl font-semibold items-center mx-auto gap-1 mt-[50px] lg:mt-[125px] hover:text-2xl duration-500">
          <MdOutlineEmail />
          <h1>email</h1>
        </div>
      </div>
      <h1 className="text-white text-center">justin.chow05@gmail.com</h1>

      <div className="flex text-center justify-center">
        <div className="flex text-[#FFBD39] text-xl font-semibold items-center mx-auto gap-1 mt-6 hover:text-2xl duration-500">
          <MdLocalPhone />
          <h1>phone</h1>
        </div>
      </div>
      <h1 className="text-white text-center">+62 811 6535 858</h1>

      <Link href="https://linkedin.com/in/chowjustin" target="_blank">
        <div className="flex text-center justify-center">
          <div className="flex text-[#FFBD39] text-xl font-semibold items-center mx-auto gap-1.5 mt-6 hover:text-2xl duration-500">
            <BsLinkedin />
            <h1>linkedin</h1>
          </div>
        </div>
        <h1 className="text-white text-center">Justin Chow</h1>
      </Link>

      <Link href="https://instagram.com/justinnchoww" target="_blank">
        <div className="flex text-center justify-center">
          <div className="flex text-[#FFBD39] text-xl font-semibold items-center mx-auto gap-1.5 mt-6 hover:text-2xl duration-500">
            <BsInstagram />
            <h1>instagram</h1>
          </div>
        </div>
        <h1 className="text-white text-center">@justinnchoww</h1>
      </Link>

      <Link href="https://github.com/chowjustin" target="_blank">
        <div className="flex text-center justify-center">
          <div className="flex text-[#FFBD39] text-xl font-semibold items-center mx-auto gap-1.5 mt-6 hover:text-2xl duration-500">
            <BsGithub />
            <h1>github</h1>
          </div>
        </div>
        <h1 className="text-white text-center">chowjustin</h1>
      </Link>
    </div>
  );
};

export default Contact;
