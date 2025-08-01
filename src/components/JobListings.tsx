'use client'

import JobCard from "./JobCard"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ANIMATION_CONFIG } from "@/utils/animations"
import { useSearch } from "@/contexts/SearchContext"

// Sample job data - in real app this would come from API/database
const sampleJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: { min: 120, max: 160, currency: "$" },
    type: "Full-time",
    postedDate: "2024-01-15T10:00:00Z",
    description: "We're looking for a senior frontend developer to join our team and help build the next generation of web applications using React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    isRemote: true,
    isSaved: false
  },
  {
    id: "2", 
    title: "Product Marketing Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    salary: { min: 90, max: 130, currency: "$" },
    type: "Full-time",
    postedDate: "2024-01-14T14:30:00Z",
    description: "Join our marketing team to drive product adoption and growth. You'll work closely with product, sales, and engineering teams to bring innovative solutions to market.",
    skills: ["Marketing Strategy", "Product Management", "Analytics", "A/B Testing", "Content Marketing"],
    isRemote: false,
    isSaved: true
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX", 
    salary: { min: 110, max: 150, currency: "$" },
    type: "Full-time",
    postedDate: "2024-01-13T09:15:00Z",
    description: "Help us scale our infrastructure and improve deployment processes. Experience with AWS, Kubernetes, and CI/CD pipelines required.",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "Python"],
    isRemote: true,
    isSaved: false
  },
  {
    id: "4",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Los Angeles, CA",
    salary: { min: 80, max: 120, currency: "$" },
    type: "Full-time", 
    postedDate: "2024-01-12T16:45:00Z",
    description: "Create beautiful and intuitive user experiences for our mobile and web applications. Work with cross-functional teams to deliver pixel-perfect designs.",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems"],
    isRemote: false,
    isSaved: false
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataCorp",
    location: "Seattle, WA",
    salary: { min: 130, max: 180, currency: "$" },
    type: "Full-time",
    postedDate: "2024-01-11T11:20:00Z", 
    description: "Analyze large datasets to derive actionable insights and build machine learning models. Experience with Python, SQL, and statistical analysis required.",
    skills: ["Python", "SQL", "Machine Learning", "Statistics", "Pandas", "Scikit-learn"],
    isRemote: true,
    isSaved: false
  },
  {
    id: "6",
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Remote",
    salary: { min: 100, max: 140, currency: "$" },
    type: "Contract",
    postedDate: "2024-01-10T13:00:00Z",
    description: "Build and maintain web applications using modern technologies. Work on both frontend and backend development in a fast-paced environment.",
    skills: ["React", "Node.js", "PostgreSQL", "Express", "MongoDB", "JavaScript"],
    isRemote: true,
    isSaved: true
  }
]

export default function JobListings() {
  const prefersReducedMotion = useReducedMotion()
  const { searchQuery, filters } = useSearch()

  // Filter jobs based on search query and filters
  const filteredJobs = sampleJobs.filter(job => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch = 
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.skills.some(skill => skill.toLowerCase().includes(query))
      
      if (!matchesSearch) return false
    }

    if (filters?.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }

    if (filters?.jobType && job.type !== filters.jobType) {
      return false
    }

    if (filters?.isRemote !== undefined && job.isRemote !== filters.isRemote) {
      return false
    }

    if (filters?.salaryRange) {
      const [minSalary, maxSalary] = filters.salaryRange
      if (job.salary && (job.salary.min < minSalary || job.salary.max > maxSalary)) {
        return false
      }
    }

    return true
  })

  const handleSaveJob = (jobId: string) => {
    console.log('Save job:', jobId)
    // In real app, this would update the job's saved status in the database
  }

  const handleApplyJob = (jobId: string) => {
    console.log('Apply to job:', jobId)
    // In real app, this would redirect to application page or external site
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : ANIMATION_CONFIG.STAGGER_MEDIUM
      }
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-12" data-section="job-listings">
      {/* Results header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {searchQuery ? `Jobs matching "${searchQuery}"` : 'Latest Job Opportunities'}
        </h2>
        <p className="text-gray-600">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
        </p>
      </div>

      {/* Job listings grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={handleSaveJob}
            onApply={handleApplyJob}
          />
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-gray-400 text-2xl">🔍</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search criteria or browse all available positions.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-amber-900 text-white rounded-xl font-semibold hover:bg-amber-800 transition-colors"
          >
            View All Jobs
          </button>
        </div>
      )}

      {/* Load more button */}
      {filteredJobs.length > 0 && (
        <div className="text-center mt-12">
          <button
            onClick={() => console.log('Load more jobs clicked')}
            className="px-8 py-3 border-2 border-amber-900 text-amber-900 rounded-xl font-semibold hover:bg-amber-900 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Load More Jobs
          </button>
        </div>
      )}
    </div>
  )
}
