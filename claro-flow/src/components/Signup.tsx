'use client';

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1200); // Simulate async request
  };

  if (inView) controls.start('visible');

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="py-24 px-6 md:px-12 bg-white text-gray-800"
    >
      <div className="max-w-xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-gray-600 text-lg">Sign up and be the first to know when ClaroFlow launches!</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Optional message"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600"
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {status === 'submitting' ? 'Submitting...' : 'Join Now'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm text-center">🎉 You’ve been added to the list!</p>
        )}
      </form>
    </motion.section>
  );
}
