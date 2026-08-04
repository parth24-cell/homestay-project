"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { FadeIn, SlideUp } from "@/components/ui/animations"

export function VideoTour() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)
  const videoRef = React.useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (hasError) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Section id="video-tour" className="bg-[#F3F0EA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Video Tour
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Experience our homestay before you visit.
            </Heading>
          </SlideUp>
        </div>

        <FadeIn delay={0.2} className="mx-auto max-w-5xl">
          <div 
            className="relative aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2" 
            onClick={handlePlayPause}
            tabIndex={0}
            role="button"
            aria-label="Play or pause video tour"
            onKeyDown={(e) => e.key === "Enter" && handlePlayPause()}
          >
            {hasError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/10 text-secondary">
                <span className="mb-2 opacity-70">Video unavailable</span>
                <span className="text-sm opacity-50">Please check back later</span>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover bg-black"
                  controls={isPlaying} // Show controls only when playing for cleaner look initially
                  playsInline
                  poster="/images/hero/hero-1.jpeg"
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onError={() => setHasError(true)}
                >
                  <source src="/videos/tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-500">
                    <div className="bg-white/20 backdrop-blur-md h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-xl border border-white/20">
                      <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-2" />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
