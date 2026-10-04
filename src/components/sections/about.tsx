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
    <Section id="about" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <FadeIn className="relative h-[350px] sm:h-[450px] lg:h-[550px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(15,118,110,0.12)] group">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
              alt="Comfortable stay at Uttarahalli SRS Homestay"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Soft decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-multiply opacity-50" />
          </FadeIn>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-center">
            <SlideUp>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                  Discover Our Spaces
                </span>
              </div>
            </SlideUp>
            
            <SlideUp delay={0.1}>
              <Heading level="h2" className="mb-6 leading-tight text-foreground font-heading">
                Premium, Comfortable & Convenient Living in Bangalore
              </Heading>
            </SlideUp>
            
            <SlideUp delay={0.2}>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-sans font-light">
                Experience a budget-friendly yet premium accommodation located in the heart of Subramanya Pura, Bangalore, right near the Doddakallasandra Metro Station. 
                Whether you are a student, a working professional, or a traveler passing through, our thoughtfully designed spaces offer the perfect blend of comfort, security, and elegance.
              </p>
            </SlideUp>

            {/* Information Grid */}
            <SlideUp delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-border/60">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground text-sm md:text-base group-hover:text-primary transition-colors duration-300">
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
