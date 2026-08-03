import { Award, TrendingUp, Users, RefreshCw } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      label: 'em Vendas Geradas para Clientes',
      value: '+R$ 50M+',
      icon: TrendingUp,
    },
    {
      label: 'Empresas & Negócios Impactados',
      value: '+120',
      icon: Users,
    },
    {
      label: 'Taxa de Retenção e Satisfação',
      value: '98%',
      icon: Award,
    },
    {
      label: 'Aumento Médio de Conversão',
      value: '3.8x',
      icon: RefreshCw,
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-zinc-950 border-t border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
              Sobre a Max 3 Digital
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 leading-tight">
              A Parceira Estratégica que Converte Tecnologia em{' '}
              <span className="gold-gradient-text">Lucro Real</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              A <strong className="text-white">Max 3 Digital</strong> nasceu da necessidade de
              eliminar o gargalo comercial enfrentado por empresas em crescimento. Entendemos que
              gerar leads sem uma arquitetura fluida de vendas é desperdício de caixa.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Desenvolvemos ecossistemas integrados que conectam prospecção, acompanhamento em tempo
              real e análise preditiva. Nosso compromisso é transformar sua operação em uma máquina
              de vendas previsível.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-black border border-zinc-800 hover:border-[#D4AF37]/40 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
