import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, ArrowUpRight } from 'lucide-react'

export function PortfolioSection() {
  const cases = [
    {
      company: 'LogixLog Soluções',
      sector: 'Logística & Transporte',
      result: '+180%',
      resultLabel: 'em vendas em 3 meses',
      description:
        'Reestruturamos o funil comercial de uma operadora de logística. Implementamos pipeline Kanban com lead scoring e automações de WhatsApp para follow-up. O tempo de resposta caiu de 4 horas para 45 segundos.',
      tags: ['Pipeline', 'WhatsApp Auto', 'Dashboard'],
      image: 'https://img.usecurling.com/p/600/400?q=logistics%20warehouse&color=gray&dpr=2',
    },
    {
      company: 'Grupo Nexus B2B',
      sector: 'Consultoria B2B',
      result: '3.8x',
      resultLabel: 'ROI no primeiro mês',
      description:
        'Desenvolvemos um dashboard executivo em tempo real que identificou gargalos na qualificação de leads. Com automação de distribuição, a taxa de conversão saltou de 8% para 22%.',
      tags: ['Dashboard BI', 'Automação', 'Lead Scoring'],
      image: 'https://img.usecurling.com/p/600/400?q=corporate%20meeting&color=gray&dpr=2',
    },
    {
      company: 'HV Capital',
      sector: 'Investimentos',
      result: '+R$ 2.3M',
      resultLabel: 'faturamento anual adicional',
      description:
        'Integramos CRM, formulários e sistema de pagamentos. Criamos fluxos de nutrição automáticos e relatórios executivos. Leads recuperados pagaram o investimento no primeiro mês.',
      tags: ['Integração CRM', 'Fluxos', 'Relatórios'],
      image: 'https://img.usecurling.com/p/600/400?q=financial%20growth&color=gray&dpr=2',
    },
  ]

  return (
    <section className="py-24 bg-black text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Cases de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Resultados que <span className="gold-gradient-text">Falam por Nós</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Empresas que transformaram suas operações comerciais com a metodologia Max 3 Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <Card
              key={idx}
              className="bg-zinc-950 border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.company}</h3>
                    <p className="text-xs text-zinc-400">{item.sector}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl font-extrabold gold-gradient-text">{item.result}</span>
                  <span className="text-xs text-zinc-400">{item.resultLabel}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-900">
                  {item.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="outline"
                      className="border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/5 text-[10px] font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
