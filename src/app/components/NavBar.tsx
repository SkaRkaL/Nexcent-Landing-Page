// NavBar.tsx
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                width={150}
                height={50}
                className="h-6 w-auto cursor-pointer md:h-8"
                src="/Neeee.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-base">Home</Link>
            <Link href="/" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-base">Features</Link>
            <Link href="/" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-base">Community</Link>
            <Link href="/" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-base">Blog</Link>
            <Link href="/" className="text-[#4D4D4D] hover:text-[#4CAF4F] font-inter text-base">Pricing</Link>
            <Link href="/" className="bg-[#4CAF4F] hover:bg-[#388E3C] rounded px-6 py-2.5 text-sm font-medium text-white flex items-center gap-2">
              <span className="font-inter">Register Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
        <div className="md:hidden z-2 absolute top-[3.75rem] right-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Community</Link>
            <Link href="/" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link href="/" className="block px-3 py-2 text-base font-medium text-[#4D4D4D] hover:text-[#4CAF4F]" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <div className="px-3 py-2">
              <Link href="/" className="w-full bg-[#4CAF4F] hover:bg-[#388E3C] rounded px-6 py-2.5 text-sm font-medium text-white flex items-center justify-center gap-2">
                <span className="font-inter">Register Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
