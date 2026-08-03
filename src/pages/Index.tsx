import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { DifferentiatorsSection } from '@/components/DifferentiatorsSection'
import { ServicesSection } from '@/components/ServicesSection'
import { A8MethodSection } from '@/components/A8MethodSection'
import { NichesSection } from '@/components/NichesSection'
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
        <A8MethodSection />
        <NichesSection />
        <CTASection />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
