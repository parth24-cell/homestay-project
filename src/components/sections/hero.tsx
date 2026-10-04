"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowDown, Star, Phone, Image as ImageIcon, MapPin, Calendar, Users, ShieldCheck } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  const isMobile = React.useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia("(max-width: 768px)")
      media.addEventListener("change", onStoreChange)
      return () => media.removeEventListener("change", onStoreChange)
    },
    () => window.matchMedia("(max-width: 768px)").matches,
    () => false
  )

  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#0B1120] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={isMobile ? {} : { y }}
      >
        <Image
          src="/images/hero/clean-bg.jpg" // Using the clean building image without text
          alt="SRS Homestay Building"
          fill
          priority
          className="object-cover object-center transform scale-105"
          sizes="100vw"
        />
        {/* Complex Gradient Overlay to match mockup (dark left, transparent right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
      </motion.div>

      {/* Decorative dots pattern on the left */}
      <div className="absolute left-0 top-0 w-64 h-full pointer-events-none opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_right,white,transparent)]" />
      
      {/* Decorative large circles */}
      <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full border border-teal-500/20 pointer-events-none" />
      <div className="absolute -left-48 top-1/4 w-[500px] h-[500px] rounded-full border border-teal-500/10 pointer-events-none" />

      {/* Content */}
      <Container className="relative z-20 pt-32 pb-24 w-full h-full flex flex-col justify-center">
        <motion.div 
          style={isMobile ? {} : { opacity }}
          className="max-w-2xl text-left flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Badge 
              variant="outline" 
              className="mb-6 border-[#d97706]/40 text-[#f59e0b] bg-[#78350f]/30 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full flex items-center gap-1.5 backdrop-blur-md"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Premium Homestay & PG
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Heading level="h1" className="text-white mb-6 leading-[1.15] font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
              Affordable,<br />
              Comfortable &<br />
              Convenient Living<br />
              in <span className="text-teal-600">Bangalore</span>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
              Premium homestay and PG accommodation for students, professionals & travelers near Doddakallasandra Metro Station.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <Button 
              size="lg" 
              onClick={() => handleScrollClick("contact")}
              className="w-full sm:w-auto bg-teal-700 text-white hover:bg-teal-600 text-base font-semibold h-12 px-8 rounded-full shadow-[0_4px_14px_0_rgba(15,118,110,0.39)] transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => handleScrollClick("gallery")}
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-[#fcd34d] border-[#fcd34d]/60 text-base font-semibold h-12 px-8 rounded-full transition-all duration-200"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              View Gallery
            </Button>
          </motion.div>

          {/* Info Card Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="w-full max-w-3xl bg-white/5 max-md:bg-neutral-900/90 backdrop-blur-sm md:backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-white/10">
              
              <div className="flex flex-col items-center text-center px-2">
                <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center mb-3 text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                  1.5 km from<br/>Metro Station
                </span>
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <div className="w-10 h-10 rounded-full bg-yellow-900/50 flex items-center justify-center mb-3 text-yellow-500">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                  Daily, Weekly &<br/>Monthly Stay
                </span>
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center mb-3 text-teal-400">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                  Perfect for<br/>Students & Professionals
                </span>
              </div>

              <div className="flex flex-col items-center text-center px-2">
                <div className="w-10 h-10 rounded-full bg-yellow-900/50 flex items-center justify-center mb-3 text-yellow-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                  Safe, Clean &<br/>Secure Environment
                </span>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <button 
          onClick={() => handleScrollClick("about")}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1 group-hover:border-white/60 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-white/70"
            />
          </div>
          <span className="text-[11px] font-medium font-sans flex items-center gap-1">
            Scroll to explore
            <ArrowDown className="w-3 h-3" />
          </span>
        </button>
      </motion.div>
    </section>
  )
}
