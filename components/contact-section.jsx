"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPinIcon } from "lucide-react"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("Form submitted! (This is a demo)")
  }

  return (
    <motion.section id="contact" className="py-16 md:py-24 bg-almond-cream" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-espresso-brown mb-4">Get In Touch</h2>
          <p className="text-lg text-clay-beige max-w-2xl mx-auto">
            We're here to help you find your perfect property. Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div className="space-y-8" {...fadeInAnimation} transition={{ duration: 0.6, delay: 0.2 }}>
            <div>
              <h3 className="text-2xl font-semibold text-espresso-brown mb-4">Contact Information</h3>
              <div className="space-y-4 text-lg text-espresso-brown/90">
                <p className="flex items-center">
                  <MapPinIcon className="h-6 w-6 mr-3 text-burnt-sienna" />
                  123 Luxury Lane, Suite 100, Metropolis, CA 90210
                </p>
                <p className="flex items-center">
                  <Phone className="h-6 w-6 mr-3 text-burnt-sienna" />
                  (555) 123-4567
                </p>
                <p className="flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-burnt-sienna" />
                  info@mavoidrealestate.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-espresso-brown mb-4">Office Hours</h3>
              <p className="text-lg text-espresso-brown/90">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-lg text-espresso-brown/90">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-lg text-espresso-brown/90">Sunday: By Appointment Only</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-warm-taupe/50 p-8 rounded-lg shadow-xl border border-clay-beige/30"
            {...fadeInAnimation}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <Label htmlFor="name" className="text-espresso-brown font-medium">
                Full Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="John Doe"
                className="mt-1 bg-almond-cream/70 border-clay-beige focus:ring-burnt-sienna"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-espresso-brown font-medium">
                Email Address
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="mt-1 bg-almond-cream/70 border-clay-beige focus:ring-burnt-sienna"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-espresso-brown font-medium">
                Phone Number (Optional)
              </Label>
              <Input
                type="tel"
                id="phone"
                placeholder="(555) 555-5555"
                className="mt-1 bg-almond-cream/70 border-clay-beige focus:ring-burnt-sienna"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-espresso-brown font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                className="mt-1 bg-almond-cream/70 border-clay-beige focus:ring-burnt-sienna"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-burnt-sienna text-almond-cream hover:bg-burnt-sienna/90 text-lg"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}
