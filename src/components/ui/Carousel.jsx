import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';

const Carousel = ({ slides, autoPlayDuration = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (autoPlayDuration / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, autoPlayDuration]);

  useEffect(() => {
    if (progress >= 100) {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
        setTimeout(() => {
          setTextVisible(true);
        }, 400);
      }, 600);
    }
  }, [progress, slides.length]);

  const goToSlide = (index) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setProgress(0);
      setTimeout(() => {
        setTextVisible(true);
      }, 400);
    }, 600);
  };

  return (
    <>
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
              index === currentSlide ? 'scale-100' : 'scale-110'
            }`}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Main Content - Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div
          className={`text-center transition-all duration-700 px-4 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider sm:tracking-widest mb-3 sm:mb-4 px-2">
            {slides[currentSlide].title}
          </h2>
          
          {/* Description */}
          <p className={`text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-light tracking-wide max-w-3xl mx-auto mb-6 sm:mb-8 px-4 transition-all duration-700 delay-100 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {slides[currentSlide].description}
          </p>

          <button className="relative border-2 border-white text-white px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm tracking-wider rounded-md overflow-hidden group transition-all duration-300">
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
              {slides[currentSlide].buttonText}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pb-4 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Progress Bar */}
          <div className="w-full h-0.5 bg-white/30 mb-4 sm:mb-6">
            <div
              className="h-full bg-white transition-all duration-50 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between text-white">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="hover:text-gray-300 transition opacity-50 hover:opacity-100"
              aria-label={isPaused ? 'Play' : 'Pause'}
            >
              {isPaused ? <Play size={18} className="sm:w-5 sm:h-5" /> : <Pause size={18} className="sm:w-5 sm:h-5" />}
            </button>

            {/* Slide Counter */}
            <div className="text-xs sm:text-sm">
              <span className="font-medium">{currentSlide + 1}</span>
              <span className="mx-2">/</span>
              <span>{slides.length}</span>
            </div>

            {/* Slide Dots */}
            <div className="flex space-x-2 sm:space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-6 sm:w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel