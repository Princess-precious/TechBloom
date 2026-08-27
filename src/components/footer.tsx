/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 27/08/2026 - 14:24:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import H1 from "../ui/h1"
import P from "../ui/p"
import { Link } from "react-router-dom";

function Footer(){
  return(
    <section className="bg-[#010e24] py-4 px-12 flex flex-col gap-4 md:flex-row items-center justify-between h-auto text-center md:text-start border-t-1 border-white">
      <div>
        <H1 className="!text-2xl !text-[#64ffda]">TechBloom</H1>
        <P className="!mt-1">
          @2026 TechBloom. Empowering women in Technology.
        </P>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="/#contact" className="text-sm underline text-white hover:text-[#64ffda] active:text-[#64ffda]">Contact</a>
        <Link to="" className="text-sm underline text-white hover:text-[#64ffda] active:text-[#64ffda]">Privacy</Link>
        <Link to="" className="text-sm underline text-white hover:text-[#64ffda] active:text-[#64ffda]">Terms </Link>
      </div>
    </section>
  );
}

export default Footer;