"use client"

import * as React from "react"
import { Phone, MessageCircle } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { contactConfig } from "@/config/contact"

export function FloatingActions() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = React.useState(true)
  const lastY = React.useRef(0)

  // Hide slightly while scrolling down, reappear while scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest - lastY.current
    if (direction > 10 && latest > 200) {
      setIsVisible(false)
    } else if (direction < -10 || latest <= 200) {
      setIsVisible(true)
    }
    lastY.current = latest
  })

  return (
    <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-4 sm:right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3"
          >
            {/* Call Button */}
            <a
              href={`tel:${contactConfig.phoneNumbers[0]}`}
              className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white shadow-lg shadow-black/10 hover:shadow-xl hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              aria-label="Call us"
            >
              <Phone className="h-6 w-6" />
            </a>
            
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 hover:shadow-xl hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-7 w-7" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
