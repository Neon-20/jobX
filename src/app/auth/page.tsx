'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from '@/contexts/AuthContext'
import { Eye, EyeOff, Loader2, ArrowLeft, CheckCircle, Github, User } from 'lucide-react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  
  const { signIn, signUp } = useAuth()
  const router = useRouter()

  const handleGoogleAuth = async () => {
    setIsLoading(true)
    try {
      // For now, simulate Google auth - replace with actual implementation
      setError('Google authentication will be implemented with Supabase setup')
    } catch (error) {
      setError('Google authentication failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGithubAuth = async () => {
    setIsLoading(true)
    try {
      // For now, simulate GitHub auth - replace with actual implementation
      setError('GitHub authentication will be implemented with Supabase setup')
    } catch (error) {
      setError('GitHub authentication failed')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuestLogin = () => {
    setIsLoading(true)
    // Simulate guest login - redirect to home after short delay
    setTimeout(() => {
      setIsLoading(false)
      router.push('/')
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      if (isLogin) {
        // Handle Login
        const { error } = await signIn(email, password)
        
        if (error) {
          if (error.message.includes('Supabase is not configured')) {
            setError('Demo Mode: Authentication is not configured yet. Please set up Supabase to enable real authentication.')
          } else {
            setError(error.message)
          }
        } else {
          // Success - redirect to home
          router.push('/')
        }
      } else {
        // Handle Signup
        if (password !== confirmPassword) {
          setError('Passwords do not match')
          return
        }

        const { error } = await signUp(email, password, { name })
        
        if (error) {
          if (error.message.includes('Supabase is not configured')) {
            setError('Demo Mode: Authentication is not configured yet. Please set up Supabase to enable real authentication.')
          } else {
            setError(error.message)
          }
        } else {
          // Success - show confirmation message
          setShowSuccess(true)
        }
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setName('')
    setError('')
    setShowSuccess(false)
  }

  const switchMode = () => {
    setIsLogin(!isLogin)
    resetForm()
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h2>
              <p className="text-gray-600 mb-6">
                We've sent you a confirmation link at <strong>{email}</strong>. 
                Please check your email and click the link to activate your account.
              </p>
              <Button 
                onClick={() => router.push('/')}
                className="bg-amber-900 hover:bg-amber-800"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <Button
          variant="ghost"
          onClick={() => router.push('/')}
          className="mb-6 text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-amber-900">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? 'Choose your preferred way to sign in'
                : 'Choose your preferred way to get started'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {isLogin ? (
              // Login Options - Same as Signup
              <div className="space-y-4">
                {/* Social Authentication Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleGoogleAuth}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3 py-6 border-2 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign in with Google
                  </Button>

                  <Button
                    onClick={handleGithubAuth}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3 py-6 border-2 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <Github className="w-5 h-5" />
                    Sign in with GitHub
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>

                {/* Guest Login */}
                <Button
                  onClick={handleGuestLogin}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 py-6 border-2 border-amber-200 text-amber-800 hover:bg-amber-50 hover:border-amber-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                  Continue as Guest
                </Button>

                {error && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}
              </div>
            ) : (
              // Signup Options
              <div className="space-y-4">
                {/* Social Authentication Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleGoogleAuth}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3 py-6 border-2 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </Button>

                  <Button
                    onClick={handleGithubAuth}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-3 py-6 border-2 hover:bg-gray-50"
                    disabled={isLoading}
                  >
                    <Github className="w-5 h-5" />
                    Continue with GitHub
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or</span>
                  </div>
                </div>

                {/* Guest Login */}
                <Button
                  onClick={handleGuestLogin}
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 py-6 border-2 border-amber-200 text-amber-800 hover:bg-amber-50 hover:border-amber-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                  Continue as Guest
                </Button>

                {error && (
                  <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}
              </div>
            )}

            <div className="text-center text-sm text-gray-600 mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <Button
                variant="link"
                className="p-0 h-auto text-amber-700 hover:text-amber-800"
                onClick={switchMode}
                disabled={isLoading}
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
