import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-black text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 via-amber-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-normal sm:leading-[1.2] mb-6 pb-2 overflow-visible">
            Transformamos o negócio bom{' '}
            <span className="gold-gradient-text inline-block pb-1">no negócio escolhido</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            <strong className="text-white">
              Especialistas em Marketing e Comunicação Estratégica: consultoria e implementação.
            </strong>{' '}
            A comunicação é o carro-chefe: é ela que constrói posicionamento e reputação. O tráfego
            pago entra como apoio, para potencializar o que o orgânico já validou. Com{' '}
            <strong className="text-[#D4AF37]">Método MM3</strong> e{' '}
            <strong className="text-[#D4AF37]">Diagnóstico A8</strong> como porta de entrada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto gold-gradient-bg text-black font-bold text-base px-8 py-6 rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20 group"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <a href="#diferenciais" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-zinc-800 bg-zinc-950/80 text-zinc-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 py-6 rounded-xl text-base"
              >
                Conhecer o Método MM3
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-900 text-xs sm:text-sm text-zinc-400">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-[#D4AF37] font-bold text-lg">14 anos</span>
              <span>de experiência em TV</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-[#D4AF37] font-bold text-lg">8Ps</span>
              <span>certificação Conrado Adolpho</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-[#D4AF37] font-bold text-lg">A8</span>
              <span>diagnóstico que inicia o método</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
