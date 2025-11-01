import React, { useState } from 'react';

function FeatureSections() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: 'State-of-the-Art Sound System',
      description:
        'Experience immersive acoustics powered by advanced surround sound technology that delivers crystal-clear audio from every corner of the auditorium.',
      tag: 'TECHNOLOGY',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    },
    {
      id: 2,
      title: 'Luxury Recliner Seating',
      description:
        'Our auditorium offers ultra-comfortable, ergonomic recliner seating designed for long events without fatigue — comfort meets elegance.',
      tag: 'COMFORT',
      image:
        'https://images.unsplash.com/photo-1598300053650-5ad58e53d0ec?w=800&q=80',
    },
    {
      id: 3,
      title: 'Dynamic Stage Lighting',
      description:
        'Equipped with programmable LED and spot lighting systems to enhance every performance, presentation, or event with vibrant visual precision.',
      tag: 'LIGHTING',
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80',
    },
    {
      id: 4,
      title: 'Premium Interior Design',
      description:
        'Elegant wood textures, acoustic panels, and modern aesthetics create a perfect ambiance that balances luxury and functionality.',
      tag: 'DESIGN',
      image:
        'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80',
    },
    {
      id: 5,
      title: 'Advanced Projection System',
      description:
        'Enjoy stunning visuals through high-definition projectors and crystal-clear LED displays that bring every detail to life.',
      tag: 'VISUALS',
      image:
        'https://images.unsplash.com/photo-1617802690992-15d3b77f3d07?w=800&q=80',
    },
    {
      id: 6,
      title: 'Spacious Seating Capacity',
      description:
        'Designed to host large-scale events with comfortable spacing, excellent visibility, and unobstructed sightlines from every seat.',
      tag: 'CAPACITY',
      image:
        'https://images.unsplash.com/photo-1503424886306-0e9a1e52c3bf?w=800&q=80',
    },
  ];

  return (
    <div
      className='min-h-screen bg-[#1c1c1c] relative'
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60'></div>

      {/* Content */}
      <div className='relative z-10'>
        {/* Header */}
        <div className='text-center pt-32 pb-16'>
          <h4 className='text-amber-400 intro-main-title text-4xl md:text-5xl lg:text-6xl'>
            Discover
          </h4>
          <h1 className='text-white text-4xl md:text-6xl intro-main-name tracking-wider'>
            OUR FEATURES
          </h1>
          <p className='text-gray-300 max-w-3xl intro-text mx-auto mt-6 text-sm'>
            Step into a world where technology, comfort, and design come
            together to redefine your auditorium experience. Every detail has
            been crafted to deliver performance, elegance, and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className='max-w-7xl mx-auto px-6 pb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature) => (
              <div
                key={feature.id}
                className='relative overflow-hidden rounded-lg cursor-pointer group h-[500px]'
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image (on hover) */}
                <div
                  className='absolute inset-0 transition-opacity duration-500'
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: hoveredCard === feature.id ? 1 : 0,
                  }}
                >
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30'></div>
                </div>

                {/* Default Background */}
                <div
                  className='absolute inset-0 bg-zinc-900 transition-opacity duration-500'
                  style={{
                    opacity: hoveredCard === feature.id ? 0 : 1,
                  }}
                ></div>

                {/* Content */}
                <div className='relative h-full p-8 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-white text-2xl intro-title font-semibold mb-4 leading-tight'>
                      {feature.title}
                    </h3>
                    <p className='text-gray-300 intro-text text-sm leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>

                  <div className='mt-6'>
                    <span className='text-white text-xs tracking-[0.3em] font-light border-b border-amber-500 pb-1'>
                      {feature.tag}
                    </span>
                  </div>
                </div>

                {/* Hover Border */}
                <div className='absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-500 rounded-lg'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSections;
