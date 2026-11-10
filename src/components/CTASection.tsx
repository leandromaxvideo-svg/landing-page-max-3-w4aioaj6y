import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

export function CTASection() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5517997194145?text=Ol%C3%A1!%20Quero%20um%20diagn%C3%B3stico%20gratuito%20de%20marketing%20com%20a%20Max%203%20Digital.',
      '_blank',
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            Comece hoje mesmo
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Seu concorrente já tem <span className="gold-gradient-text">critério</span>.
          <br className="hidden sm:inline" />
          Você vai competir só por preço?
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Comece pelo Diagnóstico A8: uma leitura honesta do seu negócio, feita com critério e
          processo, antes de qualquer sugestão de ação.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="w-full sm:w-auto gold-gradient-bg text-black font-bold text-base px-8 py-6 rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20 group"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agendar Diagnóstico Gratuito
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <a href="#contato" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-zinc-700 bg-transparent text-zinc-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 py-6 rounded-xl text-base"
            >
              Preencher Formulário
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
