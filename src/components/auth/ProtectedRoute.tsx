'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Loader2, Lock } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  requireAuth?: boolean
}

export default function ProtectedRoute({ 
  children, 
  fallback,
  requireAuth = true 
}: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)

  useEffect(() => {
    if (!loading && requireAuth && !user) {
      setShowLoginPrompt(true)
    } else {
      setShowLoginPrompt(false)
    }
  }, [user, loading, requireAuth])

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
      </div>
    )
  }

  // Show login prompt if authentication is required but user is not logged in
  if (showLoginPrompt) {
    if (fallback) {
      return <>{fallback}</>
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
        <div className="bg-amber-100 rounded-full p-4 mb-4">
          <Lock className="h-8 w-8 text-amber-600" />
        </div>
        <h2 className="text-2xl font-bold text-amber-900 mb-2">
          Authentication Required
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Please sign in to access this feature and continue your job search journey.
        </p>
        <Button 
          className="bg-amber-900 hover:bg-amber-800"
          onClick={() => {
            // This would trigger the login modal
            // For now, we'll just show an alert
            alert('Please use the login button in the header to sign in')
          }}
        >
          Sign In to Continue
        </Button>
      </div>
    )
  }

  // User is authenticated or authentication is not required
  return <>{children}</>
}
