import { Wallet, Train, CalendarDays, Briefcase, Sofa, MapPin } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const features = [
  {
    title: "Budget-Friendly",
    description: "Enjoy premium living spaces without compromising on affordability.",
    icon: Wallet,
  },
  {
    title: "Metro Connectivity",
    description: "Located near Doddakallasandra Metro for an easy daily commute.",
    icon: Train,
  },
  {
    title: "Flexible Stay",
    description: "Daily, weekly, and monthly options tailored to your needs.",
    icon: CalendarDays,
  },
  {
    title: "Ideal for Professionals",
    description: "A peaceful environment ideal for studying, working, or relaxing.",
    icon: Briefcase,
  },
  {
    title: "Premium Comfort",
    description: "Thoughtfully designed interiors focused on restful experiences.",
    icon: Sofa,
  },
  {
    title: "Prime Location",
    description: "Centrally located in Subramanya Pura, keeping everything in reach.",
    icon: MapPin,
  },
]

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 items-end">
          <div className="flex-1 max-w-2xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                  The Experience
                </span>
              </div>
            </FadeIn>
            <SlideUp delay={0.1}>
              <Heading level="h2" className="text-foreground font-heading text-4xl md:text-5xl leading-tight">
                Why Uttarahalli SRS is the smart choice.
              </Heading>
            </SlideUp>
          </div>
          <SlideUp delay={0.2} className="flex-1">
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              We focus on the details so you don&apos;t have to. Experience a perfectly balanced lifestyle with modern amenities, strategic location, and uncompromising comfort.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <SlideUp key={index}>
              <div className="group flex flex-col p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                <div className="mb-6">
                  <div className="h-16 w-16 rounded-2xl bg-white shadow-sm border border-border/50 text-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <feature.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
