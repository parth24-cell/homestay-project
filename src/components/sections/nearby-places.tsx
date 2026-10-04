import { Train, MapPin, Map, Navigation, ShoppingBag, Coffee } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const places = [
  {
    title: "Doddakallasandra Metro Station",
    description: "Quick and easy access to Bangalore's extensive metro network.",
    icon: Train,
    distance: "5 Min Walk",
    highlight: true,
  },
  {
    title: "Uttarahalli",
    description: "A prominent residential area offering all daily conveniences.",
    icon: MapPin,
    distance: "1.5 km",
  },
  {
    title: "Subramanya Pura",
    description: "Our core neighborhood, known for its peaceful environment.",
    icon: Map,
    distance: "0 km",
  },
  {
    title: "Gubbalala",
    description: "Easily accessible nearby locality with great connectivity.",
    icon: Navigation,
    distance: "2 km",
  },
  {
    title: "Shopping & Essentials",
    description: "Supermarkets and daily necessity stores located nearby.",
    icon: ShoppingBag,
    distance: "200m",
  },
  {
    title: "Restaurants & Cafés",
    description: "A variety of local eateries and coffee shops within close reach.",
    icon: Coffee,
    distance: "100m",
  },
]

export function NearbyPlaces() {
  return (
    <Section id="nearby-places" className="bg-[#F8FAFC] py-24 relative">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Neighborhood
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              Everything at your doorstep.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Well connected to important locations and essential services around Bangalore, ensuring you never have to travel far for what you need.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {places.map((place, index) => (
            <SlideUp key={index}>
              <div className="relative h-full p-8 bg-white border border-border/40 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden">
                {/* Decorative gradient bleed */}
                {place.highlight && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                )}

                <div className="flex justify-between items-start mb-6">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    place.highlight ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <place.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  {place.distance && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                      <Navigation className="h-3 w-3" />
                      {place.distance}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {place.title}
                </h3>
                
                <p className="text-muted-foreground font-light leading-relaxed">
                  {place.description}
                </p>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
