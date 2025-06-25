"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "The Skyline Residences",
    location: "Downtown Metropolis",
    imageUrl: "/gallery-three.jpg",
    description: "Luxury condos with breathtaking city views and state-of-the-art amenities."
  },
  {
    id: 2,
    title: "Oceanfront Villas",
    location: "Coastal Paradise",
    imageUrl: "/gallery-two.jpg",
    description: "Exclusive villas offering direct beach access and serene ocean panoramas."
  },
  {
    id: 3,
    title: "Mountain Retreat Lofts",
    location: "Serene Peaks",
    imageUrl: "/gallery-four.jpg",
    description: "Contemporary lofts nestled in the mountains, perfect for a tranquil escape."
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ProjectsSection() {
  return (
    <motion.section 
      id="projects" 
      className="py-16 md:py-24 bg-almond-cream"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-espresso-brown mb-4">Our Past Projects</h2>
          <p className="text-lg text-clay-beige max-w-2xl mx-auto">
            A glimpse into the exceptional properties we've had the pleasure to represent.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-warm-taupe/50 border-clay-beige/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image 
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title} 
                    width={400} 
                    height={300} 
                    className="object-cover w-full h-60" 
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-semibold text-espresso-brown mb-2">{project.title}</CardTitle>
                  <div className="flex items-center text-clay-beige mb-3">
                    <MapPin className="h-5 w-5 mr-2 text-burnt-sienna" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-espresso-brown/80 leading-relaxed">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full bg-almond-cream text-burnt-sienna border-burnt-sienna hover:bg-burnt-sienna hover:text-almond-cream transition-colors">
                    <Eye className="h-4 w-4 mr-2" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
