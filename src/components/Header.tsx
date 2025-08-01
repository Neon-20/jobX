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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-amber-900">Clickity</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Home</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Create New</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Projects</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">Channels</a>
          <a href="#" className="text-amber-800 hover:text-amber-900 font-medium transition-colors">My Account</a>
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
