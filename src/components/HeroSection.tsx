'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useSearch } from '@/contexts/SearchContext'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const { setSearchQuery } = useSearch()

  const [role, setRole] = useState('')
  const [location, setLocation] = useState('')

  const trending = ['Software Engineer', 'Product Manager', 'Data Scientist', 'UX Designer']

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const q = [role.trim(), location.trim()].filter(Boolean).join(' ')
    setSearchQuery(q)
  }

  const containerAnim = prefersReducedMotion
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }

  return (
    <section
      aria-label="Hero section"
      data-section="hero"
      className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-28 pb-20"
    >
      {/* Subtle decorative blobs (no complex animations) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-orange-200/40 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy + form */}
          <motion.div {...containerAnim}>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Find your next role faster
            </h1>
            <p className="mt-4 max-w-2xl text-base text-stone-700 sm:text-lg">
              Search 5,000+ roles at top companies worldwide.
            </p>

            {/* Search Panel */}
            <form onSubmit={onSubmit} className="mt-8" aria-label="Job search">
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-3 shadow-lg backdrop-blur">
                <div className="flex flex-col gap-3 md:flex-row">
                  <div className="flex-1">
                    <label htmlFor="role" className="sr-only">
                      Job title or keywords
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Job title or keywords"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 placeholder-stone-400 outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      aria-label="Job title or keywords"
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="location" className="sr-only">
                      Location (optional)
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location (optional)"
                      className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 placeholder-stone-400 outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      aria-label="Location (optional)"
                    />
                  </div>

                  <div className="md:self-stretch">
                    <button
                      type="submit"
                      className="h-full w-full rounded-xl bg-amber-900 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:w-auto"
                    >
                      Search jobs
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-600">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-700" />
                  5,000+ jobs
                </span>
                <span>Curated companies</span>
                <span>Updated daily</span>
              </div>

              {/* Trending chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wide text-stone-500">Trending:</span>
                {trending.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSearchQuery(t)}
                    className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-sm font-medium text-stone-800 transition-colors hover:border-amber-300 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    aria-label={`Search trending: ${t}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href="#featured-jobs"
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById('featured-jobs')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className="text-sm font-medium text-amber-900/80 underline-offset-4 hover:text-amber-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-label="Browse categories in Latest Opportunities section"
                >
                  Browse categories
                </a>
              </div>
            </form>
          </motion.div>

          {/* Right: stacked job cards vignette */}
          <motion.div
            {...(prefersReducedMotion ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.05 } })}
            className="relative hidden justify-center lg:flex"
            aria-hidden="true"
          >
            <div className="relative w-full max-w-lg h-[380px]">
              {/* Subtle radial/dotted backdrop */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
                  backgroundSize: "24px 24px, 48px 48px",
                  backgroundPosition: "0 0, 12px 12px",
                }}
              />

              {/* Brand blobs for depth */}
              <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-amber-300/40 blur-3xl" />
              <div className="absolute -left-16 -bottom-10 h-48 w-48 rounded-full bg-orange-300/40 blur-3xl" />

              {/* Stacked cards */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                {...(prefersReducedMotion ? {} : { whileHover: { y: -4 } })}
              >
                <div className="relative w-[360px] h-[260px]">
                  {/* Card 1 (back) */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[200px] rounded-2xl border border-stone-200/70 bg-white/70 backdrop-blur-md shadow-lg rotate-[-8deg]"
                    {...(prefersReducedMotion ? {} : { whileHover: { y: -2, x: -2 } })}
                  >
                    <div className="h-full w-full p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-stone-300/80" />
                        <div>
                          <div className="text-sm font-semibold leading-tight text-stone-800">Product Designer</div>
                          <div className="text-xs text-stone-500">Globex</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-3 w-full rounded bg-stone-200" />
                        <div className="h-3 w-4/6 rounded bg-stone-200" />
                      </div>
                      <div className="mt-5 flex items-center gap-2">
                        <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">Hybrid</span>
                        <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">Design</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 2 (middle) */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[200px] rounded-2xl border border-stone-200/70 bg-white/75 backdrop-blur-md shadow-xl rotate-[0deg]"
                    {...(prefersReducedMotion ? {} : { whileHover: { y: -3 } })}
                  >
                    <div className="h-full w-full p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-stone-300/80" />
                        <div>
                          <div className="text-sm font-semibold leading-tight text-stone-800">Senior Software Engineer</div>
                          <div className="text-xs text-stone-500">Acme Inc</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-3 w-full rounded bg-stone-200" />
                        <div className="h-3 w-4/6 rounded bg-stone-200" />
                        <div className="h-3 w-3/4 rounded bg-stone-200" />
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">Full-time</span>
                          <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">Remote</span>
                        </div>
                        <div className="rounded-full bg-amber-900/90 px-3 py-1.5 text-xs font-medium text-white">Apply</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Card 3 (front) */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[200px] rounded-2xl border border-stone-200/70 bg-white/80 backdrop-blur-md shadow-xl rotate-[8deg]"
                    {...(prefersReducedMotion ? {} : { whileHover: { y: -4, x: 2 } })}
                  >
                    <div className="h-full w-full p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-stone-300/80" />
                        <div>
                          <div className="text-sm font-semibold leading-tight text-stone-800">Data Scientist</div>
                          <div className="text-xs text-stone-500">Initech</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="h-3 w-full rounded bg-stone-200" />
                        <div className="h-3 w-5/6 rounded bg-stone-200" />
                        <div className="h-3 w-2/3 rounded bg-stone-200" />
                      </div>
                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">On-site</span>
                          <span className="rounded-full bg-stone-100 px-2 py-1 text-xs text-stone-600">Analytics</span>
                        </div>
                        <div className="rounded-full bg-stone-200 px-3 py-1.5 text-xs font-medium text-stone-700">Details</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
