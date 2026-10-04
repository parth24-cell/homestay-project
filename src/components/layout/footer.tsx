import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { navigationLinks } from "@/constants/navigation"
import { contactConfig } from "@/config/contact"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#111827] text-[#FAFAF9] overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70" />
      
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-3xl font-bold tracking-tight text-white">SRS Homestay</span>
            </Link>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xs font-sans">
              Experience premium, luxury living at Uttarahalli SRS Homestay & PG. A modern, minimal, and trustworthy space for a perfect stay in Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#9CA3AF] hover:text-secondary transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-lg text-white mb-6">Get In Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-5 text-sm text-[#9CA3AF]">
                <li className="flex items-start gap-4 group">
                  <div className="p-2 rounded-full bg-white/5 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="leading-relaxed pt-1">{contactConfig.address}</span>
                </li>
              </ul>
              <ul className="space-y-5 text-sm text-[#9CA3AF]">
                <li className="flex items-center gap-4 group">
                  <div className="p-2 rounded-full bg-white/5 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors duration-300 pt-1">
                    {contactConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 rounded-full bg-white/5 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href={`mailto:${contactConfig.email}`} className="hover:text-white transition-colors duration-300 pt-1">
                    {contactConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {currentYear} Uttarahalli SRS Homestay & PG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
