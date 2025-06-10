import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Signup from '@/components/Signup';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Signup />
      <CTA />
      <Footer />
    </main>
  );
}
