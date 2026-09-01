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
import Button from "../ui/Button";
import { SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


function Quiz(){
  return(
    <>
      <Navbar/>
      <section className="flex bg-[#0d1c32] mt-[80px] min-h-[calc(100vh-80px)] items-center justify-center overflow-x-hidden">
          <div className="flex flex-col justify-center bg-[#010e24] my-10 mx-10 p-10 md:mx-auto pt-4 md:p-10">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl  font-bold text-white md:text-4xl ">Discover Your Tech Path</h1>
              <p className="text-white text-xs mt-4 mb-4 md:text-sm">Answer a few quick questions about what you enjoy, and we'll help you find a niche in tech that feels like a natural fit.</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-lg  font-bold text-white md:text-2xl text-center">
                What kind of tasks do you enjoy the most?
              </h1>
              
              <div className="grid grid-col-1 md:grid-cols-2 mt-6 gap-4">
                   <div className="bg-[#2c3951] rounded-lg p-3 flex flex-col ">
                    <div className="flex items-center">
                      <input type="checkbox" id="designvisuals"></input>
                      <label htmlFor="designvisuals" className="text-white text-sm ml-1 ">Designing Visuals</label>
                    </div>
                    
                    <p className="text-white text-xs pt-1"> I love making things look beautiful and user-friendly.</p>
                  </div>
                  {/* CARD 2 */}
                  <div className="bg-[#2c3951] rounded-lg p-3 flex flex-col">
                    <div className="flex items-center">
                      <input type="checkbox" id="designvisuals"></input>
                      <label htmlFor="designvisuals" className="text-white text-sm ml-1 ">Designing Visuals</label>
                    </div>
                    
                    <p className="text-white text-xs pt-1"> I love making things look beautiful and user-friendly.</p>
                  </div>
                  {/* CARD 3 */}
                  <div className="bg-[#2c3951] rounded-lg p-3 flex flex-col">
                    <div className="flex items-center">
                      <input type="checkbox" id="designvisuals"></input>
                      <label htmlFor="designvisuals" className="text-white text-sm ml-1 ">Designing Visuals</label>
                    </div>
                    
                    <p className="text-white text-xs pt-1"> I love making things look beautiful and user-friendly.</p>
                  </div>
                  {/* CARD 4 */}
                  <div className="bg-[#2c3951] rounded-lg p-3 flex flex-col">
                    <div className="flex items-center">
                      <input type="checkbox" id="designvisuals"></input>
                      <label htmlFor="designvisuals" className="text-white text-sm ml-1 ">Designing Visuals</label>
                    </div>
                    
                    <p className="text-white text-xs pt-1"> I love making things look beautiful and user-friendly.</p>
                  </div>
              </div>
              <Button className="flex items-center p-1 text-sm mt-4 justify-end">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Button>

            </div>
          </div>
      </section>
      <Footer/>
    </>
  );
}
export default Quiz;