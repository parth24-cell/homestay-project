import { Home, UserCheck, Building, BedDouble, Sun, Calendar } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

const accommodations = [
  {
    title: "Home Stay",
    description: "Experience the warmth of a home with all essential comforts and privacy.",
    icon: Home,
  },
  {
    title: "Paying Guest (PG)",
    description: "Perfect for students and professionals looking for long-term, hassle-free living.",
    icon: UserCheck,
    price: "From ₹4000/month",
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
  },
  {
    title: "Weekly Stay",
    description: "Flexible arrangements for short assignments or temporary transitions.",
    icon: Calendar,
  },
]

export function AccommodationOptions() {
  return (
    <Section id="accommodation" className="bg-[#F3F0EA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Accommodation Options
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Choose the stay that best suits your needs.
            </Heading>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {accommodations.map((option, index) => (
            <SlideUp key={index}>
              <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden">
                <CardHeader className="pb-4 pt-8 px-8">
                  <div className="h-14 w-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <option.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </CardDescription>
                  {option.price && (
                    <div className="inline-flex items-center text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {option.price}
                    </div>
                  )}
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
