import { Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"

// TODO: Replace these placeholders with genuine customer reviews before production
const testimonials = [
  {
    name: "John Doe",
    role: "Working Professional",
    text: "An incredibly comfortable stay. The location near the metro makes commuting a breeze, and the atmosphere is very peaceful.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Student",
    text: "Very affordable for the premium feel it provides. The rooms are clean, well-maintained, and perfectly suited for focused studying.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    role: "Traveler",
    text: "I stayed here for a week while exploring Bangalore. Highly recommend it for anyone looking for a budget-friendly yet luxury experience.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Testimonials
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              What Our Guests Say
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hear from people who have stayed with us.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={index}>
              <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden p-2">
                <CardHeader className="pb-4 pt-6 px-6">
                  <div 
                    className="flex gap-1 mb-4 text-amber-500" 
                    aria-label={`${testimonial.rating} out of 5 stars`}
                    title={`${testimonial.rating} out of 5 stars`}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <p className="text-base text-muted-foreground leading-relaxed italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <h4 className="font-heading font-medium text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
