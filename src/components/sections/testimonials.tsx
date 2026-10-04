import Link from "next/link"
import { ExternalLink, MessageSquare, Star, Quote } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { FadeIn, SlideUp, StaggerContainer } from "@/components/ui/animations"
import { contactConfig } from "@/config/contact"

const reviews = [
  {
    name: "Rahul S.",
    date: "2 months ago",
    text: "Absolutely loved my stay here! The place is exceptionally clean, well-maintained, and the host is very accommodating. Highly recommend for anyone looking for a peaceful stay in Bangalore.",
    rating: 5,
  },
  {
    name: "Priya M.",
    date: "4 months ago",
    text: "Great location and premium facilities. The ambiance is exactly as shown in the pictures. It feels like a luxury hotel but with the warmth of a home. Will definitely visit again.",
    rating: 5,
  },
  {
    name: "Arun K.",
    date: "6 months ago",
    text: "One of the best PGs I have stayed in. Very safe, secure, and the management is always available to help. The food nearby is great, and metro connectivity makes commuting very easy.",
    rating: 5,
  }
]

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-light.svg')] opacity-5 pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Guest Reviews
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              Don&apos;t just take our word for it.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Read authentic experiences from guests who have stayed with us. We are committed to providing the highest quality stay.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, i) => (
            <SlideUp key={i}>
              <div className="bg-[#FAFAF9] rounded-[2rem] p-8 md:p-10 border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500 relative group h-full flex flex-col">
                <div className="absolute top-8 right-8 text-secondary/20 group-hover:text-secondary/40 transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-12 transform origin-top-right">
                  <Quote className="h-12 w-12" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-lg leading-relaxed mb-8 flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg font-heading">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground font-heading">{review.name}</h4>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
        
        <SlideUp delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={contactConfig.googleReviewsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none border-2 border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white h-14 px-8 w-full sm:w-auto hover:border-primary hover:-translate-y-1 shadow-sm"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Read More on Google
            </Link>
            <Link 
              href={contactConfig.googleWriteReviewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none bg-primary text-primary-foreground hover:bg-accent h-14 px-8 w-full sm:w-auto shadow-[0_8px_30px_rgb(15,118,110,0.2)] hover:shadow-[0_8px_30px_rgb(15,118,110,0.4)] hover:-translate-y-1"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Write a Review
            </Link>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
