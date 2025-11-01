import React from 'react'
import { Facebook, Twitter, Instagram, Pause, Play } from 'lucide-react';

function SocialLinks() {
  return (
    <>
    {/* Left Social Bar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 px-4 py-8">
          <a href="#" className="text-white hover:text-gray-300 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            <Instagram size={18} />
          </a>
          <div className="w-px bg-white/30 my-4"></div>
          <div className="transform -rotate-90 origin-center whitespace-nowrap">
            <a href="#" className="text-white text-sm navbar-links tracking-wider hover:text-gray-300 transition">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialLinks