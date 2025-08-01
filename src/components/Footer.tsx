'use client'

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowUp
} from "lucide-react"

const footerSections = [
  {
    title: "For Job Seekers",
    links: [
      { name: "Browse Jobs", href: "#" },
      { name: "Career Advice", href: "#" },
      { name: "Resume Builder", href: "#" },
      { name: "Salary Guide", href: "#" },
      { name: "Interview Tips", href: "#" }
    ]
  },
  {
    title: "For Employers",
    links: [
      { name: "Post a Job", href: "#" },
      { name: "Find Candidates", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Employer Branding", href: "#" },
      { name: "Recruitment Solutions", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" }
    ]
  }
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-500" },
  { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-500" }
]

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold">Sparsh</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The world&apos;s most advanced job search platform. Connect with top employers,
              discover your dream job, and accelerate your career growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-gray-400" />
                <span>hello@sparsh.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-amber-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest job opportunities and career tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 text-white"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Sparsh. All rights reserved. Built with ❤️ for job seekers worldwide.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              <ArrowUp className="w-4 h-4 text-gray-400" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
