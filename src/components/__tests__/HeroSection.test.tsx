import { render, screen } from '@testing-library/react'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/One link is all it takes/)).toBeInTheDocument()
    expect(screen.getByText(/to stand out/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('Drop your product video in')).toBeInTheDocument()
  })

  it('renders the Start Viewing buttons', () => {
    render(<HeroSection />)

    const buttons = screen.getAllByRole('button', { name: 'Start Viewing' })
    expect(buttons).toHaveLength(2) // One in hero section, one in feature card
    expect(buttons[0]).toBeInTheDocument()
  })

  it('renders the feature cards', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('Drop a Link')).toBeInTheDocument()
    expect(screen.getByText('Create New Avatar')).toBeInTheDocument()
    expect(screen.getByText('Use Template')).toBeInTheDocument()
    expect(screen.getByText('Use a Preset')).toBeInTheDocument()
    expect(screen.getByText('Connect Your Account')).toBeInTheDocument()
  })
})
