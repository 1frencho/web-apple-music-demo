import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";

function MyFooter() {
  return (
    <footer className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-center gap-2 bg-lightBg p-4 text-center text-base font-medium">
      Developed by{" "}
      <a href="https://github.com/1frencho/" className="text-main">
        @1frencho
      </a>{" "}
      <section className="hidden md:block">
        in <FaReact className="inline text-blue-400" size={25} /> React with{" "}
        <BiLogoTypescript className="inline text-blue-500" size={25} />{" "}
        Typescript -{" "}
        <RiTailwindCssFill className="inline text-blue-400" size={25} />
        TailwindCSS and{" "}
        <SiChakraui className="inline text-cyan-400" size={20} /> Chakra UI
      </section>
    </footer>
  );
}

export default MyFooter;
