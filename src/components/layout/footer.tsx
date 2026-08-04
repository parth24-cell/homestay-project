import Link from "next/link"
import { MapPin, Phone, Mail, Camera, Users } from "lucide-react"
import { navigationLinks } from "@/constants/navigation"
import { contactConfig } from "@/config/contact"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <span className="font-heading text-2xl font-bold">SRS Homestay</span>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-xs">
              Experience premium, luxury living at Uttarahalli SRS Homestay & PG. A modern, minimal, and trustworthy space for a perfect stay in Bangalore.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={contactConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href={contactConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {navigationLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span>{contactConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <a href={`mailto:${contactConfig.email}`} className="hover:text-white transition-colors">
                  {contactConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} Uttarahalli SRS Homestay & PG. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
