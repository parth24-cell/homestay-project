import { Home, UserCheck, Building, BedDouble, Sun, Calendar } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const accommodations = [
  {
    title: "Home Stay",
    description: "Experience the warmth of a home with all essential comforts and privacy.",
    icon: Home,
    price: "From ₹4000/night",
  },
  {
    title: "Paying Guest (PG)",
    description: "Perfect for students and professionals looking for long-term, hassle-free living.",
    icon: UserCheck,
    price: "From ₹4000/month",
    featured: true,
  },
  {
    title: "Hostel",
    description: "Budget-friendly shared spaces designed for a vibrant community lifestyle.",
    icon: Building,
    price: "From ₹3000/month",
  },
  {
    title: "Dormitory",
    description: "Highly affordable bed spaces ideal for groups or individuals on a tight budget.",
    icon: BedDouble,
    price: "From ₹2000/month",
  },
  {
    title: "Daily Stay",
    description: "Convenient short-term stays for travelers passing through Bangalore.",
    icon: Sun,
    price: "From ₹500/day",
  },
  {
    title: "Weekly Stay",
    description: "Flexible arrangements for short assignments or temporary transitions.",
    icon: Calendar,
    price: "From ₹1500/week",
  },
]

export function AccommodationOptions() {
  return (
    <Section id="accommodation" className="bg-[#FAFAF9] py-24 relative">
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Accommodation
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              Choose your perfect stay.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              We offer multiple flexible living arrangements with premium amenities at unbeatable prices.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {accommodations.map((option, index) => (
            <SlideUp key={index} className="h-full">
              <div 
                className={`relative flex flex-col h-full bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 group ${
                  option.featured 
                    ? 'shadow-[0_20px_60px_-15px_rgba(15,118,110,0.2)] border border-primary/20' 
                    : 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                }`}
              >
                {/* Featured Badge */}
                {option.featured && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                    option.featured ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <option.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    {option.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-border/50 mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starts at</span>
                    <span className="text-3xl font-bold text-foreground font-heading">
                      {option.price ? option.price.split('/')[0] : 'Contact Us'}
                      <span className="text-base font-medium text-muted-foreground font-sans">
                        {option.price && `/${option.price.split('/')[1]}`}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
