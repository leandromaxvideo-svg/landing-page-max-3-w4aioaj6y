import { Button } from '@/components/ui/button'
import { Typewriter } from './Typewriter'
import { DashboardMockup } from './DashboardMockup'
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Sparkles } from 'lucide-react'

export function HeroSection() {
  const typewriterPhrases = [
    'Pipeline de Vendas de Alta Conversão',
    'Dashboards Inteligentes em Tempo Real',
    'Automações Comerciais de Alto Impacto',
    'Arquitetura Comercial Escalável',
  ]

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20agendar%20um%20diagn%C3%B3stico%20comercial%20com%20a%20Max%203%20Digital.',
      '_blank',
    )
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 via-amber-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              Aceleração Digital & Crescimento Previsível
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6">
            Evolua a sua operação comercial com <br className="hidden sm:inline" />
            <Typewriter phrases={typewriterPhrases} />
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            Conectamos <strong className="text-white">Pipelines de Vendas estratégicos</strong>,{' '}
            <strong className="text-white">Dashboards executivos</strong> e{' '}
            <strong className="text-white">Automações sem falhas</strong> para multiplicar o ROI da
            sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-full sm:w-auto gold-gradient-bg text-black font-bold text-base px-8 py-6 rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20 group"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <a href="#solucoes" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-zinc-800 bg-zinc-950/80 text-zinc-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 py-6 rounded-xl text-base"
              >
                Ver Soluções
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-900 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Garantia de Performance</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span>Implementação Ágil em 14 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
              <span>+3.8x Retorno sobre Investimento</span>
            </div>
          </div>
        </div>

        <div className="mt-8 transition-transform duration-500 hover:scale-[1.01]" id="pipeline">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
