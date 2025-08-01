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
      {/* Falling Geometric Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large background circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-200/30 rounded-full blur-2xl"></div>

        {/* Randomly Moving Particles with Custom Keyframes */}
        <style jsx>{`
          @keyframes float1 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(30px, -20px) rotate(90deg); }
            50% { transform: translate(-20px, 30px) rotate(180deg); }
            75% { transform: translate(40px, 10px) rotate(270deg); }
            100% { transform: translate(0px, 0px) rotate(360deg); }
          }
          @keyframes float2 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            25% { transform: translate(-25px, 35px) rotate(-90deg); }
            50% { transform: translate(35px, -15px) rotate(-180deg); }
            75% { transform: translate(-15px, -25px) rotate(-270deg); }
            100% { transform: translate(0px, 0px) rotate(-360deg); }
          }
          @keyframes float3 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(20px, 25px) rotate(120deg); }
            66% { transform: translate(-30px, -10px) rotate(240deg); }
            100% { transform: translate(0px, 0px) rotate(360deg); }
          }
          @keyframes float4 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            20% { transform: translate(-35px, 20px) rotate(-72deg); }
            40% { transform: translate(15px, -30px) rotate(-144deg); }
            60% { transform: translate(25px, 25px) rotate(-216deg); }
            80% { transform: translate(-10px, -15px) rotate(-288deg); }
            100% { transform: translate(0px, 0px) rotate(-360deg); }
          }
          @keyframes float5 {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            50% { transform: translate(-40px, -30px) rotate(180deg); }
            100% { transform: translate(0px, 0px) rotate(360deg); }
          }
          .float1 { animation: float1 6s ease-in-out infinite; }
          .float2 { animation: float2 8s ease-in-out infinite; }
          .float3 { animation: float3 7s ease-in-out infinite; }
          .float4 { animation: float4 9s ease-in-out infinite; }
          .float5 { animation: float5 5s ease-in-out infinite; }
        `}</style>

        {/* Squares - Randomly positioned and moving */}
        <div className="absolute left-[7%] top-[20%] w-3 h-3 bg-amber-400/20 float1" style={{animationDelay: '0s'}}></div>
        <div className="absolute left-[23%] top-[60%] w-4 h-4 bg-orange-300/15 float2" style={{animationDelay: '2s'}}></div>
        <div className="absolute left-[41%] top-[35%] w-2 h-2 bg-amber-500/25 float3" style={{animationDelay: '4s'}}></div>
        <div className="absolute left-[67%] top-[75%] w-5 h-5 bg-orange-400/15 float4" style={{animationDelay: '1s'}}></div>
        <div className="absolute left-[84%] top-[15%] w-3 h-3 bg-amber-300/20 float5" style={{animationDelay: '3s'}}></div>
        <div className="absolute left-[15%] top-[80%] w-4 h-4 bg-orange-500/18 float1" style={{animationDelay: '5s'}}></div>
        <div className="absolute left-[92%] top-[45%] w-2 h-2 bg-amber-400/25 float2" style={{animationDelay: '1.5s'}}></div>

        {/* Circles - Randomly positioned and moving */}
        <div className="absolute left-[12%] top-[25%] w-4 h-4 bg-amber-400/18 rounded-full float3" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute left-[34%] top-[70%] w-3 h-3 bg-orange-300/20 rounded-full float4" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute left-[58%] top-[10%] w-5 h-5 bg-amber-500/15 rounded-full float5" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute left-[76%] top-[55%] w-2 h-2 bg-orange-400/25 rounded-full float1" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute left-[89%] top-[85%] w-4 h-4 bg-amber-300/18 rounded-full float2" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute left-[3%] top-[40%] w-3 h-3 bg-orange-500/20 rounded-full float3" style={{animationDelay: '6s'}}></div>
        <div className="absolute left-[45%] top-[90%] w-2 h-2 bg-amber-400/28 rounded-full float4" style={{animationDelay: '0.8s'}}></div>

        {/* Triangles - Randomly positioned and moving */}
        <div className="absolute left-[18%] top-[30%] w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-amber-400/20 float5" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute left-[52%] top-[65%] w-0 h-0 border-l-3 border-r-3 border-b-6 border-transparent border-b-orange-300/18 float1" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute left-[71%] top-[20%] w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-amber-500/25 float2" style={{animationDelay: '6.2s'}}></div>
        <div className="absolute left-[86%] top-[50%] w-0 h-0 border-l-3 border-r-3 border-b-6 border-transparent border-b-orange-400/15 float3" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute left-[9%] top-[75%] w-0 h-0 border-l-2 border-r-2 border-b-4 border-transparent border-b-amber-300/28 float4" style={{animationDelay: '3.2s'}}></div>

        {/* Hexagons - Randomly positioned and moving */}
        <div className="absolute left-[26%] top-[15%] w-4 h-4 bg-amber-400/18 float1" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3.8s'}}></div>
        <div className="absolute left-[63%] top-[85%] w-3 h-3 bg-orange-300/20 float2" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '5.8s'}}></div>
        <div className="absolute left-[81%] top-[35%] w-5 h-5 bg-amber-500/15 float3" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1.8s'}}></div>
        <div className="absolute left-[5%] top-[60%] w-3 h-3 bg-orange-400/25 float4" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '4.8s'}}></div>

        {/* Diamonds - Randomly positioned and moving */}
        <div className="absolute left-[37%] top-[25%] w-3 h-3 bg-amber-400/20 float5" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '2.7s'}}></div>
        <div className="absolute left-[54%] top-[45%] w-4 h-4 bg-orange-300/18 float1" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '4.7s'}}></div>
        <div className="absolute left-[73%] top-[80%] w-2 h-2 bg-amber-500/25 float2" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '6.7s'}}></div>
        <div className="absolute left-[91%] top-[10%] w-5 h-5 bg-orange-400/15 float3" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '0.7s'}}></div>
        <div className="absolute left-[14%] top-[55%] w-3 h-3 bg-amber-300/20 float4" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '5.7s'}}></div>
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
              Search from 5000+ jobs at top companies worldwide.
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
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">5K+</div>
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
