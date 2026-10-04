"use client"

import * as React from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"
import { AnimatePresence, motion } from "framer-motion"

export interface GalleryItem {
  id: number
  type: "image" | "video"
  src: string
  alt: string
  isLandscape: boolean
  poster?: string
}

// Client gallery items (photos and videos)
export const galleryItems: GalleryItem[] = [
  { id: 1, type: "image", src: "/images/gallery/gallery-1.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 1", isLandscape: false },
  { id: 2, type: "image", src: "/images/gallery/gallery-2.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 2", isLandscape: false },
  { id: 3, type: "image", src: "/images/gallery/gallery-3.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 3", isLandscape: false },
  { id: 4, type: "image", src: "/images/gallery/gallery-4.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 4", isLandscape: true },
  { id: 5, type: "image", src: "/images/gallery/gallery-5.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 5", isLandscape: false },
  { id: 6, type: "image", src: "/images/gallery/gallery-6.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 6", isLandscape: true },
  { id: 7, type: "image", src: "/images/gallery/gallery-7.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 7", isLandscape: true },
  { id: 8, type: "image", src: "/images/gallery/gallery-8.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 8", isLandscape: true },
  { id: 9, type: "image", src: "/images/gallery/gallery-9.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 9", isLandscape: false },
  { id: 10, type: "image", src: "/images/gallery/gallery-10.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 10", isLandscape: true },
  { id: 11, type: "image", src: "/images/gallery/gallery-11.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 11", isLandscape: true },
  { id: 12, type: "image", src: "/images/gallery/gallery-12.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 12", isLandscape: true },
  { id: 13, type: "image", src: "/images/gallery/gallery-13.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 13", isLandscape: false },
  { id: 14, type: "image", src: "/images/gallery/gallery-14.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 14", isLandscape: false },
  { id: 15, type: "image", src: "/images/gallery/gallery-15.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 15", isLandscape: true },
  { id: 16, type: "image", src: "/images/gallery/gallery-16.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 16", isLandscape: false },
  { id: 17, type: "image", src: "/images/gallery/gallery-17.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 17", isLandscape: false },
  { id: 18, type: "image", src: "/images/gallery/gallery-18.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 18", isLandscape: false },
  { id: 19, type: "image", src: "/images/gallery/gallery-19.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 19", isLandscape: false },
  { id: 20, type: "image", src: "/images/gallery/gallery-20.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 20", isLandscape: true },
  { id: 21, type: "image", src: "/images/gallery/gallery-21.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 21", isLandscape: false },
  { id: 22, type: "image", src: "/images/gallery/gallery-22.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 22", isLandscape: true },
  { id: 23, type: "image", src: "/images/gallery/gallery-23.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 23", isLandscape: false },
  { id: 24, type: "image", src: "/images/gallery/gallery-24.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 24", isLandscape: false },
  { id: 25, type: "image", src: "/images/gallery/gallery-25.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 25", isLandscape: false },
  { id: 26, type: "image", src: "/images/gallery/gallery-26.jpeg", alt: "Uttarahalli SRS Homestay Gallery Image 26", isLandscape: true },
  { id: 27, type: "video", src: "/videos/tour.mp4", poster: "/images/hero/clean-bg.jpg", alt: "SRS Homestay Video Tour", isLandscape: true },
  { id: 28, type: "video", src: "/videos/gallery-video-1.mp4", poster: "/images/gallery/gallery-5.jpeg", alt: "SRS Homestay Walkthrough Video", isLandscape: true }
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [failedImages, setFailedImages] = React.useState<Set<number>>(new Set())
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleImageError = (id: number) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
  }

  const getImgSrc = (item: GalleryItem) => {
    return failedImages.has(item.id) ? "/opengraph-image.png" : item.src
  }

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1)
    }
  }

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev === null || prev === 0 ? galleryItems.length - 1 : prev - 1))
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev === null || prev === galleryItems.length - 1 ? 0 : prev + 1))
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

  const visibleItems = isExpanded ? galleryItems : galleryItems.slice(0, 8)

  return (
    <Section id="gallery" className="bg-white py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Gallery
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              Take a glimpse inside.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Explore our meticulously designed spaces curated for comfort and style.
            </p>
          </SlideUp>
        </div>
      </Container>

      {/* Edge to Edge Grid */}
      <div className="w-full">
        <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {visibleItems.map((item, index) => (
            <SlideUp key={item.id} className={item.isLandscape ? "col-span-2" : "col-span-1"}>
              <div 
                className="group relative w-full h-[250px] md:h-[400px] overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-inset bg-neutral-900"
                onClick={() => openLightbox(index)}
                tabIndex={0}
                role="button"
                aria-label={`View larger ${item.type} of ${item.alt}`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              >
                {item.type === "video" ? (
                  <>
                    <Image
                      src={item.poster || "/images/gallery/gallery-1.jpeg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-75"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 shadow-2xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                        <Play className="h-6 w-6 fill-current text-white" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={getImgSrc(item)}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      onError={() => handleImageError(item.id)}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 mix-blend-multiply transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 shadow-2xl">
                        <Maximize2 className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </div>

      {/* Show More / Show Less Toggle Button */}
      {galleryItems.length > 8 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3.5 rounded-full border border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary/50"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full backdrop-blur-md transition-all z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md transition-all z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary hidden sm:block"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on media from closing lightbox
            >
              {galleryItems[selectedIndex].type === "video" ? (
                <video
                  src={galleryItems[selectedIndex].src}
                  poster={galleryItems[selectedIndex].poster}
                  controls
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-contain"
                  playsInline
                />
              ) : (
                <Image
                  src={getImgSrc(galleryItems[selectedIndex])}
                  alt={galleryItems[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md transition-all z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary hidden sm:block"
              aria-label="Next item"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest bg-white/5 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
              {selectedIndex + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
