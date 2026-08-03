import { GraduationCap, Tractor, Scale } from 'lucide-react'

export function NichesSection() {
  const niches = [
    {
      icon: GraduationCap,
      title: 'Educação',
      segment: 'Escolas Particulares',
      range: '200 a 1.000 alunos',
      description:
        'Posicionamos a escola como referência na cidade. Construímos autoridade do diretor, estruturamos o funil de matrícula e treinamos a equipe de atendimento.',
      highlights: [
        'Território de autoridade que justifica o preço premium',
        'Funil de matrícula com Protocolo 3R',
        'Conformidade com ECA Digital em todo conteúdo',
      ],
    },
    {
      icon: Tractor,
      title: 'Agronegócio',
      segment: 'Indústria & Pecuária',
      range: 'Carrocerias, carretas e pecuária',
      description:
        'Transformamos fabricantes e produtores rurais em marcas de confiança. Tráfego pago estruturado para gerar leads qualificados e construir reputação no segmento.',
      highlights: [
        'Campanhas de tráfego pago com CAC controlado',
        'Conteúdo de autoridade técnica para o segmento',
        'Posicionamento que diferencia do concorrente',
      ],
    },
    {
      icon: Scale,
      title: 'Advocacia',
      segment: 'Escritórios de Advocacia',
      range: 'Diversas áreas',
      description:
        'Construímos autoridade pública para advogados e escritórios. Posicionamento estratégico, conteúdo educativo e captação estruturada de novos clientes.',
      highlights: [
        'Posicionamento como autoridade jurídica',
        'Conteúdo educativo que gera confiança',
        'Captação de clientes via tráfego pago estruturado',
      ],
    },
  ]

  return (
    <section id="nichos" className="py-24 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Nichos de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Especialistas em <span className="gold-gradient-text">três segmentos</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Atuamos onde temos profundidade de mercado e capacidade de gerar resultado real.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {niches.map((niche, idx) => {
            const Icon = niche.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {niche.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400/90 mb-1">{niche.segment}</p>
                <p className="text-[11px] text-zinc-500 mb-4">{niche.range}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{niche.description}</p>
                <div className="space-y-2 pt-4 border-t border-zinc-900">
                  {niche.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <span className="text-[#D4AF37] mt-0.5">▸</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
