"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

type MotionWrapperProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode
}

export function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  return (
    <motion.div className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, ...props }: MotionWrapperProps & { delay?: number, duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({ children, className, delay = 0, duration = 0.5, yOffset = 30, ...props }: MotionWrapperProps & { delay?: number, duration?: number, yOffset?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className, delay = 0, duration = 0.5, initialScale = 0.95, ...props }: MotionWrapperProps & { delay?: number, duration?: number, initialScale?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className, staggerDelay = 0.1, delayChildren = 0, ...props }: MotionWrapperProps & { staggerDelay?: number, delayChildren?: number }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
