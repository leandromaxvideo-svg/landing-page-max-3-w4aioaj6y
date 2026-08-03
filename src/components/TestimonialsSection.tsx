import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'A Max 3 Digital reposicionou completamente a nossa escola. Saímos de posts sem propósito para uma marca de autoridade na cidade. As matrículas por indicação cresceram 200% em um semestre.',
      author: 'Eduardo Fontes',
      role: 'Diretor',
      company: 'Colégio Horizonte',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=12',
    },
    {
      quote:
        'O tráfego pago estruturado mudou nosso jogo. Antes gastávamos com anúncio sem critério. Agora o CAC é controlado e cada real investido tem rastreabilidade. O ROI foi imediato.',
      author: 'Camila Albuquerque',
      role: 'Sócia',
      company: 'Carrocerias Almeida',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=45',
    },
    {
      quote:
        'Não é só marketing, é construção de marca. O Método A8 nos deu território, tom de voz e um processo que funciona sem depender de mim o tempo todo. Critério, não barulho.',
      author: 'Henrique Vasconcelos',
      role: 'Advogado',
      company: 'Vasconcelos Advogados',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=88',
    },
  ]

  return (
    <section
      id="depoimentos"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Provas Sociais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            O que dizem nossos <span className="gold-gradient-text">parceiros e clientes</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Resultados reais de quem decidiu profissionalizar o marketing com a Max 3 Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Card
              key={idx}
              className="bg-black border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 relative"
            >
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center space-x-1 text-[#D4AF37] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-3" />
                  <p className="text-zinc-300 text-sm leading-relaxed italic mb-8">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-zinc-900">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full border border-[#D4AF37]/40 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.author}</h4>
                    <p className="text-xs text-zinc-400">
                      {item.role} • <span className="text-[#D4AF37]">{item.company}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
