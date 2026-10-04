import { MapPin, Navigation2, Train, Compass, Car } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { SlideUp, FadeIn } from "@/components/ui/animations"
import { contactConfig } from "@/config/contact"

export function Location() {
  return (
    <Section id="location" className="bg-[#F3F0EA] py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 rounded-l-full blur-3xl -z-10 pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-secondary" />
              <span className="text-secondary font-semibold tracking-widest uppercase text-xs">
                Location
              </span>
              <div className="h-[1px] w-8 bg-secondary" />
            </div>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground font-heading text-4xl md:text-5xl">
              Find your way here.
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Conveniently located in Subramanya Pura, Bangalore, with excellent connectivity to major transport hubs and local attractions.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Location Information Panel */}
          <SlideUp className="lg:col-span-5 h-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-border/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <Compass className="w-32 h-32" />
              </div>
              
              <div className="flex-1 relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
                  <MapPin className="h-8 w-8" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Uttarahalli SRS Homestay
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-secondary mt-1 shrink-0" />
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {contactConfig.addressDetails.building}, {contactConfig.addressDetails.block}<br />
                      {contactConfig.addressDetails.street}<br />
                      {contactConfig.addressDetails.area}, {contactConfig.addressDetails.city} – {contactConfig.addressDetails.pincode}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Navigation2 className="h-5 w-5 text-secondary mt-1 shrink-0" />
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      <span className="text-foreground block mb-1 font-semibold">Landmark</span>
                      {contactConfig.addressDetails.landmark}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted/50 p-4 rounded-2xl border border-border/50">
                    <Train className="h-5 w-5 text-primary mb-2" />
                    <span className="text-sm font-semibold text-foreground block">Metro Station</span>
                    <span className="text-xs text-muted-foreground">1.5 km away</span>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-2xl border border-border/50">
                    <Car className="h-5 w-5 text-primary mb-2" />
                    <span className="text-sm font-semibold text-foreground block">City Center</span>
                    <span className="text-xs text-muted-foreground">20 mins drive</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <a
                  href={contactConfig.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all focus-visible:outline-none bg-primary text-primary-foreground hover:bg-accent h-14 px-6 w-full shadow-[0_8px_30px_rgb(15,118,110,0.2)] hover:shadow-[0_8px_30px_rgb(15,118,110,0.4)] hover:-translate-y-1"
                >
                  <Navigation2 className="mr-2 h-5 w-5" />
                  Get Directions via Maps
                </a>
              </div>
            </div>
          </SlideUp>

          {/* Google Map Embed */}
          <FadeIn delay={0.2} className="lg:col-span-7 w-full h-[400px] lg:h-[100%] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] border-4 border-white relative group">
            <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10" />
            <iframe
              title="Google Map showing the location of Uttarahalli SRS Homestay & PG"
              src={contactConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.9) hue-rotate(180deg) invert(0)' }} // Note: you can tweak this or remove it, just making it look slightly stylized
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
