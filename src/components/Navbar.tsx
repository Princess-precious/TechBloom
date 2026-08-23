/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 20/08/2026 - 16:42:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <nav className="bg-[#010e24] py-4 px-12 flex items-center justify-between h-[80px]">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="logo" className="w-[25px] h-[25px]"></img>
        <Link to="/" className="text-white text-2xl font-bold">TechBloom</Link>

      </div>
        
      <div className="flex items-center gap-6 text-sm text-white">
        <Link to="" className="hover:text-[#64ffda] active:text-[#64ffda]">Stories</Link>
        <Link to="" className="hover:text-[#64ffda] active:text-[#64ffda]">LearningHub</Link>
        <Link to="" className="hover:text-[#64ffda] active:text-[#64ffda]">PathFinder Quiz</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-[#64ffda] text-black text-sm p-1 rounded-sm hover:opacity-80 active:opacity-80">Sign In</button>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d6a6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
