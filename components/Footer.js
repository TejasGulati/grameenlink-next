'use client'

import Link from 'next/link'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, url: "https://github.com", label: "GitHub" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:contact@grameenlink.com", label: "Email" }
  ]

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "Blockchain", href: "/blockchain" },
        { name: "Drone Network", href: "/drone" },
        { name: "Smart Inventory", href: "/inventory" },
        { name: "Mobile Retail", href: "/mobile-retail" },
        { name: "Solar Kiosks", href: "/kiosks" },
        { name: "Sustainability", href: "/sustainability" }
      ]
    },
    {
      title: "Platform",
      links: [
        { name: "Technology", href: "/technology" },
        { name: "Documentation", href: "/#" }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">GrameenLink</h3>
            <p className="text-gray-400 text-sm mb-4">
              Building smart, sustainable supply chain solutions for rural India through AI, blockchain, and autonomous logistics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, index) => (
            <div key={index} className="mt-6 md:mt-0">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}