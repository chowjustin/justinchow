import { FiChevronsDown } from "react-icons/fi";

const HomeLayout = ({}) => {
  return (
    <div className="h-screen items-center flex mt-[120px] min-w-[515px] min-h-[900px] md:min-h-0">
      <div className="m-auto p-24 text-center justify-center">
        <h1 className="text-white text-6xl md:text-[60px] font-bold  hover:tracking-[0.1em] duration-500">
          Hello, welcome <br className="md:hidden" />
          to my
        </h1>
        <h1 className="text-[#FFBD39] text-6xl md:text-[60px] font-bold  hover:tracking-[0.1em] duration-500">
          personal page!
        </h1>
        <h1 className="text-white text-lg md:text-xl">
          <br />
          <br />
          <i>Scroll down to find more!</i>
        </h1>
        <div className="text-white flex mx-auto text-2xl md:text-3xl justify-center mt-5 animate-bounce">
          <FiChevronsDown />
        </div>
        <div id="about" className="mt-[150px]"></div>
      </div>
    </div>
  );
};

export default HomeLayout;
