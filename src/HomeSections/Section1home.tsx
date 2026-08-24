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

function Section1home() {
  return(
    <section className="bg-[#0d1c32] h-auto p-8 flex flex-row">
      <div className="flex flex-col justify-between text-white">
        <H1>
          Cultivating brilliance.
          <br/><span className="text-[#64ffda]">Empowering growth. </span>
        </H1>
        <p></p>
        <div>
          <a></a>
          <a></a>
        </div>
      </div>

      <div>
        <img></img>
      </div>
    </section>
  );
}

export default Section1home;