'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ANIMATION_CONFIG } from "@/utils/animations"

export default function FeaturedJobsSection() {
  const prefersReducedMotion = useReducedMotion()
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" id="featured-jobs">
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
            Latest Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing job opportunities from top companies. These positions are actively hiring right now.
          </p>
        </motion.div>

        {/* Job Listings Carousel */}
        <motion.div
          className="max-w-7xl mx-auto overflow-hidden"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_CONFIG.ENTRANCE, delay: 0.3 }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          <div className="relative">
            <motion.div
              className="flex gap-6"
              animate={prefersReducedMotion ? {} : {
                x: isCarouselHovered ? undefined : [0, -2400]
              }}
              transition={{
                duration: 25,
                repeat: isCarouselHovered ? 0 : Infinity,
                ease: "linear"
              }}
              style={{ width: "calc(400px * 12)" }}
            >
              {/* Job Cards - Duplicated for infinite scroll */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6">
                  {[
                    {
                      title: "Senior Software Engineer",
                      company: "Google",
                      location: "San Francisco, CA",
                      salary: "$180k - $250k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/google.com",
                      bgColor: "from-blue-100 to-blue-200"
                    },
                    {
                      title: "Product Manager",
                      company: "Microsoft",
                      location: "Seattle, WA",
                      salary: "$160k - $220k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/microsoft.com",
                      bgColor: "from-green-100 to-green-200"
                    },
                    {
                      title: "UX Designer",
                      company: "Apple",
                      location: "Cupertino, CA",
                      salary: "$140k - $190k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/apple.com",
                      bgColor: "from-gray-100 to-gray-200"
                    },
                    {
                      title: "Data Scientist",
                      company: "Netflix",
                      location: "Los Gatos, CA",
                      salary: "$170k - $230k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/netflix.com",
                      bgColor: "from-red-100 to-red-200"
                    },
                    {
                      title: "Marketing Manager",
                      company: "Spotify",
                      location: "New York, NY",
                      salary: "$120k - $160k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/spotify.com",
                      bgColor: "from-green-100 to-green-200"
                    },
                    {
                      title: "DevOps Engineer",
                      company: "Amazon",
                      location: "Austin, TX",
                      salary: "$150k - $200k",
                      type: "Full-time",
                      logo: "https://logo.clearbit.com/amazon.com",
                      bgColor: "from-orange-100 to-orange-200"
                    }
                  ].map((job, index) => (
                    <motion.div
                      key={`${setIndex}-${index}`}
                      className="min-w-[380px] h-[280px] bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex flex-col"
                      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card Header - Fixed Height */}
                      <div className="flex items-start justify-between mb-4 min-h-[80px]">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`w-12 h-12 bg-gradient-to-br ${job.bgColor} rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0`}>
                            <img
                              src={job.logo}
                              alt={`${job.company} logo`}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                                const parent = target.parentElement
                                if (parent) {
                                  parent.innerHTML = `<div class="text-gray-700 font-bold text-lg">${job.company[0]}</div>`
                                }
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{job.title}</h3>
                            <p className="text-gray-600 font-medium text-sm">{job.company}</p>
                          </div>
                        </div>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 ml-2">
                          {job.type}
                        </span>
                      </div>

                      {/* Card Content - Flexible Space */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="space-y-3 mb-5">
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                            <span className="font-semibold text-gray-900 text-sm">{job.salary}</span>
                          </div>
                        </div>

                        {/* Button - Always at Bottom */}
                        <motion.button
                          className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg mt-auto"
                          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            See something you like? Don't wait - these opportunities won't last long!
          </p>
          <button className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            View All Jobs
          </button>
        </motion.div>
      </div>
    </section>
  )
}
