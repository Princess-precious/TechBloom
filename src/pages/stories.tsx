import Navbar from "../components/Navbar";
import {women} from "../Data/storiesdata"

export default function Stories ()  {
  return (
    <div className="min-h-screen bg-[#061A3A] text-white">

      <Navbar/>
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-[80px]">
          Great Women in Tech
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Discover the inspiring stories of women who shaped the digital world.
          From groundbreaking discoveries to technological innovations, their
          legacy continues to inspire the future of technology.
        </p>
      </section>

      
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto border border-gray-700 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">

            <div className="h-80 md:h-[450px]">
              <img
                src="/images/ade-lovelace.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center">

              <div className="flex gap-2 flex-wrap mb-4">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                  Pioneer
                </span>

                <span className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                  Mathematics
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Ada Lovelace
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Ada Lovelace is widely recognized as the first computer
                programmer. Her work on Charles Babbage's Analytical Engine
                demonstrated how machines could be used for more than simple
                calculations.
              </p>

              <button className="border border-white px-5 py-2 rounded-md w-fit hover:bg-white hover:text-[#061A3A] transition">
                Read Full Story →
              </button>

            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-12 pb-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-3">
            Inspiring Journeys
          </h2>

          <p className="text-gray-400 mb-8">
            Meet more women whose ideas and determination changed technology.
          </p>

          
          <div className="grid md:grid-cols-3 gap-6">

            {women.map((woman) => (
              <div
                key={woman.name}
                className="border border-gray-700 rounded-xl overflow-hidden bg-[#0a2348] hover:border-gray-400 transition"
              >

                
                <div className="h-56">
                  <img
                    src={woman.image}
                    alt={woman.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <div className="p-5">

                  <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-xs mb-3">
                    {woman.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3">
                    {woman.name}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {woman.description}
                  </p>

                  <button className="text-white text-sm font-medium hover:underline">
                    Read Story →
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

