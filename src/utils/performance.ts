/**
 * Performance optimization utilities for animations
 */

/**
 * Check if the device has reduced performance capabilities
 */
export function isLowPerformanceDevice(): boolean {
  if (typeof window === 'undefined') return false

  // Check for low-end devices based on various indicators
  const navigator = window.navigator as any
  
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4
  if (cores <= 2) return true

  // Check device memory (if available)
  if (navigator.deviceMemory && navigator.deviceMemory <= 2) return true

  // Check connection type for mobile devices
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection) {
    const slowConnections = ['slow-2g', '2g', '3g']
    if (slowConnections.includes(connection.effectiveType)) return true
  }

  // Check user agent for known low-performance devices
  const userAgent = navigator.userAgent.toLowerCase()
  const lowEndDevices = [
    'android 4',
    'android 5',
    'iphone os 9',
    'iphone os 10'
  ]
  
  return lowEndDevices.some(device => userAgent.includes(device))
}

/**
 * Get optimal animation settings based on device capabilities
 */
export function getOptimalAnimationSettings() {
  const isLowPerf = isLowPerformanceDevice()
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return {
    enableAnimations: !prefersReducedMotion && !isLowPerf,
    reducedAnimations: isLowPerf,
    duration: isLowPerf ? 0.2 : 0.5,
    stagger: isLowPerf ? 0.05 : 0.15,
    enableParallax: !isLowPerf,
    enableComplexAnimations: !isLowPerf && !prefersReducedMotion
  }
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Request animation frame with fallback
 */
export const requestAnimationFrame = 
  typeof window !== 'undefined' 
    ? window.requestAnimationFrame || 
      ((callback: FrameRequestCallback) => setTimeout(callback, 16))
    : (callback: FrameRequestCallback) => setTimeout(callback, 16)

/**
 * Cancel animation frame with fallback
 */
export const cancelAnimationFrame = 
  typeof window !== 'undefined'
    ? window.cancelAnimationFrame || clearTimeout
    : clearTimeout

/**
 * Check if animations should be enabled based on various factors
 */
export function shouldEnableAnimations(): boolean {
  if (typeof window === 'undefined') return false

  const settings = getOptimalAnimationSettings()
  return settings.enableAnimations
}

/**
 * Performance monitoring for animations
 */
export class AnimationPerformanceMonitor {
  private frameCount = 0
  private lastTime = 0
  private fps = 0
  private isMonitoring = false

  start() {
    if (this.isMonitoring) return
    this.isMonitoring = true
    this.lastTime = performance.now()
    this.frameCount = 0
    this.measureFPS()
  }

  stop() {
    this.isMonitoring = false
  }

  getFPS(): number {
    return this.fps
  }

  private measureFPS() {
    if (!this.isMonitoring) return

    const currentTime = performance.now()
    this.frameCount++

    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime))
      this.frameCount = 0
      this.lastTime = currentTime

      // Log performance warnings
      if (this.fps < 30) {
        console.warn(`Low FPS detected: ${this.fps}fps. Consider reducing animation complexity.`)
      }
    }

    requestAnimationFrame(() => this.measureFPS())
  }
}
