import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShieldCheck, ArrowUpRight, MessageCircle } from 'lucide-react'
import logoImg from '@/assets/logo-max-3-horizontal-a6ba9.png'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Pilares', href: '#pilares' },
    { name: 'MM3', href: '#metodo-max-3' },
    { name: 'Nichos', href: '#nichos' },
    { name: 'Diagnóstico A8', href: '#contato' },
  ]

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5511999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Max%203%20Digital%20e%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o.',
      '_blank',
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center group">
          <img
            src={logoImg}
            alt="Max 3 Digital Logo"
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/admin/login"
            className="p-2 text-zinc-400 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-zinc-900"
            title="Acesso Restrito - Admin"
          >
            <ShieldCheck className="w-5 h-5" />
          </Link>

          <Button
            onClick={openWhatsApp}
            className="gold-gradient-bg text-black font-semibold hover:brightness-110 shadow-md shadow-[#D4AF37]/20 transition-all group"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar com Especialista
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-3">
          <Link to="/admin/login" className="p-2 text-zinc-400 hover:text-[#D4AF37]">
            <ShieldCheck className="w-5 h-5" />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-300 hover:text-white hover:bg-zinc-900"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 text-white w-80">
              <div className="flex flex-col space-y-6 pt-6">
                <img
                  src={logoImg}
                  alt="Max 3 Digital"
                  className="h-14 w-auto object-contain self-start mb-2"
                />
                <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-base font-medium text-zinc-200 hover:text-[#D4AF37] transition-colors py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="pt-4">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full gold-gradient-bg text-black font-semibold py-5 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
