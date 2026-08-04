import { Wallet, Train, CalendarDays, Briefcase, Sofa, MapPin } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const features = [
  {
    title: "Budget-Friendly Accommodation",
    description: "Enjoy premium living spaces without compromising on affordability.",
    icon: Wallet,
  },
  {
    title: "Near Doddakallasandra Metro",
    description: "Excellent connectivity to the rest of Bangalore for an easy daily commute.",
    icon: Train,
  },
  {
    title: "Daily, Weekly & Monthly Stay",
    description: "Flexible duration options tailored for travelers, students, and professionals.",
    icon: CalendarDays,
  },
  {
    title: "Students & Professionals",
    description: "A peaceful environment ideal for studying, working, or simply relaxing.",
    icon: Briefcase,
  },
  {
    title: "Comfortable Environment",
    description: "Thoughtfully designed interiors focused on providing a restful experience.",
    icon: Sofa,
  },
  {
    title: "Convenient Location",
    description: "Located centrally in Subramanya Pura, keeping everything within reach.",
    icon: MapPin,
  },
]

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Why Choose Us
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Why Choose Uttarahalli SRS Homestay & PG?
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Everything you need for a comfortable and affordable stay in Bangalore.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <SlideUp key={index}>
              <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
                <CardHeader className="pb-4 pt-8 px-8">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
