"use client"

import Link from "next/link"
import { Home, Phone } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { FadeIn, SlideUp } from "@/components/ui/animations"
import { buttonVariants } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] bg-background pt-24 pb-16">
        <Section className="w-full">
          <Container className="text-center max-w-2xl mx-auto flex flex-col items-center">
            <FadeIn>
              {/* Illustration Placeholder */}
              <div className="w-64 h-64 mx-auto mb-8 relative opacity-80" aria-hidden="true">
                <svg className="w-full h-full text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.441 2 11.953 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
            </FadeIn>
            
            <SlideUp delay={0.1}>
              <Heading level="h1" className="mb-4 text-foreground">
                Page Not Found
              </Heading>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
              </p>
            </SlideUp>

            <SlideUp delay={0.3} className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/" 
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}
              >
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
              <Link 
                href="/#contact" 
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </SlideUp>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
