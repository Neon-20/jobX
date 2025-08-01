'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ANIMATION_CONFIG } from "@/utils/animations"
import { 
  User, 
  Briefcase, 
  Bookmark, 
  Bell, 
  TrendingUp, 
  MapPin, 
  Clock,
  ExternalLink 
} from "lucide-react"

// Sample user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  title: "Frontend Developer",
  location: "San Francisco, CA",
  profileCompletion: 85,
  appliedJobs: 12,
  savedJobs: 8,
  profileViews: 24
}

// Sample applied jobs
const appliedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    appliedDate: "2024-01-15",
    status: "Interview Scheduled",
    statusColor: "text-blue-600 bg-blue-100"
  },
  {
    id: "2", 
    title: "React Developer",
    company: "StartupXYZ",
    appliedDate: "2024-01-12",
    status: "Under Review",
    statusColor: "text-yellow-600 bg-yellow-100"
  },
  {
    id: "3",
    title: "Full Stack Engineer", 
    company: "WebSolutions",
    appliedDate: "2024-01-10",
    status: "Rejected",
    statusColor: "text-red-600 bg-red-100"
  }
]

export default function UserDashboard() {
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
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {userData.name}! 👋
        </h1>
        <p className="text-gray-600">
          Track your job applications and manage your career journey
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-to-br from-amber-200 to-amber-300 border-0 rounded-3xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-700 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-amber-900 font-semibold text-2xl">{userData.appliedJobs}</p>
                <p className="text-amber-800 text-sm">Applied Jobs</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-to-br from-emerald-200 to-emerald-300 border-0 rounded-3xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-700 rounded-xl flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-emerald-900 font-semibold text-2xl">{userData.savedJobs}</p>
                <p className="text-emerald-800 text-sm">Saved Jobs</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-to-br from-violet-200 to-violet-300 border-0 rounded-3xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-violet-700 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-violet-900 font-semibold text-2xl">{userData.profileViews}</p>
                <p className="text-violet-800 text-sm">Profile Views</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-to-br from-sky-200 to-sky-300 border-0 rounded-3xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-700 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sky-900 font-semibold text-2xl">{userData.profileCompletion}%</p>
                <p className="text-sky-800 text-sm">Profile Complete</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Applied Jobs */}
        <div className="lg:col-span-2">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                <Button variant="outline" size="sm" className="rounded-xl">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {appliedJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600 text-sm">{job.company}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-500 text-xs">
                          Applied {new Date(job.appliedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.statusColor}`}>
                        {job.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Profile & Quick Actions */}
        <div className="space-y-6">
          {/* Profile Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-amber-900" />
                </div>
                <h3 className="font-bold text-gray-900">{userData.name}</h3>
                <p className="text-gray-600 text-sm">{userData.title}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500 text-sm">{userData.location}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-amber-900 hover:bg-amber-800 text-white rounded-xl">
                  Edit Profile
                </Button>
                <Button variant="outline" className="w-full rounded-xl">
                  Download Resume
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start rounded-xl">
                  <Bell className="w-4 h-4 mr-3" />
                  Job Alerts
                </Button>
                <Button variant="ghost" className="w-full justify-start rounded-xl">
                  <Bookmark className="w-4 h-4 mr-3" />
                  Saved Jobs
                </Button>
                <Button variant="ghost" className="w-full justify-start rounded-xl">
                  <TrendingUp className="w-4 h-4 mr-3" />
                  Career Insights
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
