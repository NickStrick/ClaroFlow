'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-background absolute inset-0 overflow-hidden">
        <object type="image/svg+xml" data="https://cdn.svgator.com/images/2022/06/animated-svg-background-css.svg"  width="100%">
        <Image src="https://cdn.svgator.com/images/2022/06/animated-svg-background-css.svg" alt="Example of an SVG animated background" className="lightense-target"/>
        </object>
      </div>
      
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight z-30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Supercharge Your Workflow<br />with <span className="text-blue-600">ClaroFlow</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-sm text-left hover:z-30 hover:relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Automate team collaboration, track tasks, and build momentum — all in one sleek interface.
      </motion.p>

      <motion.button
        className="z-30 mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md text-lg transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}
