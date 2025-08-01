import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getOptimalAnimationSettings, shouldEnableAnimations } from './performance'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)

  // Set GSAP defaults for better performance
  gsap.defaults({
    ease: "power2.out",
    duration: 0.5
  })

  // Configure ScrollTrigger for better performance
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    ignoreMobileResize: true
  })
}

/**
 * Animation configuration constants following design best practices
 */
export const ANIMATION_CONFIG = {
  // Durations (in seconds)
  MICRO_INTERACTION: 0.2,
  QUICK: 0.3,
  MEDIUM: 0.5,
  ENTRANCE: 0.8,
  SLOW: 1.2,

  // Easing curves
  EASE_OUT: 'power2.out',
  EASE_IN_OUT: 'power2.inOut',
  EASE_BACK: 'back.out(1.7)',
  EASE_ELASTIC: 'elastic.out(1, 0.3)',

  // Stagger timing
  STAGGER_FAST: 0.1,
  STAGGER_MEDIUM: 0.15,
  STAGGER_SLOW: 0.2,
} as const

/**
 * Common animation presets
 */
export const ANIMATION_PRESETS = {
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: ANIMATION_CONFIG.ENTRANCE, ease: ANIMATION_CONFIG.EASE_OUT }
  },
  fadeInDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, duration: ANIMATION_CONFIG.ENTRANCE, ease: ANIMATION_CONFIG.EASE_OUT }
  },
  fadeInScale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: ANIMATION_CONFIG.ENTRANCE, ease: ANIMATION_CONFIG.EASE_BACK }
  },
  slideInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: ANIMATION_CONFIG.ENTRANCE, ease: ANIMATION_CONFIG.EASE_OUT }
  },
  slideInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: ANIMATION_CONFIG.ENTRANCE, ease: ANIMATION_CONFIG.EASE_OUT }
  }
} as const

/**
 * Create a staggered entrance animation timeline
 */
export function createStaggeredEntrance(
  elements: string | Element | Element[],
  preset: keyof typeof ANIMATION_PRESETS = 'fadeInUp',
  stagger: number = ANIMATION_CONFIG.STAGGER_MEDIUM
) {
  const tl = gsap.timeline()
  const animation = ANIMATION_PRESETS[preset]

  // Set initial state
  tl.set(elements, animation.from)
  
  // Animate to final state with stagger
  tl.to(elements, {
    ...animation.to,
    stagger
  })

  return tl
}

/**
 * Create a hover animation for interactive elements
 */
export function createHoverAnimation(
  element: string | Element,
  options: {
    scale?: number
    y?: number
    duration?: number
    ease?: string
  } = {}
) {
  const {
    scale = 1.02,
    y = -2,
    duration = ANIMATION_CONFIG.MICRO_INTERACTION,
    ease = ANIMATION_CONFIG.EASE_OUT
  } = options

  return {
    scale,
    y,
    duration,
    ease
  }
}

/**
 * Create a scroll-triggered animation
 */
export function createScrollAnimation(
  element: string | Element,
  animation: any,
  trigger?: string | Element
) {
  return gsap.fromTo(element, animation.from, {
    ...animation.to,
    scrollTrigger: {
      trigger: trigger || element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })
}

/**
 * Utility to safely animate with reduced motion support
 */
export function safeAnimate(
  prefersReducedMotion: boolean,
  animationFn: () => gsap.core.Timeline | gsap.core.Tween,
  fallbackFn?: () => void
) {
  if (prefersReducedMotion) {
    // For reduced motion, either run fallback or set immediate final state
    if (fallbackFn) {
      fallbackFn()
    }
    return null
  }
  
  return animationFn()
}
