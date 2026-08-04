"use client"

import * as React from "react"
import { ArrowDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

export function Hero() {
  const [hasError, setHasError] = React.useState(false)

  const handleScroll = (id: string) => {
    // Placeholder scroll behavior
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden bg-muted">
        {hasError ? (
          <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
            <span className="text-white/20 text-xl font-medium tracking-widest uppercase">Uttarahalli SRS Homestay</span>
          </div>
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero/hero-1.jpeg"
            onError={() => setHasError(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* Dark Gradient Overlay for readability (45-55% opacity) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/55 z-10" />
      </div>

      {/* Content */}
      <Container className="relative z-20 flex h-full flex-col justify-center pt-20">
        <StaggerContainer 
          staggerDelay={0.1}
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <SlideUp yOffset={20}>
            <Badge 
              variant="outline" 
              className="mb-6 border-secondary/50 text-secondary bg-black/20 backdrop-blur-md px-4 py-1.5 text-sm font-medium tracking-wide"
            >
              Starting From ₹2000/month
            </Badge>
          </SlideUp>

          <SlideUp yOffset={30}>
            <Heading level="h1" className="text-white mb-6 drop-shadow-md max-w-4xl leading-tight">
              Affordable Homestay & PG in Bangalore
            </Heading>
          </SlideUp>

          <SlideUp yOffset={40}>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-sm">
              Comfortable and budget-friendly accommodation for students, working professionals, bachelors, and travelers near Doddakallasandra Metro Station.
            </p>
          </SlideUp>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                onClick={() => handleScroll("contact")}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Contact Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => handleScroll("gallery")}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-base h-12 px-8 rounded-full transition-all"
              >
                View Gallery
              </Button>
            </div>
          </FadeIn>
        </StaggerContainer>
      </Container>

      {/* Scroll Indicator */}
      <FadeIn delay={0.8} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button 
          onClick={() => handleScroll("about")}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full p-2"
          aria-label="Scroll down to About section"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </div>
        </button>
      </FadeIn>
    </section>
  )
}
