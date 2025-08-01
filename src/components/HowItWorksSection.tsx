'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { UserPlus, Search, Heart, Send, Calendar, Trophy } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up in 30 seconds and build your professional profile with skills, experience, and preferences."
  },
  {
    step: 2,
    icon: Search,
    title: "Discover Perfect Jobs",
    description: "Use our AI-powered search to find jobs that match your skills, salary expectations, and career goals."
  },
  {
    step: 3,
    icon: Heart,
    title: "Save & Compare",
    description: "Save interesting positions, compare offers, and get salary insights to make informed decisions."
  },
  {
    step: 4,
    icon: Send,
    title: "Apply with One Click",
    description: "Apply to multiple jobs instantly with your saved profile and customized cover letters."
  },
  {
    step: 5,
    icon: Calendar,
    title: "Track Applications",
    description: "Monitor your application status, schedule interviews, and manage your job search pipeline."
  },
  {
    step: 6,
    icon: Trophy,
    title: "Land Your Dream Job",
    description: "Get hired at top companies and start your new career journey with confidence and success."
  }
]

export default function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-transparent" id="how-it-works">
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
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From profile creation to landing your dream job - we&apos;ve made the entire process simple and efficient.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden">
                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-600">{step.step}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-700 flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" style={{ filter: 'drop-shadow(0 0 1px white)' }} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line (for larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-10" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stats */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">2.5x</div>
              <div className="text-gray-600">Faster Job Discovery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">89%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">14 Days</div>
              <div className="text-gray-600">Average Time to Hire</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
