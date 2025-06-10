'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-6 md:px-12 py-4 flex justify-between items-center shadow-sm bg-white/70 backdrop-blur-sm fixed top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">ClaroFlow</div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
        <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
        <Link href="#testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
        <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
      </div>

      {/* Actions (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="#" className="text-gray-700 hover:text-blue-600">Sign In</Link>
        <Link
          href="#"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden text-gray-800">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-4 md:hidden">
          <Link href="#features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="#faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <hr />
          <Link href="#" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
