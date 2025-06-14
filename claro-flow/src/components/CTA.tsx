'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function CTA() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      className="bg-gradient-to-b from-blue-600 to-indigo-900 text-white py-20 px-6 md:px-12 text-center rounded-t-3xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to streamline your workflow?
      </h2>
      <p className="text-lg text-white/90 mb-6">
        Join thousands of teams using ClaroFlow to move faster, collaborate smarter, and get more done.
      </p>
      <a
        href="#"
        className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
      >
        Get Started Now
      </a>
    </motion.section>
  );
}
