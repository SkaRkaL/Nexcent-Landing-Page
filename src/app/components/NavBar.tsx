// NavBar.tsx
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goBackHome = () => {
    router.push('/');
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex-shrink-0">
            <img
              className="h-7 w-auto cursor-pointer"
              src="/Neeee.svg"
              alt="Logo"
              onClick={goBackHome}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 gap-3">
            <a href="#" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-lg">Home</a>
            <a href="#" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-lg">Features</a>
            <a href="#" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-lg">Community</a>
            <a href="#" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-lg">Blog</a>
            <a href="#" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-lg">Pricing</a>
            <button className="bg-[#4CAF4F] cursor-pointer hover:bg-[#388E3C] rounded px-7 py-3 text-lg  text-white flex items-center gap-2">
              <span className="font-inter">Register Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#4CAF4F] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden z-2 absolute top-[5rem] right-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Community</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Pricing</a>
            <div className="px-3 py-2">
              <button className="w-full bg-[#4CAF4F] hover:bg-[#388E3C] rounded px-6 py-2.5 text-sm font-medium text-white flex items-center justify-center gap-2">
                <span className="font-inter">Register Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
