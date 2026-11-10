import { Volume2, Tv, Award, ShieldX } from 'lucide-react'

export function DifferentiatorsSection() {
  const differentials = [
    {
      icon: Volume2,
      title: 'Critério, não barulho',
      description:
        'O mercado está cheio de barulho: volume de posts, alcance, curtidas e relatórios que não pagam conta. O que sustenta um negócio é critério: posicionamento deliberado que faz o cliente certo escolher você.',
    },
    {
      icon: Tv,
      title: '14 anos em TV',
      description:
        'Mais de uma década de experiência em comunicação televisiva. Sabemos como construir narrativa, gerar conexão emocional e manter consistência. São habilidades que trazemos para o digital.',
    },
    {
      icon: Award,
      title: 'Certificação 8Ps',
      description:
        'Certificação no Método 8Ps de Conrado Adolpho. Trabalhamos com um framework comprovado de marketing digital, não com achismos ou modismos passageiros.',
    },
    {
      icon: ShieldX,
      title: 'Não somos o barulho do mercado',
      description:
        'Existe quem vende pacote de posts, promete resultado em 30 dias, entrega relatório de curtida e some. Nós entregamos critério, processo e responsabilidade, e ficamos ao seu lado todo mês.',
    },
  ]

  return (
    <section
      id="diferenciais"
      className="py-24 bg-zinc-950 border-t border-b border-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Por que Max 3 Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            O que nos torna <span className="gold-gradient-text">diferentes</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Não vendemos barulho. Vendemos critério, processo e responsabilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-black border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
