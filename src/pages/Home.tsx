/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 24/08/2026 - 15:37:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import Navbar from "../components/Navbar";
import Section1home from "../HomeSections/Section1home";
import Section2home from "../HomeSections/Section2home";

function Home(){
  return(
    <>
      <Navbar/> 
      <Section1home/>
      <Section2home/>
    </>
  );
}

export default Home;