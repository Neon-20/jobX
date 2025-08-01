'use client'

import { Code, Users, BarChart3, Palette, Megaphone } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { safeAnimate, ANIMATION_CONFIG } from "@/utils/animations"
import { useSearch } from "@/contexts/SearchContext"

export default function HeroSection() {

  const prefersReducedMotion = useReducedMotion()
  const { setSearchQuery } = useSearch()
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)


  useEffect(() => {
    if (!heroRef.current) return

    // Create entrance animation timeline
    const tl = gsap.timeline({ delay: 0.2 })

    // Set initial states
    gsap.set([titleRef.current], {
      opacity: 0,
      y: 30
    })

    // Animate elements with stagger
    safeAnimate(
      prefersReducedMotion,
      () => {
        tl.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: ANIMATION_CONFIG.ENTRANCE,
          ease: ANIMATION_CONFIG.EASE_OUT
        })

        return tl
      },
      () => {
        // Fallback for reduced motion - show everything immediately
        gsap.set([titleRef.current], {
          opacity: 1,
          y: 0
        })
      }
    )

    return () => {
      tl.kill()
    }
  }, [prefersReducedMotion])

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-32 pb-24 relative overflow-hidden"
      aria-label="Hero section"
      data-section="hero"
    >
      {/* Subtle Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large circle - top right */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        {/* Medium circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-200/30 rounded-full blur-2xl"></div>
        {/* Small geometric shapes */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-amber-300/40 rotate-45 rounded-sm"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-orange-300/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-amber-400/50 rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-orange-200/40 rotate-45"></div>
      </div>



      <div className="max-w-6xl mx-auto px-8">
        {/* Hero Content - Moved text up a bit */}
        <div className="text-center pt-5 mb-20">
          <div className="mb-12">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-8 leading-tight tracking-tight"
              style={{ fontFamily: '"Inter", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
              aria-label="Main heading: Land your dream role faster than ever"
            >
              Land Your <span className="relative inline-block">
                Dream Role
                <svg
                  className="absolute -bottom-1 left-0 w-full h-6"
                  viewBox="0 0 200 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20 Q100 2 195 20"
                    stroke="#92400e"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span><br />
              Faster Than Ever
            </h1>
            <p className="text-center text-lg md:text-xl text-amber-800 font-medium mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who found their perfect career match.
              Search from 50,000+ jobs at top companies worldwide.
            </p>
          </div>



          {/* Primary CTA Button */}
          <motion.div
            className="mb-12"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            >
              Start Job Search
            </motion.button>
          </motion.div>

          {/* Live Stats Counter */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">2.5K+</div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </motion.div>

          {/* Trending Categories */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
            <span className="text-sm text-amber-100 font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-1 rounded-full animate-pulse"></div>
              Trending:
            </span>
            {[
              { name: 'Software Engineer', icon: Code },
              { name: 'Product Manager', icon: Users },
              { name: 'Data Scientist', icon: BarChart3 },
              { name: 'UX Designer', icon: Palette },
              { name: 'Marketing Manager', icon: Megaphone }
            ].map((category) => (
              <motion.button
                key={category.name}
                className="group flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-amber-300 text-gray-800 text-sm rounded-full transition-all duration-200 hover:shadow-sm"
                onClick={() => setSearchQuery(category.name)}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <div className="w-4 h-4 bg-amber-700 rounded-full flex items-center justify-center shadow-sm">
                  <category.icon className="w-2.5 h-2.5 text-white" style={{ filter: 'drop-shadow(0 0 0.5px white)' }} />
                </div>
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>




        </div>


      </div>
    </section>
  )
}
