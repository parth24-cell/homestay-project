import { Phone, Mail, MapPin, Navigation, MessageCircle } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"
import { contactConfig } from "@/config/contact"

export function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Get In Touch
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Contact Us
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are happy to assist you with your stay. Reach out to us through any of the channels below.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Phone Card */}
          <SlideUp>
            <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl text-center group">
              <CardHeader className="pt-8 pb-4 items-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Phone</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-4">
                <div className="space-y-2 text-muted-foreground font-medium">
                  {contactConfig.phoneNumbers.map((num, i) => (
                    <p key={i}>{num}</p>
                  ))}
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href={`tel:${contactConfig.phoneNumbers[0]}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 w-full"
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                  <a
                    href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#25D366] text-white shadow hover:bg-[#25D366]/90 h-10 px-4 w-full"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </SlideUp>

          {/* Email Card */}
          <SlideUp>
            <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl text-center group">
              <CardHeader className="pt-8 pb-4 items-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-4 flex flex-col h-[calc(100%-88px)]">
                <p className="text-muted-foreground font-medium flex-1">
                  {contactConfig.email}
                </p>
                <div className="pt-4">
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </SlideUp>

          {/* Address Card */}
          <SlideUp>
            <Card className="h-full border-transparent bg-white shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl text-center group">
              <CardHeader className="pt-8 pb-4 items-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Address</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 space-y-4 flex flex-col h-[calc(100%-88px)]">
                <p className="text-sm text-muted-foreground font-medium leading-relaxed flex-1">
                  {contactConfig.address}
                </p>
                <div className="pt-4">
                  <a
                    href={contactConfig.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    <Navigation className="mr-2 h-4 w-4" /> Get Directions
                  </a>
                </div>
              </CardContent>
            </Card>
          </SlideUp>

        </StaggerContainer>
      </Container>
    </Section>
  )
}
