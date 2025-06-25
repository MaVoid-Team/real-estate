"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Building2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-espresso-brown text-almond-cream/80 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-almond-cream mb-4">
              <Building2 className="h-8 w-8" />
              <span>MaVoid</span>
            </Link>
            <p className="text-sm">Your premier partner for luxury real estate and panoramic living experiences.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-almond-cream mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="hover:text-warm-taupe transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-warm-taupe transition-colors">
                  Past Projects
                </Link>
              </li>
              <li>
                <Link href="#preview" className="hover:text-warm-taupe transition-colors">
                  Unit Preview
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-warm-taupe transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-warm-taupe transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-warm-taupe transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-almond-cream mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="text-almond-cream/80 hover:text-warm-taupe transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-almond-cream/80 hover:text-warm-taupe transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="text-almond-cream/80 hover:text-warm-taupe transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-almond-cream/80 hover:text-warm-taupe transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-clay-beige/30 pt-8 text-center text-sm">
          <p>&copy; {currentYear} MaVoid Real Estate. All rights reserved.</p>
          <p className="mt-1">Designed with passion by Your Name/Company.</p>
        </div>
      </div>
    </motion.footer>
  )
}
