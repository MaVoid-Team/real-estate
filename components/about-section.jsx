"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Eye } from 'lucide-react';

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutSection() {
  return (
    <motion.section 
      id="about" 
      className="py-16 md:py-24 bg-warm-taupe/30"
      {...fadeInAnimation}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-espresso-brown mb-4">About MaVoid</h2>
          <p className="text-lg text-clay-beige max-w-2xl mx-auto">
            Your trusted partner in finding exceptional properties with unparalleled views and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.2 }}>
            <Image 
              src="/gallery-one.jpg" 
              alt="MaVoid Team" 
              width={600} 
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto" 
            />
          </motion.div>
          <motion.div {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.4 }}>
            <p className="text-espresso-brown mb-6 text-lg leading-relaxed">
              At MaVoid, we believe that a home is more than just a place to live; it's an experience. We specialize in curating a portfolio of properties that offer not only luxury and comfort but also unique perspectives, including stunning 360-degree panoramic views.
            </p>
            <p className="text-espresso-brown mb-8 text-lg leading-relaxed">
              Our dedicated team is committed to understanding your vision and guiding you to the property that perfectly aligns with your aspirations. With years of experience and a passion for excellence, MaVoid is redefining real estate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-almond-cream rounded-lg shadow">
                <Users className="h-10 w-10 text-burnt-sienna mx-auto mb-2" />
                <h3 className="font-semibold text-espresso-brown">Expert Team</h3>
              </div>
              <div className="p-4 bg-almond-cream rounded-lg shadow">
                <Target className="h-10 w-10 text-burnt-sienna mx-auto mb-2" />
                <h3 className="font-semibold text-espresso-brown">Client Focused</h3>
              </div>
              <div className="p-4 bg-almond-cream rounded-lg shadow">
                <Eye className="h-10 w-10 text-burnt-sienna mx-auto mb-2" />
                <h3 className="font-semibold text-espresso-brown">Unique Views</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
