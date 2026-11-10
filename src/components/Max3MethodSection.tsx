import { Search, PenTool, Hammer, Wrench, XCircle } from 'lucide-react'

export function Max3MethodSection() {
  const phases = [
    {
      icon: Search,
      metaphor: 'Terreno',
      title: 'Diagnóstico',
      duration: '2 a 3 semanas',
      description:
        'Antes de construir, é preciso conhecer o terreno. O Diagnóstico A8 estuda o negócio por inteiro: presença digital, processo comercial, percepção de valor e concorrência. Sem essa leitura, qualquer anúncio é chute.',
      deliverables: [
        'Auditoria de redes sociais e Google',
        'Cliente oculto via WhatsApp e visita',
        'NPS estruturado com clientes',
        'Relatório de Diagnóstico A8',
      ],
    },
    {
      icon: PenTool,
      metaphor: 'Planta',
      title: 'Arquitetura da Comunicação',
      duration: '3 a 4 semanas',
      description:
        'Ninguém levanta parede sem planta. Aqui os dados do terreno viram projeto: território de comunicação, slogan, mensagem-mãe, arquitetura de conteúdo e scripts de apresentação.',
      deliverables: [
        'Território de comunicação aprovado',
        'Slogan e mensagem-mãe',
        'Banco de 90 pautas e calendário editorial',
        'Scripts institucionais em 3 versões',
      ],
    },
    {
      icon: Hammer,
      metaphor: 'Obra',
      title: 'Ativação',
      duration: '6 a 10 semanas',
      description:
        'Com a planta aprovada, a obra começa. Canais ativados, funil comercial estruturado, equipe treinada — e tráfego pago só aqui, para potencializar o que o orgânico já validou (ou teste direto quando o diagnóstico indicar).',
      deliverables: [
        '12 primeiros posts posicionados',
        'Funil de vendas e scripts de atendimento',
        'Manual de atendimento e treinamento',
        'Campanhas de tráfego quando fizer sentido',
      ],
    },
    {
      icon: Wrench,
      metaphor: 'Manutenção',
      title: 'Mensuração e Otimização Constante',
      duration: 'Mensal',
      description:
        'Casa construída precisa de manutenção — sem ela, a estrutura se degrada. Revisão mensal de posicionamento, indicadores e narrativa mantém o sistema de pé e evoluindo.',
      deliverables: [
        'Reunião mensal de posicionamento',
        'Indicadores acompanhados com o dono do negócio',
        'Narrativa alinhada ao calendário do negócio',
        'Ajustes de rota com base em critério, não em moda',
      ],
    },
  ]

  return (
    <section
      id="metodo-max-3"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Método MM3
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Uma casa se constrói em ordem —{' '}
            <span className="gold-gradient-text">o marketing também</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Terreno, planta, obra e manutenção. Cada etapa tem entregável, prazo e marco de
            aprovação — e nenhuma começa antes da anterior estar pronta.
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
                        {phase.metaphor}
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

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="p-6 rounded-xl bg-black border border-[#D4AF37]/30">
            <div className="flex items-start space-x-3">
              <XCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300 leading-relaxed">
                <strong className="text-white">Por que a ordem importa:</strong> anunciar semana que
                vem, sem diagnóstico, é levantar parede torta em terreno que ninguém estudou. A
                parede até fica de pé — mas o que ela sustenta depois é culpa sua. Primeiro o
                terreno, depois a planta, depois a obra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
