/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 24/08/2026 - 23:14:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import HomeSection2 from "../images/homesection2img.jpg";
import H1 from "../ui/h1";
import P from "../ui/p";
import Section2img2 from "../images/secction2img2.jpg"

function Section2home() {
  return(
    <section className="bg-[#010e24] h-auto p-8 flex ">
      <div className="flex flex-col justify-center md:flex-row md:justify-between items-center gap-8">
        <div className="flex flex-1 flex-col order-2 md:order-1 md:flex-row justify-between gap-8">
          <div className="">
            <img src={HomeSection2} alt="Home Section 2" className="w-full h-full object-cover rounded-lg shadow-2xl"></img>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col h-auto bg-[#2c3951] p-4 rounded-lg items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64ffda" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12.5V16a6 6 0 0 0 12 0v-3.5"></path>
              </svg>
              <H1 className="text-lg">Deep Learning</H1>
              <P className="text-[10px]">
                Curated resources for continuous growth
              </P>
            </div>

            <div>
              <img src={Section2img2}className="rounded-lg"></img>
            </div>
          </div>
        </div>

        <div className="flex items-center text-center md:text-start md:items-start flex-1 flex-col order-1 md:order-2">
          <H1 className="text-2xl">
            About Us
          </H1>

          <h2 className="text-white text-sm mt-2 font-bold">
             A Space for Encouragement and Focus
          </h2>

          <P>
            TechBloom is a supportive community designed to help women discover and grow in technology. We make the journey into tech easier by providing learning resources, guidance, encouragement, and inspiring stories from women in the field.
          </P>

          <P>
            Whether you already know your path or are still figuring out where you fit, TechBloom helps you find your direction, build a learning path, and grow with confidence.
          </P>
        </div>
      </div>
    </section>

  );
}

export default Section2home;