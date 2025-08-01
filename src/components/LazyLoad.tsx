'use client'

import { ReactNode, useState, useEffect } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface LazyLoadProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

/** 
 * LazyLoad component that renders children only when they come into view
 * Useful for performance optimization of heavy content
 */
export default function LazyLoad({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = '50px',
  className = ''
}: LazyLoadProps) {
  const [hasLoaded, setHasLoaded] = useState(false)
  const { elementRef, isIntersecting, hasTriggered } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  // Load content when it comes into view
  useEffect(() => {
    if (hasTriggered && !hasLoaded) {
      setHasLoaded(true)
    }
  }, [hasTriggered, hasLoaded])

  return (
    <div ref={elementRef} className={className}>
      {hasLoaded ? children : fallback}
    </div>
  )
}

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  placeholder?: string
  threshold?: number
  rootMargin?: string
}

/** 
 * LazyImage component with built-in loading states
 */
export function LazyImage({
  src,
  alt,
  className = '',
  width,
  height,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { elementRef, hasTriggered } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true
  })

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  useEffect(() => {
    if (hasTriggered) {
      setIsLoaded(true)
    }
  }, [hasTriggered])

  return (
    <div ref={elementRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm"
          width={width}
          height={height}
        />
      )}
      
      {/* Actual image */}
      {hasTriggered && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          width={width}
          
          height={height}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
      
      {/* Loading indicator */}
      {hasTriggered && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
