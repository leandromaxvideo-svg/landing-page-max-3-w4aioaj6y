import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { ProcessSection } from '@/components/ProcessSection'
import { RoiCalculator } from '@/components/RoiCalculator'
import { StatsSection } from '@/components/StatsSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { FaqSection } from '@/components/FaqSection'
import { CTASection } from '@/components/CTASection'
import { LeadForm } from '@/components/LeadForm'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Footer } from '@/components/Footer'

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <RoiCalculator />
        <StatsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <CTASection />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
