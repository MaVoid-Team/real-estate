"use client"

import { useState, useEffect, Suspense, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChevronLeft, ChevronRight, Grid, X, Play, Pause, ZoomIn, ZoomOut, Home, Loader2 } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  { src: "/gallery-one.jpg", thumb: "/gallery-one.jpg", caption: "Modern Luxury Kitchen" },
  { src: "/gallery-two.jpg", thumb: "/gallery-two.jpg", caption: "Spacious Living Room" },
  { src: "/gallery-three.jpg", thumb: "/gallery-three.jpg", caption: "Master Bedroom Oasis" },
  { src: "/gallery-four.jpg", thumb: "/gallery-four.jpg", caption: "Rooftop Terrace Views" },
]

function GalleryPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isClient, setIsClient] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [viewerKey, setViewerKey] = useState(0)
  const [isAutorotate, setIsAutorotate] = useState(true)
  const [currentZoom, setCurrentZoom] = useState(50)
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const [viewerInstance, setViewerInstance] = useState(null)

  const photoSphereRef = useRef(null)
  const isTransitioning = useRef(false)

  useEffect(() => {
    setIsClient(true)
    const imageParam = searchParams.get("image")
    const initialIdx = imageParam ? Number.parseInt(imageParam) : 0
    if (!isNaN(initialIdx) && initialIdx >= 0 && initialIdx < galleryImages.length) {
      setCurrentIndex(initialIdx)
    } else {
      setCurrentIndex(0)
      if (imageParam) router.replace("/gallery?image=0", { scroll: false })
    }
  }, [])

  useEffect(() => {
    if (!isClient) return

    const imageParam = searchParams.get("image")
    const newIndex = imageParam ? Number.parseInt(imageParam) : 0

    if (!isNaN(newIndex) && newIndex >= 0 && newIndex < galleryImages.length) {
      if (newIndex !== currentIndex && !isTransitioning.current) {
        handleImageTransition(newIndex)
      }
    } else if (imageParam) {
      router.replace("/gallery?image=0", { scroll: false })
      if (currentIndex !== 0 && !isTransitioning.current) {
        handleImageTransition(0)
      }
    }
  }, [searchParams, isClient, router, currentIndex])

  const handleImageTransition = async (newIndex) => {
    if (isTransitioning.current) return

    isTransitioning.current = true
    setIsLoadingImage(true)

    // If we have a viewer instance, properly destroy it first
    if (viewerInstance) {
      try {
        viewerInstance.destroy()
      } catch (error) {
        console.warn("Error destroying viewer:", error)
      }
      setViewerInstance(null)
    }

    // Reset viewer state
    setCurrentZoom(50)

    // Small delay to ensure cleanup is complete
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Update state
    setCurrentIndex(newIndex)
    setViewerKey((prev) => prev + 1)

    isTransitioning.current = false
  }

  const updateUrl = (index) => {
    router.push(`/gallery?image=${index}`, { scroll: false })
  }

  const handleNext = () => {
    if (isTransitioning.current || isLoadingImage) return
    const nextIndex = (currentIndex + 1) % galleryImages.length
    updateUrl(nextIndex)
  }

  const handlePrev = () => {
    if (isTransitioning.current || isLoadingImage) return
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    updateUrl(prevIndex)
  }

  const handleThumbnailClick = (index) => {
    if (isTransitioning.current || isLoadingImage) return
    updateUrl(index)
    setIsOverlayVisible(false)
  }

  const toggleAutorotate = () => {
    if (isLoadingImage || !viewerInstance) return
    setIsAutorotate(!isAutorotate)
  }

  const handleZoom = (factor) => {
    if (isLoadingImage || !viewerInstance || isTransitioning.current) return

    try {
      const newZoom = Math.max(0, Math.min(100, viewerInstance.getZoomLevel() + factor * 10))
      viewerInstance.zoom(newZoom)
    } catch (error) {
      console.warn("Error during zoom:", error)
    }
  }

  const onViewerReady = (instance) => {
    setViewerInstance(instance)
    setIsLoadingImage(false)

    // Set initial autorotate state
    if (isAutorotate) {
      try {
        instance.startAutorotate()
      } catch (error) {
        console.warn("Error starting autorotate:", error)
      }
    }
  }

  const onViewerError = (error) => {
    console.error("Viewer error:", error)
    setIsLoadingImage(false)
    isTransitioning.current = false
  }

  const handleZoomChange = (zoomLevel) => {
    setCurrentZoom(zoomLevel)
  }

  // Handle autorotate changes
  useEffect(() => {
    if (!viewerInstance || isLoadingImage) return

    try {
      if (isAutorotate) {
        viewerInstance.startAutorotate()
      } else {
        viewerInstance.stopAutorotate()
      }
    } catch (error) {
      console.warn("Error toggling autorotate:", error)
    }
  }, [isAutorotate, viewerInstance, isLoadingImage])

  if (!isClient) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-espresso-brown text-almond-cream">
        <Loader2 className="h-12 w-12 animate-spin text-almond-cream" />
        <p className="ml-4 text-xl">Loading 360° Gallery...</p>
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="h-screen w-screen relative flex flex-col bg-espresso-brown">
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
          <Link href="/" passHref>
            <Button variant="outline" className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown">
              <Home className="h-5 w-5 mr-2" /> Back to MaVoid
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => setIsOverlayVisible(!isOverlayVisible)}
                  className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown"
                  disabled={isLoadingImage}
                >
                  <Grid className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-espresso-brown text-almond-cream border-clay-beige">
                <p>Toggle Thumbnail Gallery</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Viewer Area */}
        <div className="flex-grow relative">
          {isLoadingImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-espresso-brown/90 z-10">
              <div className="text-center">
                <Loader2 className="h-16 w-16 animate-spin text-almond-cream mx-auto mb-4" />
              </div>
            </div>
          )}
          <ReactPhotoSphereViewer
            key={viewerKey}
            ref={photoSphereRef}
            src={galleryImages[currentIndex].src}
            height={"100%"}
            width={"100%"}
            container=""
            littlePlanet={false}
            autorotateDelay={null} // We'll handle autorotate manually
            autorotateSpeed="0.3rpm"
            navbar={false}
            defaultZoomLvl={50} // Always start with default zoom
            caption={galleryImages[currentIndex].caption}
            onReady={onViewerReady}
            onError={onViewerError}
            onZoomChange={handleZoomChange}
            // Additional props to ensure clean state
            defaultLat={0}
            defaultLng={0}
            minFov={30}
            maxFov={90}
          />
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 flex justify-between items-center bg-gradient-to-t from-black/50 to-transparent">
          <Button
            variant="outline"
            onClick={handlePrev}
            className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown"
            disabled={isLoadingImage || isTransitioning.current}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="flex space-x-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => handleZoom(-1)}
                  className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown"
                  disabled={isLoadingImage || isTransitioning.current}
                >
                  <ZoomOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-espresso-brown text-almond-cream border-clay-beige">
                <p>Zoom Out</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipContent className="bg-espresso-brown text-almond-cream border-clay-beige">
                <p>{isAutorotate ? "Pause Autorotate" : "Start Autorotate"}</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  onClick={() => handleZoom(1)}
                  className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown"
                  disabled={isLoadingImage || isTransitioning.current}
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-espresso-brown text-almond-cream border-clay-beige">
                <p>Zoom In</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <Button
            variant="outline"
            onClick={handleNext}
            className="bg-almond-cream/80 hover:bg-almond-cream text-espresso-brown"
            disabled={isLoadingImage || isTransitioning.current}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Thumbnail Overlay */}
        {isOverlayVisible && (
          <div className="absolute inset-0 z-30 bg-black/80 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOverlayVisible(false)}
              className="absolute top-5 right-5 text-almond-cream hover:bg-white/20"
            >
              <X className="h-8 w-8" />
            </Button>
            <h3 className="text-3xl font-bold text-almond-cream mb-8">Select a View</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 ease-in-out group
                  ${index === currentIndex ? "border-burnt-sienna scale-105 shadow-xl" : "border-transparent hover:border-warm-taupe hover:scale-105"}`}
                  disabled={isLoadingImage || isTransitioning.current}
                >
                  <Image
                    src={image.thumb}
                    alt={image.caption}
                    width={200}
                    height={120}
                    className="object-cover aspect-[16/10] group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 text-center">
                    <span className="text-almond-cream text-xs truncate">{image.caption}</span>
                  </div>
                  {index === currentIndex && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-burnt-sienna text-white text-xs px-2 py-1 rounded">Current</div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>
  )
}

export default function GalleryPage() {
  // The Suspense fallback should match the initial loading state of GalleryPageContent if !isClient
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-espresso-brown text-almond-cream">
          <Loader2 className="h-12 w-12 animate-spin text-almond-cream" />
          <p className="ml-4 text-xl">Loading Gallery...</p>
        </div>
      }
    >
      <GalleryPageContent />
    </Suspense>
  )
}
