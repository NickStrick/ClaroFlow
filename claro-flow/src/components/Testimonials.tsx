'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const testimonials = [
  {
    name: "Avery Tran",
    role: "Product Manager, Lumos",
    quote: "ClaroFlow has completely streamlined how our team works across time zones. It feels like magic.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Jordan White",
    role: "Founder, IndieOps",
    quote: "We scaled faster than expected — all because we could finally focus instead of managing chaos.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Samira Khan",
    role: "CTO, OrbitTech",
    quote: "The UI is clean, the experience is fast, and onboarding new teammates is frictionless.",
    avatar: "https://i.pravatar.cc/150?img=28",
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
        <p className="text-gray-600 text-lg">Real feedback from real teams using ClaroFlow every day.</p>
      </div>

      <motion.div
        ref={ref}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={cardVariant}
            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{t.quote}”</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
