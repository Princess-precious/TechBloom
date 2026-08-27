/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 27/08/2026 - 15:13:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import H1 from "../ui/h1"
import P from "../ui/p"

function Quiz(){
  return(
    <>
      <Navbar/>
      <section className="bg-[#0d1c32] pt-[80px] min-h-screen">
          <div className="flex flex-col justify-center bg-[#010e24] my-[100px] mx-[150px] md:my-[200px] md:mx-[300px] p-10">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl  font-bold text-white md:text-4xl ">Discover Your Tech Path</h1>
              <p className="text-white text-xs mt-4 mb-4 md:text-sm">Answer a few quick questions about what you enjoy, and we'll help you find a niche in tech that feels like a natural fit.</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-xl  font-bold text-white md:text-2xl">
                What kind of tasks do you enjoy the most?
              </h1>
              <div></div>
            </div>
          </div>
      </section>
    </>
  );
}
export default Quiz;