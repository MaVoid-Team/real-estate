"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"

const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function UnitPreviewSection() {
  const previewImage = "/gallery-one.jpg" // Use the first image for the inline preview

  return (
    <motion.section id="preview" className="py-16 md:py-24 bg-warm-taupe/30" {...fadeInAnimation}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-espresso-brown mb-4">Experience a Virtual Tour</h2>
          <p className="text-lg text-clay-beige max-w-2xl mx-auto">
            Step inside one of our premier units with an immersive 360° panoramic view.
          </p>
        </div>

        <motion.div
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-almond-cream group"
          {...fadeInAnimation}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {typeof window !== "undefined" && ( // Ensure ReactPhotoSphereViewer only renders on client
            <ReactPhotoSphereViewer
              src={previewImage}
              height={"100%"}
              width={"100%"}
              littlePlanet={false}
              container="" // Important: pass empty string for direct parent rendering
              navbar={[
                "zoom",
                "caption",
                {
                  id: "custom-link",
                  title: "View Full Gallery",
                  content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 50%; height: 50%; margin: auto;"><path d="M10 6V8H5V19H16V14H18V19C18 20.1 17.1 21 16 21H5C3.9 21 3 20.1 3 19V8C3 6.9 3.9 6 5 6H10ZM19 2H12V4H17V9H19V2ZM14 4.83L17.17 8H14V4.83Z"></path></svg>`,
                  className: "custom-link-button",
                  onClick: () => {
                    // This onClick in viewer's navbar might not work as expected for Next.js Link.
                    // The main button below is more reliable for navigation.
                    // For direct navigation, window.location.href = '/gallery' could be used, but Link is preferred.
                    console.log("Custom button in viewer clicked. Use main button for navigation.")
                  },
                },
              ]}
              defaultZoomLvl={50}
              autorotateDelay={5000}
              autorotateSpeed="0.5rpm"
            />
          )}
          <div className="absolute bottom-4 right-4 z-10">
            <Button asChild size="lg" className="bg-burnt-sienna text-almond-cream hover:bg-burnt-sienna/90">
              <Link href="/gallery">
                <ExternalLink className="h-5 w-5 mr-2" />
                Launch Full Tour
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-espresso-brown/80">
            Explore the unit in 360°. Click "Launch Full Tour" for an immersive gallery experience.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
