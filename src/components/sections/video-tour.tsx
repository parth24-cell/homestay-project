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
    <Section id="video-tour" className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-semibold tracking-widest uppercase text-xs">
                Cinematic Tour
              </span>
              <div className="h-[1px] w-8 bg-primary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-white font-heading text-4xl md:text-5xl">
              Experience the stay.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Take a virtual walkthrough of our premium accommodations before you arrive.
            </p>
          </SlideUp>
        </div>

        <FadeIn delay={0.3} className="mx-auto max-w-6xl">
          <div 
            className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group cursor-pointer bg-neutral-900 border border-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-700 hover:shadow-[0_0_80px_rgba(15,118,110,0.2)]" 
            onClick={handlePlayPause}
            tabIndex={0}
            role="button"
            aria-label="Play or pause video tour"
            onKeyDown={(e) => e.key === "Enter" && handlePlayPause()}
          >
            {hasError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 text-white/50">
                <span className="mb-2 opacity-70">Video unavailable</span>
                <span className="text-sm opacity-50">Please check back later</span>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-100 opacity-100' : 'scale-105 opacity-80 group-hover:scale-100 group-hover:opacity-100'}`}
                  controls={isPlaying} // Show controls only when playing for cleaner look initially
                  playsInline
                  poster="/images/hero/clean-bg.jpg"
                  preload="none"
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  onError={() => setHasError(true)}
                >
                  <source src="/videos/tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-700">
                    <div className="relative flex items-center justify-center group-hover:scale-110 transition-transform duration-700 ease-out">
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_3s_ease-in-out_infinite]" />
                      <div className="absolute inset-0 rounded-full border border-white/10 animate-[ping_3s_ease-in-out_infinite_1s]" />
                      
                      <div className="bg-white/10 backdrop-blur-xl h-24 w-24 md:h-28 md:w-28 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl border border-white/20 group-hover:bg-white/20 group-hover:border-white/40">
                        <Play className="h-10 w-10 md:h-12 md:w-12 text-white ml-2 drop-shadow-lg" fill="currentColor" />
                      </div>
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
