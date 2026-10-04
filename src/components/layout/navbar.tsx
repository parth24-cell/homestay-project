"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { navigationLinks } from "@/constants/navigation"
import { buttonVariants } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  // Handle scroll detection for floating effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    if (isOpen) {
      const handle = setTimeout(() => {
        setIsOpen(false)
      }, 0)
      return () => clearTimeout(handle)
    }
  }, [pathname, isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mx-auto w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto",
          isScrolled 
            ? "bg-white/95 max-md:backdrop-blur-md md:bg-white/80 md:backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50" 
            : "bg-transparent"
        )}
      >
        <div className="flex h-16 sm:h-20 items-center justify-between px-6 sm:px-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <span className={cn(
                "font-heading text-2xl font-bold transition-colors duration-300",
                isScrolled ? "text-primary" : "text-primary lg:text-white"
              )}>
                SRS Homestay
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-1">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span className={cn(
                    "relative z-10 text-sm font-medium transition-colors duration-300",
                    isScrolled 
                      ? (isActive ? "text-primary font-semibold" : "text-muted-foreground group-hover:text-primary")
                      : (isActive ? "text-white font-semibold" : "text-white/80 group-hover:text-white")
                  )}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Call to Action (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href="/#contact" className={cn(
              buttonVariants({ variant: "default" }), 
              "rounded-full px-6 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5",
              isScrolled 
                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            )}>
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "focus:outline-none p-2 rounded-full transition-colors",
                isScrolled ? "text-primary hover:bg-muted" : "text-primary hover:bg-white/20"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md shadow-2xl border border-white/50 pointer-events-auto lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-2xl text-lg font-medium transition-all duration-200",
                    pathname === link.href 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 mt-2 border-t border-border/50">
                <Link 
                  href="/#contact" 
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }), 
                    "w-full rounded-2xl py-6 text-lg bg-primary text-primary-foreground shadow-md"
                  )}
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
