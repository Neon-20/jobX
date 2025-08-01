'use client'

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react"

const benefits = [
  {
    icon: CheckCircle,
    text: "Free to join and use"
  },
  {
    icon: Clock,
    text: "Setup takes less than 2 minutes"
  },
  {
    icon: Shield,
    text: "Your privacy is protected"
  }
]

export default function CTASection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Dream Job?
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join over 100,000 professionals who&apos;ve transformed their careers.
            Your perfect job match is just one click away.
          </p>

          {/* Benefits List */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center gap-2 text-amber-100"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <benefit.icon className="w-5 h-5 text-amber-10" />
                <span className="text-sm md:text-base">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="group bg-white text-amber-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-amber-50 flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 text-amber-900" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-900 transition-all duration-300 hover:scale-105">
              Browse Jobs First
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-amber-200 text-sm">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2.5K+</div>
              <div className="text-amber-200 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-amber-200 text-sm">Success Rate</div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="mt-12 pt-8 border-t border-amber-700"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-200 text-sm md:text-base">
              🚀 <strong>Limited Time:</strong> Join now and get priority access to exclusive job opportunities from our partner companies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
