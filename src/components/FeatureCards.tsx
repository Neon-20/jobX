'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Link, FileText, Settings } from "lucide-react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ANIMATION_CONFIG } from "@/utils/animations"

export default function FeatureCards() {
  const prefersReducedMotion = useReducedMotion()
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : ANIMATION_CONFIG.ENTRANCE
      }
    }
  }

  return (
    <div
      className="grid grid-cols-3 grid-rows-2 gap-6 max-w-6xl mx-auto h-[500px]"
      role="region"
      aria-label="Feature cards"
    >
      {/* Row 1, Col 1: Drop a Link Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={prefersReducedMotion ? {} : {
          y: -4,
          scale: 1.02,
          transition: {
            duration: ANIMATION_CONFIG.MICRO_INTERACTION
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
        role="article"
        aria-labelledby="drop-link-title"
      >
        <Card className="p-6 bg-gradient-to-br from-amber-200 to-amber-300 border-0 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              className="w-5 h-5 bg-amber-700 rounded-full flex items-center justify-center"
              whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 0.5 }}
              aria-hidden="true"
            >
              <Link className="w-3 h-3 text-white" />
            </motion.div>
            <span
              id="drop-link-title"
              className="font-semibold text-amber-900 text-sm tracking-wide"
            >
              Find a Job
            </span>
          </div>
          <div className="space-y-4">
            {/* Apple-style input box */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-lg border border-amber-200/30"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              transition={{ duration: ANIMATION_CONFIG.MICRO_INTERACTION }}
            >
              <div className="w-6 h-6 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200/20">
                <Link className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <input
                type="text"
                placeholder="Search for Software Engineer"
                className="flex-1 bg-transparent text-sm text-amber-900 placeholder-amber-600 outline-none font-medium"
                readOnly
              />
            </motion.div>
            <Button
              onClick={() => console.log('Start searching clicked')}
              className="bg-amber-900 hover:bg-amber-800 text-white text-sm px-5 py-3 h-auto rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 w-full hover:scale-105 active:scale-95"
            >
              Start Searching
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Row 1, Col 2: Create New Avatar Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={prefersReducedMotion ? {} : {
          y: -4,
          scale: 1.02,
          transition: {
            duration: ANIMATION_CONFIG.MICRO_INTERACTION
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Card className="p-6 bg-gradient-to-br from-emerald-200 to-emerald-300 border-0 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-emerald-700 rounded-full flex items-center justify-center">
            <Plus className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-emerald-900 text-sm tracking-wide">Create Profile</span>
        </div>
        <div className="relative flex items-center justify-center h-full pt-2">
          {/* Central person image area - more realistic representation */}
          <div className="w-32 h-40 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 rounded-2xl relative overflow-hidden shadow-2xl border-4 border-white/30">
            {/* Realistic person representation */}
            <div className="absolute inset-0">
              {/* Hair */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-800 rounded-t-2xl"></div>
              {/* Face */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-300 rounded-full border-2 border-orange-400"></div>
              {/* Beard area */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-700 rounded-b-full"></div>
              {/* Body/shirt */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-orange-500 rounded-t-3xl"></div>
            </div>
          </div>

          {/* Avatar selection circles - Apple-style */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
            <div className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-emerald-200/40">
              <div className="w-5 h-5 bg-red-400 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-emerald-200/40">
              <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-emerald-200/40">
              <div className="w-5 h-5 bg-purple-400 rounded-full"></div>
            </div>
            <div className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center shadow-xl">
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </Card>
      </motion.div>

      {/* Row 1, Col 3: Use a Preset Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={prefersReducedMotion ? {} : {
          y: -4,
          scale: 1.02,
          transition: {
            duration: ANIMATION_CONFIG.MICRO_INTERACTION
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Card className="p-6 bg-gradient-to-br from-violet-200 to-violet-300 border-0 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-violet-700 rounded-full flex items-center justify-center">
            <Settings className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-violet-900 text-sm tracking-wide">Set Job Alerts</span>
        </div>
        <div className="space-y-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 shadow-lg border border-violet-200/30">
            <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center shadow-md">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-2.5 bg-violet-200 rounded-full w-full"></div>
              <div className="h-2.5 bg-violet-200 rounded-full w-3/4"></div>
            </div>
          </div>
        </div>
      </Card>
      </motion.div>

      {/* Row 2, Col 1: Use Template Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={prefersReducedMotion ? {} : {
          y: -4,
          scale: 1.02,
          transition: {
            duration: ANIMATION_CONFIG.MICRO_INTERACTION
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Card className="p-6 bg-gradient-to-br from-sky-200 to-sky-300 border-0 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-sky-700 rounded-full flex items-center justify-center">
            <FileText className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-sky-900 text-sm tracking-wide">Browse Companies</span>
        </div>
        <div className="relative pt-2">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 mb-2 shadow-lg border border-sky-200/30">
            <div className="w-full h-24 bg-sky-100 rounded-xl relative overflow-hidden">
              {/* Template preview elements - more refined */}
              <div className="absolute top-3 left-3 w-7 h-7 bg-red-400 rounded-full shadow-md"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-amber-900 rounded-full shadow-md"></div>
              {/* Content lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-1">
                <div className="w-12 h-1.5 bg-sky-200 rounded-full"></div>
                <div className="w-8 h-1.5 bg-sky-200 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Floating avatar - Apple-style */}
          <div className="absolute right-3 top-20 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border-2 border-sky-200/40">
            <div className="w-7 h-7 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </Card>
      </motion.div>

      {/* Row 2, Col 2 & 3: Connect Your Account Card (spans 2 columns) */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={prefersReducedMotion ? {} : {
          y: -4,
          scale: 1.02,
          transition: {
            duration: ANIMATION_CONFIG.MICRO_INTERACTION
          }
        }}
        viewport={{ once: true, margin: "-50px" }}
        className="col-span-2"
      >
        <Card className="p-6 bg-gradient-to-br from-amber-200 to-amber-300 border-0 relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              className="w-5 h-5 bg-amber-700 rounded-full flex items-center justify-center"
              whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Link className="w-3 h-3 text-white" />
            </motion.div>
            <span className="font-semibold text-amber-900 text-sm tracking-wide">Connect LinkedIn</span>
          </div>
          <div className="flex items-center justify-center h-full pt-4">
            <Button
              onClick={() => console.log('Connect LinkedIn clicked')}
              className="bg-amber-900 hover:bg-amber-800 text-white flex items-center justify-center gap-3 text-base py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Connect
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <Plus className="w-3 h-3 text-amber-900" />
              </div>
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
