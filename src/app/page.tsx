import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import FeaturedJobsSection from "@/components/FeaturedJobsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import StatsSection from "@/components/StatsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CompaniesSection from "@/components/CompaniesSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import { SearchProvider } from "@/contexts/SearchContext"

export default function Home() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <Header />

        {/* Main Landing Page Sections */}
        <HeroSection />
        <FeaturesSection />
        <FeaturedJobsSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <CompaniesSection />
        <CTASection />
        <Footer />
      </div>
    </SearchProvider>
  );
}
