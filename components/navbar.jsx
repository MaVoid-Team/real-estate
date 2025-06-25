"use client";
import Link from 'next/link';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#projects', label: 'Past Projects' },
  { href: '#preview', label: 'Unit Preview' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-clay-beige/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-espresso-brown hover:text-burnt-sienna transition-colors">
            <Building2 className="h-8 w-8" />
            <span>MaVoid</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-espresso-brown hover:text-burnt-sienna transition-colors font-medium">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-espresso-brown hover:bg-warm-taupe/50">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-clay-beige/95 pb-4"
          >
            <nav className="flex flex-col items-center space-y-4 pt-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} 
                      className="text-espresso-brown hover:text-burnt-sienna transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
