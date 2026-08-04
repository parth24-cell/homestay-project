"use client"

import * as React from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"
import { AnimatePresence, motion } from "framer-motion"

// Client gallery images
export const galleryImages = [
  { id: 1, src: "/images/gallery/gallery-1.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 1", isLandscape: false },
  { id: 2, src: "/images/gallery/gallery-2.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 2", isLandscape: false },
  { id: 3, src: "/images/gallery/gallery-3.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 3", isLandscape: false },
  { id: 4, src: "/images/gallery/gallery-4.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 4", isLandscape: true },
  { id: 5, src: "/images/gallery/gallery-5.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 5", isLandscape: false },
  { id: 6, src: "/images/gallery/gallery-6.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 6", isLandscape: true },
  { id: 7, src: "/images/gallery/gallery-7.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 7", isLandscape: true },
  { id: 8, src: "/images/gallery/gallery-8.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 8", isLandscape: true },
  { id: 9, src: "/images/gallery/gallery-9.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 9", isLandscape: false },
  { id: 10, src: "/images/gallery/gallery-10.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 10", isLandscape: true },
  { id: 11, src: "/images/gallery/gallery-11.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 11", isLandscape: true },
  { id: 12, src: "/images/gallery/gallery-12.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 12", isLandscape: true },
  { id: 13, src: "/images/gallery/gallery-13.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 13", isLandscape: false },
  { id: 14, src: "/images/gallery/gallery-14.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 14", isLandscape: false },
  { id: 15, src: "/images/gallery/gallery-15.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 15", isLandscape: true },
  { id: 16, src: "/images/gallery/gallery-16.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 16", isLandscape: false },
  { id: 17, src: "/images/gallery/gallery-17.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 17", isLandscape: false },
  { id: 18, src: "/images/gallery/gallery-18.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 18", isLandscape: false },
  { id: 19, src: "/images/gallery/gallery-19.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 19", isLandscape: false },
  { id: 20, src: "/images/gallery/gallery-20.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 20", isLandscape: true },
  { id: 21, src: "/images/gallery/gallery-21.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 21", isLandscape: false },
  { id: 22, src: "/images/gallery/gallery-22.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 22", isLandscape: true },
  { id: 23, src: "/images/gallery/gallery-23.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 23", isLandscape: false },
  { id: 24, src: "/images/gallery/gallery-24.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 24", isLandscape: false },
  { id: 25, src: "/images/gallery/gallery-25.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 25", isLandscape: false }
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [failedImages, setFailedImages] = React.useState<Set<number>>(new Set())

  const handleImageError = (id: number) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }

  const getImgSrc = (image: typeof galleryImages[0]) => {
    return failedImages.has(image.id) ? "/opengraph-image.png" : image.src
  }

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1)
    }
  }

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev === null || prev === 0 ? galleryImages.length - 1 : prev - 1))
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev === null || prev === galleryImages.length - 1 ? 0 : prev + 1))
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])

  // Prevent scrolling when lightbox is open
  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [selectedIndex])

  return (
    <Section id="gallery" className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Gallery
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Take a glimpse of our comfortable and welcoming spaces.
            </Heading>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <SlideUp key={image.id} className={image.isLandscape ? "lg:col-span-2 md:col-span-2" : "col-span-1"}>
              <div 
                className="group relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => openLightbox(index)}
                tabIndex={0}
                role="button"
                aria-label={`View larger image of ${image.alt}`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              >
                <Image
                  src={getImgSrc(image)}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => handleImageError(image.id)}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <Maximize2 className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-md transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-md transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing lightbox
            >
              <Image
                src={getImgSrc(galleryImages[selectedIndex])}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-md transition-colors z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
