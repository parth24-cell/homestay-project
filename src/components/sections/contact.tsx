import { Phone, Mail, MapPin, Navigation, MessageCircle } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { StaggerContainer, SlideUp, FadeIn } from "@/components/ui/animations"
import { contactConfig } from "@/config/contact"

export function Contact() {
  return (
    <Section id="contact" className="bg-[#FAFAF9] py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Get In Touch
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              We&apos;re here to help.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Have a question about our accommodations or want to schedule a visit? Reach out to us and we&apos;ll get back to you shortly.
            </p>
          </SlideUp>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Phone Card */}
          <SlideUp>
            <div className="flex flex-col h-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-400 group text-center hover:-translate-y-2">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-muted text-muted-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-3 group-hover:scale-110">
                <Phone className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Phone</h3>
              <div className="space-y-2 text-muted-foreground font-medium mb-8 flex-1">
                {contactConfig.phoneNumbers.map((num, i) => (
                  <p key={i} className="text-lg">{num}</p>
                ))}
              </div>
              <div className="flex flex-col gap-3 w-full">
                <a
                  href={`tel:${contactConfig.phoneNumbers[0]}`}
                  className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none bg-primary text-primary-foreground hover:bg-accent h-14 px-6 w-full shadow-[0_8px_30px_rgb(15,118,110,0.2)] hover:shadow-[0_8px_30px_rgb(15,118,110,0.4)] hover:-translate-y-1"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none bg-[#25D366] text-white hover:bg-[#1EBE5D] h-14 px-6 w-full shadow-[0_8px_30px_rgb(37,211,102,0.2)] hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:-translate-y-1"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Email Card */}
          <SlideUp>
            <div className="flex flex-col h-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-400 group text-center hover:-translate-y-2">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-muted text-muted-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-3 group-hover:scale-110">
                <Mail className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Email</h3>
              <p className="text-lg text-muted-foreground font-medium mb-8 flex-1">
                {contactConfig.email}
              </p>
              <div className="w-full mt-auto">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none border-2 border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white h-14 px-6 w-full hover:border-primary hover:-translate-y-1"
                >
                  <Mail className="mr-2 h-5 w-5" /> Email Us
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Address Card */}
          <SlideUp>
            <div className="flex flex-col h-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-400 group text-center hover:-translate-y-2">
              <div className="h-20 w-20 mx-auto rounded-3xl bg-muted text-muted-foreground flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-rotate-3 group-hover:scale-110">
                <MapPin className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">Address</h3>
              <p className="text-base text-muted-foreground font-medium leading-relaxed mb-8 flex-1">
                {contactConfig.address}
              </p>
              <div className="w-full mt-auto">
                <a
                  href={contactConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none border-2 border-primary/20 bg-transparent text-primary hover:bg-primary hover:text-white h-14 px-6 w-full hover:border-primary hover:-translate-y-1"
                >
                  <Navigation className="mr-2 h-5 w-5" /> Get Directions
                </a>
              </div>
            </div>
          </SlideUp>

        </StaggerContainer>
      </Container>
    </Section>
  )
}
