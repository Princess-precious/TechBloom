/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 23/08/2026 - 16:07:00
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import H1 from "../ui/h1";
import P from "../ui/p";
import section1hero from "../images/section1hero.jpg";

function Section1home() {
  return(
    <section className="bg-[#0d1c32] h-auto mt-[80px] p-8 flex flex-col justify-center md:flex-row md:justify-between items-center gap-10">
      <div className="flex-1 flex flex-col items-center text-center text-white mt-10 md:items-start md:text-left">
        <H1>
          Cultivating brilliance.
          <br/><span className="text-[#64ffda]">Empowering growth. </span>
        </H1>
        <P>
          A supportive community for women venturing into tech. We provide the resources, mentorship, and serene environment needed to focus, learn, and thrive.
        </P>
        <div className="flex flex-row gap-4">
          <a className= "bg-[#64ffda] text-black text-xs rounded-sm hover:opacity-80 active:opacity-80 p-2">Join Community</a>
          <a className= "text-[#64ffda] text-xs rounded-sm hover:opacity-80 active:opacity-80 p-2 border-[#64ffda] border"> Explore Paths </a>
        </div>
      </div>

      <div className="flex-1 mt-10 rounded-lg items-center">
        <img src={section1hero} alt="Section 1 Hero" className="w-full h-full object-cover rounded-lg shadow-2xl"></img>
      </div>
    </section>
  );
}

export default Section1home;