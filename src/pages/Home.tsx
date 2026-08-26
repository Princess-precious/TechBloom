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
import Section3home from "../HomeSections/Section3home";
import Section4home from "../HomeSections/Section4home";

function Home(){
  return(
    <>
      <Navbar/> 
      <Section1home/>
      <Section2home/>
      <Section3home/>
      <Section4home/>
    </>
  );
}

export default Home;