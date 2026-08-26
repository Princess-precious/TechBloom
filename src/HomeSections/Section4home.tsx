/**
    * @description      : 
    * @author           : HP
    * @group            : 
    * @created          : 26/08/2026 - 13:50:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/08/2026
    * - Author          : HP
    * - Modification    : 
**/
import P from "../ui/p"
import H1 from "../ui/h1"

function Section4home(){
  return(
    <section className="flex bg-[#010e24] h-auto p-8 items-center justify-center">
      <div className="flex flex-row bg-[#2c3951] rounded-lg p-8">
        <div className="flex flex-col">
          <H1>
            Let's Connect
          </H1>
          <P>
            Whether you have a question about our programs, want to become a mentor, or simply want to say hello, we'd love to hear from you.
          </P>
          <div className="flex flex-row gap-2">
            {/* Mail SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {/* Message SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            c vx</svg>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}

export default Section4home;