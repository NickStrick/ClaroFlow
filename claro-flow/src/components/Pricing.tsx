'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Best for individuals or small teams just getting started.",
    features: ["Unlimited tasks", "Basic analytics", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "Perfect for growing teams and serious productivity.",
    features: ["Everything in Starter", "Advanced reports", "Team roles", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact us",
    description: "Custom solutions for organizations at scale.",
    features: ["Dedicated account rep", "SSO & security", "Custom workflows"],
    highlighted: false,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const variant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="pricing" className="relative py-24 px-6 md:px-12 bg-blue-50 text-gray-800">
      <div className="section-background absolute inset-0 overflow-hidden">
        <Image src="https://cdn.svgator.com/images/2022/06/svg-background-geometric-shapes.svg" className="w-[100%] kg-image lightense-target" alt="Background with geometric shapes changing focus" loading="lazy" />
      </div>
      <div className="z-30 relative max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Choose Your Plan</h2>
        <p className="text-gray-100 text-lg">Flexible pricing for every stage of your team&apos;s journey.</p>
      </div>

      <motion.div
        ref={ref}
        className="z-30 relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={variant}
            className={`rounded-xl p-6 border ${
              tier.highlighted
                ? 'bg-white border-blue-600 shadow-xl scale-[1.03]'
                : 'bg-white border-gray-200 shadow-sm'
            } transition`}
          >
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">{tier.price}</p>
            <p className="text-gray-600 mb-6">{tier.description}</p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              {tier.features.map((feature, idx) => (
                <li key={idx}>✔️ {feature}</li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded-lg font-semibold ${
              tier.highlighted
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            } transition`}>
              {tier.highlighted ? 'Start Free Trial' : 'Learn More'}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
