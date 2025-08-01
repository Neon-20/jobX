'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface SearchFilters {
  location?: string
  jobType?: string
  salaryRange?: [number, number]
  isRemote?: boolean
}

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  filters: SearchFilters
  setFilters: (filters: SearchFilters) => void
  performSearch: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<SearchFilters>({})

  const performSearch = () => {
    // In a real app, this would trigger an API call or update the URL
    console.log('Performing search:', { searchQuery, filters })

    // Scroll to job listings section
    const jobListingsElement = document.querySelector('[data-section="job-listings"]')
    if (jobListingsElement) {
      jobListingsElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      filters,
      setFilters,
      performSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
