'use client'

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { Briefcase, Building2, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Briefcase,
    number: "50,000+",
    label: "Active Job Listings",
    description: "New opportunities added daily"
  },
  {
    icon: Building2,
    number: "2,500+",
    label: "Partner Companies",
    description: "From startups to Fortune 500"
  },
  {
    icon: Users,
    number: "100,000+",
    label: "Job Seekers",
    description: "Professionals trust our platform"
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Success Rate",
    description: "Users find jobs within 30 days"
  }
]

export default function StatsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 100% 60% at 0% 100%, #78350f 0%, transparent 50%),
          radial-gradient(ellipse 100% 60% at 100% 100%, #78350f 0%, transparent 50%),
          radial-gradient(ellipse 80% 40% at 50% 100%, #92400e 0%, transparent 70%),
          linear-gradient(to top, #451a03, #92400e)
        `
      }}
    >
      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Join the fastest-growing job platform that&apos;s helping professionals worldwide find their perfect career match.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }} />
                </div>
              </div>
              
              {/* Number */}
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2"
                initial={prefersReducedMotion ? {} : { scale: 0.5 }}
                whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-amber-100">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-amber-200 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-amber-100 mb-6 text-lg">
              Don&apos;t let your dream job slip away. Start your journey today and become part of our growing community of successful professionals.
            </p>
            <button className="bg-white text-amber-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:bg-amber-50">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
