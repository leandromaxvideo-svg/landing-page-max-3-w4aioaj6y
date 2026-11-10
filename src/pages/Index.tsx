import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { DifferentiatorsSection } from '@/components/DifferentiatorsSection'
import { ServicesSection } from '@/components/ServicesSection'
import { Max3MethodSection } from '@/components/Max3MethodSection'
import { NotScopeSection } from '@/components/NotScopeSection'
import { NichesSection } from '@/components/NichesSection'
import { TeamSection } from '@/components/TeamSection'
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
        <DifferentiatorsSection />
        <ServicesSection />
        <Max3MethodSection />
        <NotScopeSection />
        <NichesSection />
        <TeamSection />
        <CTASection />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
