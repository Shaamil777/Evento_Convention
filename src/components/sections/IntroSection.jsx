import React from 'react';

const IntroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&h=1080&fit=crop')",
        }}
      >
       <div className="absolute inset-0 bg-[#1c1c1c]" />
       <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-amber-400 intro-main-title text-4xl md:text-5xl lg:text-6xl ">
            We Are
            </h2>
            <h1 className="text-white text-4xl md:text-6xl intro-main-name tracking-wider">
              EVENTO
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Gallery */}
            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Left Image */}
                <div className="col-span-1 mb-10">
                  <img
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=700&fit=crop"
                    alt="Luxury event hall"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </div>
                {/* Right Image */}
                <div className="col-span-1 mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=700&fit=crop"
                    alt="Modern venue interior"
                    className="w-full h-full object-cover shadow-2xl"
                  />
                </div>
              </div>
            </div>

           {/* Text Content */}
            <div className="bg-opacity-95 p-8 md:p-12 ">
            <h2 className="text-3xl md:text-4xl font-bold intro-title text-white mb-6">
                The Perfect Venue for Every Grand Occasion
            </h2>
            <div className="w-16 h-1 bg-amber-400 mb-6"></div>

            <p className="text-white text-sm md:text-base intro-text leading-relaxed mb-4 max-w-2xl">
                Welcome to <span className="text-amber-400 font-semibold">Evento Convention Center</span> — 
                a premium destination designed to host your most memorable moments. Whether it's a wedding, 
                conference, cultural event, or corporate gathering, our auditorium provides the ideal space 
                that blends elegance with functionality.
            </p>

            <p className="text-white text-sm md:text-base intro-text leading-relaxed mb-6 max-w-2xl">
                With world-class acoustics, modern architecture, and luxurious seating, 
                we ensure an experience that exceeds expectations. Our team is dedicated 
                to creating a seamless and unforgettable event for you and your guests.
            </p>

            <button className="relative overflow-hidden px-6 py-2 border-2 border-amber-400 text-amber-400 font-semibold text-sm tracking-wider group transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                EXPLORE OUR HALLS →
                </span>
                <span className="absolute inset-0 bg-amber-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;