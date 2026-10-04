"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type MotionWrapperProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode
}

function usePrefersReducedMotionOrMobile() {
  const [shouldReduce, setShouldReduce] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const mobileQuery = window.matchMedia("(max-width: 768px)")
    
    const checkStatus = () => {
      setShouldReduce(motionQuery.matches || mobileQuery.matches)
    }
    
    checkStatus()
    
    motionQuery.addEventListener("change", checkStatus)
    mobileQuery.addEventListener("change", checkStatus)
    
    return () => {
      motionQuery.removeEventListener("change", checkStatus)
      mobileQuery.removeEventListener("change", checkStatus)
    }
  }, [])

  return shouldReduce
}

export function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, ...props }: MotionWrapperProps & { delay?: number, duration?: number }) {
  const shouldReduce = usePrefersReducedMotionOrMobile()

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1 }}
      viewport={shouldReduce ? undefined : { once: true, margin: "-10%" }}
      transition={shouldReduce ? { duration: 0 } : { duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({ children, className, delay = 0, duration = 0.5, yOffset = 30, ...props }: MotionWrapperProps & { delay?: number, duration?: number, yOffset?: number }) {
  const shouldReduce = usePrefersReducedMotionOrMobile()

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={shouldReduce ? undefined : { once: true, margin: "-10%" }}
      transition={shouldReduce ? { duration: 0 } : { duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className, delay = 0, duration = 0.5, initialScale = 0.95, ...props }: MotionWrapperProps & { delay?: number, duration?: number, initialScale?: number }) {
  const shouldReduce = usePrefersReducedMotionOrMobile()

  return (
    <motion.div
      initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: initialScale }}
      whileInView={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
      viewport={shouldReduce ? undefined : { once: true, margin: "-10%" }}
      transition={shouldReduce ? { duration: 0 } : { duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, delayChildren = 0, ...props }: MotionWrapperProps & { staggerDelay?: number, delayChildren?: number }) {
  const shouldReduce = usePrefersReducedMotionOrMobile()

  const containerVariants = {
    hidden: { opacity: shouldReduce ? 1 : 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : staggerDelay,
        delayChildren: shouldReduce ? 0 : delayChildren,
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial={shouldReduce ? "show" : "hidden"}
      whileInView="show"
      viewport={shouldReduce ? undefined : { once: true, margin: "-10%" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
