'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, DollarSign, Bookmark, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ANIMATION_CONFIG } from "@/utils/animations"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: string
    location: string
    salary?: {
      min: number
      max: number
      currency: string
    }
    type: string // "Full-time", "Part-time", "Contract", "Remote"
    postedDate: string
    description: string
    skills: string[]
    companyLogo?: string
    isRemote?: boolean
    isSaved?: boolean
  }
  onSave?: (jobId: string) => void
  onApply?: (jobId: string) => void
}

export default function JobCard({ job, onSave, onApply }: JobCardProps) {
  const prefersReducedMotion = useReducedMotion()

  const formatSalary = (salary: { min: number; max: number; currency: string }) => {
    const formatNumber = (num: number) => {
      if (num >= 1000) {
        return `${(num / 1000).toFixed(0)}k`
      }
      return num.toString()
    }
    
    return `${salary.currency}${formatNumber(salary.min)} - ${salary.currency}${formatNumber(salary.max)}`
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    } else {
      const diffInDays = Math.floor(diffInHours / 24)
      return `${diffInDays}d ago`
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={prefersReducedMotion ? {} : {
        y: -4,
        scale: 1.02,
        transition: {
          duration: ANIMATION_CONFIG.MICRO_INTERACTION
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: ANIMATION_CONFIG.ENTRANCE }}
    >
      <Card className="p-6 bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Header with company info and salary */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {job.companyLogo ? (
              <img 
                src={job.companyLogo} 
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-xl object-cover border border-gray-200"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl flex items-center justify-center">
                <span className="text-amber-900 font-bold text-lg">
                  {job.company.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                {job.company}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {getTimeAgo(job.postedDate)}
              </div>
            </div>
          </div>
          
          {job.salary && (
            <div className="flex items-center gap-1 text-emerald-600 font-semibold">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm">{formatSalary(job.salary)}</span>
            </div>
          )}
        </div>

        {/* Job title */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {job.title}
        </h2>

        {/* Location and job type */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
            {job.type}
          </span>
          {job.isRemote && (
            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
              Remote
            </span>
          )}
        </div>

        {/* Job description preview */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {job.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {job.skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
              +{job.skills.length - 4} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => onApply?.(job.id)}
            className="flex-1 bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => onSave?.(job.id)}
            className={`rounded-xl border-2 transition-all duration-200 hover:scale-110 active:scale-90 ${
              job.isSaved
                ? 'bg-amber-100 border-amber-300 text-amber-700 hover:bg-amber-200'
                : 'border-gray-300 text-gray-600 hover:border-amber-300 hover:text-amber-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${job.isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
