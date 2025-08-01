'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "I found my dream job at Google within 2 weeks! The AI matching was incredibly accurate, and the salary insights helped me negotiate a 30% increase.",
    rating: 5,
    salary: "$180k → $234k"
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The platform's application tracking feature was a game-changer. I could manage 15+ applications effortlessly and never missed a follow-up.",
    rating: 5,
    salary: "Hired in 10 days"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Airbnb",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "As a career changer, I was nervous about finding the right role. The platform matched me with companies that valued my unique background.",
    rating: 5,
    salary: "Career Change Success"
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The job alerts were so precise that I only applied to 3 positions and got offers from all of them. Quality over quantity approach really works!",
    rating: 5,
    salary: "3/3 Offers"
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "The privacy features gave me confidence to job search while employed. I could control exactly who saw my profile and when.",
    rating: 5,
    salary: "Confidential Search"
  },
  {
    name: "Alex Patel",
    role: "DevOps Engineer",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The one-click apply feature saved me hours. I could apply to multiple relevant positions quickly while maintaining quality applications.",
    rating: 5,
    salary: "Time Saver"
  }
]

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-20 bg-transparent" id="testimonials">
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our users say about their job search experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-gray-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-amber-700">{testimonial.company}</p>
                  </div>
                </div>

                {/* Success Metric */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {testimonial.salary}
                  </div>
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
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of professionals who&apos;ve transformed their careers with our platform.
            </p>
            <button className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
