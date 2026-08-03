import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Eu gastava com revista, rádio, outdoor e televisão. Hoje não gasto mais nada disso — e vendo mais. Foi com a Max 3 que eu entendi o que é marketing estruturado.',
      author: 'Tomio',
      company: 'Valfran',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=33',
    },
    {
      quote:
        'Antes, a única forma de competir era baixar o preço. Hoje a mãe chega na secretaria já sabendo por que a escola vale o que custa.',
      author: 'Rodrigo',
      company: 'Escola Passo a Passo de Votuporanga',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=71',
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                      <span className="text-[#D4AF37]">{item.company}</span>
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
