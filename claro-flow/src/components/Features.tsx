'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, ShieldCheck, Clock, BarChart2, ThumbsUp } from 'lucide-react';


const features = [
  {
    title: "Lightning Fast Workflows",
    description: "Automate repetitive tasks and keep your team in flow with real-time updates.",
    icon: Zap,
  },
  {
    title: "Team Collaboration",
    description: "Assign roles, leave comments, and track progress with shared visibility.",
    icon: Users,
  },
  {
    title: "Enterprise Security",
    description: "Built-in encryption and AWS-backed identity control you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Smart Scheduling",
    description: "Integrate calendars and deadlines seamlessly to eliminate delays.",
    icon: Clock,
  },
  {
    title: "Real-time Analytics",
    description: "Understand what is working with dynamic dashboards and KPIs.",
    icon: BarChart2,
  },
  {
    title: "One-click Approvals",
    description: "Get feedback fast and keep things moving with streamlined approvals.",
    icon: ThumbsUp,
  },
];

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

    const [summaryRef, summaryInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const summaryControls = useAnimation();
    
    useEffect(() => {
    if (summaryInView) summaryControls.start('visible');
    }, [summaryInView, summaryControls]);

    const summaryVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
    };

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600 text-lg">Everything you need to streamline and scale your team&apos;s productivity.</p>
      </div>

      <div ref={ref} className="space-y-12 max-w-3xl mx-auto">
        {features.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: i * 0.1 }}
          >
            <div className="bg-blue-100 p-3 rounded-xl">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Grid Summary */}
      {/* <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h4 className="text-2xl font-bold text-blue-600">+20%</h4>
          <p className="text-gray-600 mt-1">Faster Team Response Time</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-blue-600">99.9%</h4>
          <p className="text-gray-600 mt-1">Uptime on Secure AWS Cloud</p>
        </div>
        <div>
          <h4 className="text-2xl font-bold text-blue-600">#1</h4>
          <p className="text-gray-600 mt-1">Rated UX in Workflow Tools</p>
        </div>
      </div> */}
      <motion.div
        ref={summaryRef}
        className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
        {[
            { stat: '+20%', label: 'Faster Team Response Time' },
            { stat: '99.9%', label: 'Uptime on Secure AWS Cloud' },
            { stat: '#1', label: 'Rated UX in Workflow Tools' },
        ].map((item, i) => (
            <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={summaryControls}
            variants={summaryVariant}
            >
            <h4 className="text-2xl font-bold text-blue-600">{item.stat}</h4>
            <p className="text-gray-600 mt-1">{item.label}</p>
            </motion.div>
        ))}
        </motion.div>
    </section>
  );
}
