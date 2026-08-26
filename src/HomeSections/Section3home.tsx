/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 25/08/2026 - 12:50:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import H1 from "../ui/h1"
import P from "../ui/p"

function Section3home(){
  return(
    <section className="flex flex-col bg-[#0d1c32] p-8">
      <div className="flex flex-col items-center my-8">
        <H1 className="text-2xl">
          Our Mission
        </H1>

        <h2 className="text-white text-sm mt-2 font-bold">
          Breaking Barriers with Clarity
        </h2>

        <P className="max-w-lg text-center">
          Our mission is to dismantle barriers to entry in tech by providing clear, accessible, and high-quality educational pathways. We aim to foster a generation of confident female leaders in engineering, design, and data.
        </P>
      </div>

      <div className="flex flex-row p-8 gap-2 md:gap-6 items-center  justify-center">
        <div className="flex flex-col bg-[#2c3951] p-4 rounded-lg h-[200px] max-w-[200px]">
          <h2 className="text-white text-sm mt-2 font-bold">
            Accelerated Paths
          </h2>
          <P>
            structured curriculums designed to take you from foundational concepts to advanced applications at a steady, sustainable pace.
          </P>
        </div>

        <div className="flex flex-col bg-[#2c3951] p-4 rounded-lg h-[200px] max-w-[200px]">
          <h2 className="text-white text-sm mt-2 font-bold">
           Career Path Finder
          </h2>
          <P>
            Not sure where you fit in tech? Explore your interests and strengths through guided questions to discover a career path that matches you.
          </P>
        </div>

        <div className="flex flex-col bg-[#2c3951] p-4 rounded-lg h-[200px] max-w-[200px]"> 
          <h2 className="text-white text-sm mt-2 font-bold">
            Visible Leadership
          </h2>
          <P>
            Highlighting the achievements of women in tech to inspire confidence and provide clear role models for every stage of your career.
          </P>
        </div>
      </div>
    </section>
  );
}

export default Section3home;