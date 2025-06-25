"use client";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative flex items-center justify-center h-[calc(100vh-5rem)] min-h-[500px] bg-hero-bg bg-cover bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for text readability */}
      <div className="relative z-10 text-center p-4">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-almond-cream mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Discover Your Dream Property
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-warm-taupe max-w-3xl mx-auto mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          MaVoid offers exclusive real estate opportunities, combining luxury living with breathtaking panoramic views.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button asChild size="lg" className="bg-burnt-sienna text-almond-cream hover:bg-burnt-sienna/90 text-lg px-8 py-6">
            <Link href="#projects">Explore Properties</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
