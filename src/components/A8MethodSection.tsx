import { Search, PenTool, Rocket, RefreshCw } from 'lucide-react'

export function A8MethodSection() {
  const phases = [
    {
      icon: Search,
      phase: 'Fase 1',
      title: 'Diagnóstico A8',
      duration: '2 a 3 semanas',
      description:
        'Auditoria completa de autoridade: presença digital, processo comercial, percepção de valor e benchmarking com concorrentes.',
      deliverables: [
        'Auditoria de redes sociais e Google',
        'Cliente oculto via WhatsApp e visita',
        'NPS estruturado com clientes',
        'Relatório de Diagnóstico A8',
      ],
    },
    {
      icon: PenTool,
      phase: 'Fase 2',
      title: 'Construção de Autoridade',
      duration: '3 a 4 semanas',
      description:
        'Transformação dos dados em identidade. Território, slogan, arquitetura de conteúdo e scripts de apresentação.',
      deliverables: [
        'Território de autoridade aprovado',
        'Slogan e mensagem-mãe',
        'Banco de 90 pautas e calendário editorial',
        'Scripts institucionais em 3 versões',
      ],
    },
    {
      icon: Rocket,
      phase: 'Fase 3',
      title: 'Implementação',
      duration: '6 a 10 semanas',
      description:
        'O planejamento vira execução. Canais ativados, funil comercial estruturado, equipe treinada e campanhas de tráfego pago rodando.',
      deliverables: [
        '12 primeiros posts posicionados',
        'Funil de vendas e scripts de atendimento',
        'Manual de atendimento e treinamento',
        'Campanhas de Meta Ads ativas',
      ],
    },
    {
      icon: RefreshCw,
      phase: 'Fase 4',
      title: 'Curadoria Contínua',
      duration: 'Mensal',
      description:
        'O sistema fica ativo e a autoridade cresce mês a mês. Sem curadoria contínua, o caos volta em 60 dias.',
      deliverables: [
        'Reunião mensal de posicionamento',
        'Dashboard de performance e CAC',
        'Narrativa alinhada ao calendário do negócio',
        'Relatório semestral de autoridade',
      ],
    },
  ]

  return (
    <section
      id="metodo-a8"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Método A8
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Do diagnóstico à <span className="gold-gradient-text">curadoria contínua</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Um método comprovado em 4 fases. Cada etapa tem entregável, prazo e marco de aprovação.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-black border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                        {phase.phase}
                      </span>
                      <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">{phase.description}</p>
                <div className="space-y-2 pt-3 border-t border-zinc-900">
                  {phase.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-zinc-300">
                      <span className="text-[#D4AF37] mt-0.5">▸</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            <span className="text-sm text-[#D4AF37] font-semibold">
              Sem curadoria contínua, o caos volta em 60 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
