import { Button } from '@/components/ui/button'
import { Typewriter } from './Typewriter'
import { ArrowRight, Sparkles } from 'lucide-react'
import logoImg from '@/assets/logo-max-3-horizontal-a6ba9.png'

export function HeroSection() {
  const typewriterPhrases = ['negócio escolhido', 'referência do mercado', 'líder do segmento']

  const scrollToForm = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#D4AF37]/10 via-amber-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <img
            src={logoImg}
            alt="Max 3 Digital"
            className="h-[10.5rem] sm:h-48 w-auto object-contain mx-auto mb-8"
          />

          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              Critério, não barulho
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-6">
            Transformamos o negócio bom no <Typewriter phrases={typewriterPhrases} />
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            <strong className="text-white">
              Curadoria de Marketing, Marca e Tráfego Pago Estruturado.
            </strong>{' '}
            Construímos autoridade, reputação e previsibilidade com o{' '}
            <strong className="text-[#D4AF37]">Método A8</strong> — diagnóstico, construção de
            marca, implementação e curadoria contínua.
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
                Conhecer o Método A8
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
              <span>método proprietário</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
