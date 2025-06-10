import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand/Intro */}
        <div>
          <h3 className="text-2xl font-bold text-white">ClaroFlow</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Workflow clarity. Team velocity. Built for modern remote teams.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <Link href="#features" className="hover:text-white">Features</Link>
          <Link href="#pricing" className="hover:text-white">Pricing</Link>
          <Link href="#testimonials" className="hover:text-white">Testimonials</Link>
          <Link href="#faq" className="hover:text-white">FAQ</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <h4 className="font-semibold text-white mb-2">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} ClaroFlow. All rights reserved.
      </div>
    </footer>
  );
}
