import React, { useState, useRef, useEffect } from 'react';

const CircularGallery = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);

  const galleryItems = [
    { id: 1, src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop', title: 'Infinity Pool View' },
    { id: 2, src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop', title: 'Luxury Suite' },
    { id: 3, src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop', title: 'Resort Paradise' },
    { id: 4, src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop', title: 'Modern Bedroom' },
    { id: 5, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop', title: 'Spa Treatment' },
    { id: 6, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop', title: 'Beachfront Sunset' },
    { id: 7, src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop', title: 'Grand Lobby' },
    { id: 8, src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop', title: 'Ocean View Room' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => setScrollPosition(container.scrollLeft);
    container.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setScrollPosition(container.scrollLeft);
      setIsReady(true);
    }, 50);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setDragDistance(Math.abs(x - startX));
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    setDragDistance(Math.abs(x - startX));
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Responsive helper
  const getIsMobile = () => {
    if (!containerRef.current) return false;
    return containerRef.current.offsetWidth < 640;
  };

  return (
    <div className="relative min-h-screen bg-[#1c1c1c] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <div className="relative text-center mb-16 z-10">
        <h4 className="text-amber-400 intro-main-title text-4xl md:text-5xl lg:text-6xl">
          Latest
        </h4>
        <h1 className="text-white text-4xl md:text-6xl intro-main-name tracking-wider">
          GALLERY
        </h1>
        <p className="text-gray-400 text-sm mt-1 tracking-wide">
          Drag to scroll through images
        </p>
      </div>

      {/* Gallery */}
      <div className="relative px-4 sm:px-8 z-10">
        <div
          ref={containerRef}
          className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none py-6 sm:py-8 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            paddingLeft: getIsMobile() ? 'calc(50vw - 140px)' : undefined,
            paddingRight: getIsMobile() ? 'calc(50vw - 140px)' : undefined,
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryItems.map((item, index) => {
            const container = containerRef.current;
            const containerWidth = container ? container.offsetWidth : 0;
            const isMobile = containerWidth < 640;
            const itemWidth = isMobile ? 280 : 400;
            const gap = isMobile ? 16 : 32;
            const itemOffset = index * (itemWidth + gap);
            const itemCenter = itemOffset + itemWidth / 2;
            const viewCenter = scrollPosition + containerWidth / 2;
            const distance = Math.abs(itemCenter - viewCenter);
            const maxDistance = containerWidth;
            const normalizedDistance = Math.min(distance / maxDistance, 1);

            const rotateY = (normalizedDistance * 15) * (itemCenter < viewCenter ? 1 : -1);
            const translateZ = -normalizedDistance * 100;
            const scale = 1 - normalizedDistance * 0.2;

            return (
              <div
                key={item.id}
                className="flex-shrink-0 group"
                style={{
                  width: isMobile ? '280px' : '400px',
                  transform: `perspective(1000px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  scrollSnapAlign: 'center'
                }}
                onClick={() => !isDragging && dragDistance < 10 && setSelectedImage(item)}
              >
                <div className="relative h-72 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-amber-500/20">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" draggable="false" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-lg sm:text-2xl font-semibold intro-text tracking-wide mb-2">{item.title}</h3>
                      <div className="w-12 sm:w-16 h-1 bg-amber-400"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <h3 className="text-white text-base sm:text-xl intro-text font-medium tracking-wide">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 sm:w-24 h-full bg-gradient-to-r from-[#1c1c1c] to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 sm:w-24 h-full bg-gradient-to-l from-[#1c1c1c] to-transparent pointer-events-none"></div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-amber-400 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto rounded-lg shadow-2xl" />
            <h3 className="text-white text-xl sm:text-3xl font-semibold text-center mt-4 sm:mt-6">{selectedImage.title}</h3>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CircularGallery;
