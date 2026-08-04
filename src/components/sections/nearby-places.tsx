import { Train, MapPin, Map, Navigation, ShoppingBag, Coffee } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const places = [
  {
    title: "Doddakallasandra Metro Station",
    description: "Quick and easy access to Bangalore's extensive metro network.",
    icon: Train,
    distance: "Walking Distance",
  },
  {
    title: "Uttarahalli",
    description: "A prominent residential area offering all daily conveniences.",
    icon: MapPin,
  },
  {
    title: "Subramanya Pura",
    description: "Our core neighborhood, known for its peaceful environment.",
    icon: Map,
  },
  {
    title: "Gubbalala",
    description: "Easily accessible nearby locality.",
    icon: Navigation,
  },
  {
    title: "Shopping & Daily Essentials",
    description: "Supermarkets and daily necessity stores located nearby.",
    icon: ShoppingBag,
  },
  {
    title: "Restaurants & Cafés",
    description: "A variety of local eateries and coffee shops within close reach.",
    icon: Coffee,
  },
]

export function NearbyPlaces() {
  return (
    <Section id="nearby-places" className="bg-[#F3F0EA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Neighborhood
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Nearby Places
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Well connected to important locations and essential services around Bangalore.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {places.map((place, index) => (
            <SlideUp key={index}>
              <Card className="h-full border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden relative">
                <CardHeader className="pb-2 pt-8 px-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <place.icon className="h-5 w-5" />
                    </div>
                    {place.distance && (
                      <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {place.distance}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {place.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mt-2">
                    {place.description}
                  </CardDescription>
                </CardContent>
                
                {/* Decorative hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
