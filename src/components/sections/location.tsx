import { MapPin, Navigation2 } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { SlideUp, FadeIn } from "@/components/ui/animations"
import { contactConfig } from "@/config/contact"

export function Location() {
  return (
    <Section id="location" className="bg-[#F3F0EA]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
              Location
            </span>
          </FadeIn>
          <SlideUp delay={0.1}>
            <Heading level="h2" className="mb-4 text-foreground">
              Find Us
            </Heading>
          </SlideUp>
          <SlideUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Conveniently located near Doddakallasandra Metro Station in Subramanya Pura, Bangalore.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Location Information */}
          <SlideUp className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:shadow-xl transition-shadow duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              
              <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                Full Address
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {contactConfig.addressDetails.building}<br />
                {contactConfig.addressDetails.block}<br />
                {contactConfig.addressDetails.street}<br />
                {contactConfig.addressDetails.area}, {contactConfig.addressDetails.city} – {contactConfig.addressDetails.pincode}
              </p>
              
              <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                Landmark
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {contactConfig.addressDetails.landmark}
              </p>

              <div className="inline-flex items-center text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full mb-8">
                Distance from Metro: 1.5 km
              </div>

              <a
                href={contactConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-6 w-full"
              >
                <Navigation2 className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </div>
          </SlideUp>

          {/* Google Map Embed */}
          <FadeIn delay={0.2} className="lg:col-span-2 w-full h-[400px] lg:h-[100%] min-h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border-[8px] border-white relative">
            <iframe
              title="Google Map showing the location of Uttarahalli SRS Homestay & PG"
              src={contactConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
