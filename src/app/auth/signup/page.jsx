'use client'

import { useState, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function SignUpContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (!email || !password) {
      setError('Email and password are required.')
      setLoading(false)
      return
    }

    // Demo: Show success message (no real authentication)
    setTimeout(() => {
      setMessage('Demo: Account created successfully! (This is a demo - no real authentication)')
      setLoading(false)
    }, 1000)
  }

  const handleGoogleSignUp = async () => {
    setError('')
    setMessage('Demo: Google sign-up would work here (This is a demo)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-black">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-4 text-left">
              <Link href="/" legacyBehavior>
                <a className="text-xs text-white hover:text-blue-300 hover:underline mb-4 inline-block">
                  &larr; Back to Home
                </a>
              </Link>
            </div>
            <div className="mb-4 text-left">
              <Image 
                src="/WebsiteAssets/logo3.png" 
                alt="DefiBullz Logo" 
                width={250} 
                height={90} 
              />
            </div>

            <h1 className="text-xl font-bold mb-8 text-white">Sign Up to DefiBullz - <span className="text-[#4ED634]">AI Trade Journal</span></h1>
            
            {/* Demo Notice */}
            <div className="bg-blue-900/50 border border-blue-500 text-blue-300 px-4 py-3 rounded mb-4 text-sm">
              🎯 <strong>Demo Mode:</strong> This is a website showcase - authentication is not functional.
            </div>
            
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded mb-4 text-sm">
                {error}
              </div>
            )}
            
            {message && (
              <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded mb-4 text-sm">
                {message}
              </div>
            )}
            
            <form onSubmit={handleSignUp} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                  E-mail
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    📧 
                  </span>
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-xs font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none text-sm"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#4ED634] text-black py-3 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-400 transition duration-150 ease-in-out font-semibold"
              >
                {loading ? 'Signing Up...' : 'Sign Up (Demo)'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-400 mb-4">or sign up with</p>
              <div className="flex justify-center space-x-3 mb-8">
                <button className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-800 text-xl text-gray-300">F</button>
                <button 
                  onClick={handleGoogleSignUp}
                  disabled={loading}
                  className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-800 text-xl text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  title="Sign up with Google (Demo)"
                >
                  G
                </button>
                <button className="w-12 h-12 border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-800 text-xl text-gray-300">A</button>
              </div>

              <p className="text-sm text-gray-300">
                Already have an account?{' '}
                <a 
                  href="/auth/signin" 
                  className="font-semibold text-[#4ED634] hover:text-blue-300 hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 relative">
          <Image
            src="/WebsiteAssets/login_bg.jpg"
            alt="Background image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default function SignUpPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">Loading page...</div>}> 
      <SignUpContent />
    </Suspense>
  )
}