'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, DollarSign, Target, Clock, Shield, Zap } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our smart algorithm matches you with jobs that fit your skills, experience, and career goals perfectly."
  },
  {
    icon: DollarSign,
    title: "Salary Insights",
    description: "Get real-time salary data and compensation insights to negotiate better offers and know your worth."
  },
  {
    icon: Target,
    title: "Precision Search",
    description: "Advanced filters help you find exactly what you're looking for - location, salary, company size, and more."
  },
  {
    icon: Clock,
    title: "Application Tracking",
    description: "Keep track of all your applications in one place with status updates and interview scheduling."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your profile is private by default. You control who sees your information and when."
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Get notified immediately when new jobs matching your criteria are posted by top companies."
  }
]

export default function FeaturesSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-transparent" id="features">
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
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve built the most advanced job search platform to help you land your dream job faster than ever before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-t from-orange-100 to-white-100">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-700 flex items-center justify-center mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" style={{ filter: 'drop-shadow(0 0 1px white)' }} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the future of job searching?
          </p>
          <button className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            Start Your Job Search
          </button>
        </motion.div>
      </div>
    </section>
  )
}
