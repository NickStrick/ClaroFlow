import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-blue-50 to-white">
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Supercharge Your Workflow<br />with <span className="text-blue-600">ClaroFlow</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Automate team collaboration, track tasks, and build momentum — all in one sleek interface.
      </motion.p>

      <motion.button
        className="mt-8 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md text-lg transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}
