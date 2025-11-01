import React from "react";

const VideoSection = () => {
  return (
    <section
      className="relative bg-[#1c1c1c] py-12 sm:py-20 overflow-hidden"
      style={{
        backgroundColor: "#1c1c1c",
        position: "relative",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Header */}
      <div className="relative text-center mb-10 z-10">
        <h4 className="text-amber-400 text-4xl md:text-5xl intro-main-title">
          Experience
        </h4>
        <h1 className="text-white text-4xl md:text-6xl tracking-wider intro-main-name">
          SHOWCASE VIDEO
        </h1>
        <p className="text-gray-400 text-sm mt-2 tracking-wide">
          A glimpse into the elegance of Evento Convention Center
        </p>
      </div>

      {/* Video Container */}
      <div
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "1000px",
          margin: "0 auto",
          backgroundColor: "#1c1c1c",
          borderRadius: "12px",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* Background border overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        ></div>

        {/* Video Wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", // 16:9 ratio
            overflow: "hidden",
            borderRadius: "12px",
            zIndex: 1,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/0Nu8R2CwvrA?autoplay=1&mute=1&loop=1&playlist=0Nu8R2CwvrA&controls=0&modestbranding=1&showinfo=0&rel=0"
            title="Evento Convention Center"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
