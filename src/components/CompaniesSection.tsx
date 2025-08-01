'use client'

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
  { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
  { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" }
]

const companyTypes = [
  {
    title: "Tech Giants",
    description: "FAANG and other leading technology companies",
    count: "500+"
  },
  {
    title: "Startups",
    description: "Fast-growing companies with exciting opportunities",
    count: "1,200+"
  },
  {
    title: "Fortune 500",
    description: "Established enterprises across all industries",
    count: "800+"
  }
]

export default function CompaniesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-transparent" id="companies">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Top Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with leading employers across industries who are actively hiring talented professionals like you.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          className="mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = `<div class="text-gray-600 font-semibold text-sm">${company.name}</div>`
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {companyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900 mb-2">{type.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your Next Opportunity Awaits
            </h3>
            <p className="text-amber-100 mb-6 text-lg max-w-2xl mx-auto">
              Don&apos;t wait for the perfect job to find you. Take control of your career and discover opportunities at companies that value your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:bg-amber-50">
                Browse Jobs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-900 transition-all duration-200">
                Upload Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
