import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import Carousel from '../ui/Carousel';
// import Navbar from './Navbar'; // Uncomment when using in your project

const HeroSection = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop',
      title: 'GRAND AMBIENCE',
      description: 'Where architecture meets artistry — the perfect venue for your most cherished events.',
      buttonText: 'View Venue',
      buttonLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&h=1080&fit=crop',
      title: 'EVERY OCCASION',
      description: 'From intimate gatherings to grand celebrations — we bring your vision to life.',
      buttonText: 'Reserve Now',
      buttonLink: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop',
      title: 'UNFORGETTABLE MOMENTS',
      description: 'A destination built to host memories that last a lifetime.',
      buttonText: 'Discover More',
      buttonLink: '#'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Carousel slides={slides} autoPlayDuration={5000} />
    </div>
  );
};

export default HeroSection;