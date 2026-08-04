import Image from "next/image"
import { MapPin, IndianRupee, CalendarDays, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { FadeIn, SlideUp } from "@/components/ui/animations"

const features = [
  {
    icon: IndianRupee,
    title: "Starting Rent: ₹2000",
  },
  {
    icon: CalendarDays,
    title: "Daily / Weekly Stay Available",
  },
  {
    icon: MapPin,
    title: "Near Doddakallasandra Metro",
  },
  {
    icon: Users,
    title: "Boys & Girls Accommodation",
  },
]

export function About() {
  return (
    <Section id="about" className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <FadeIn className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
              alt="Comfortable stay at Uttarahalli SRS Homestay"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Soft decorative overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </FadeIn>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <SlideUp>
              <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
                Welcome to Uttarahalli SRS Homestay & PG
              </span>
            </SlideUp>
            
            <SlideUp delay={0.1}>
              <Heading level="h2" className="mb-6 leading-tight text-foreground">
                Affordable, Comfortable & Convenient Living in Bangalore
              </Heading>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Experience a budget-friendly and premium accommodation located in the heart of Subramanya Pura, Bangalore, right near the Doddakallasandra Metro Station. 
                Whether you are a student, a working professional, a bachelor, or a traveler passing through, our thoughtfully designed spaces offer the perfect blend of comfort and convenience. 
                We provide flexible stay options including daily, weekly, and monthly plans tailored to suit your specific needs.
              </p>
            </SlideUp>

            {/* Information Grid */}
            <SlideUp delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground text-sm md:text-base">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
