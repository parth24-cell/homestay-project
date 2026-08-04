import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { AccommodationOptions } from "@/components/sections/accommodation";
import { Gallery } from "@/components/sections/gallery";
import { VideoTour } from "@/components/sections/video-tour";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <AccommodationOptions />
        <Gallery />
        <VideoTour />
        <WhyChooseUs />
        <NearbyPlaces />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
