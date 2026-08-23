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

function Navbar() {
  return(
    <nav className="bg-[#010e24] p-4 flex items-center h-[80px]">
  <div>
    <img src={Logo} alt="logo" className="w-[25px] h-[25px]"></img>
  </div>
  <div></div>
  <div></div>
</nav>
  );
}

export default Navbar;
