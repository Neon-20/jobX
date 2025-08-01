'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/contexts/AuthContext'
import LoginModal from './auth/LoginModal'
import SignupModal from './auth/SignupModal'
import UserProfile from './auth/UserProfile'

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { user, loading } = useAuth()

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const handleSignup = () => {
    setShowSignupModal(true)
  }



  const switchToSignup = () => {
    setShowLoginModal(false)
    setShowSignupModal(true)
  }

  const switchToLogin = () => {
    setShowSignupModal(false)
    setShowLoginModal(true)
  }

  return (
    <header className="w-full px-6 py-6 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl text-amber-900 tracking-wide font-belleza font-bold">
            JobX
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Find Jobs</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Companies</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Post a Job</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Career Advice</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Dashboard</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            // Authenticated user
            <UserProfile />
          ) : (
            // Unauthenticated user
            <>
              <Button
                variant="ghost"
                className="text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
                onClick={handleLogin}
                disabled={loading}
              >
                Log In
              </Button>
              <Button
                className="bg-amber-900 hover:bg-amber-800 text-white px-6 shadow-lg"
                onClick={handleSignup}
                disabled={loading}
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Auth Modals */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={switchToSignup}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={switchToLogin}
      />
    </header>
  )
}
