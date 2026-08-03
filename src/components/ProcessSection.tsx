import { Search, PenTool, Rocket, BarChart3 } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      step: '01',
      title: 'Diagnóstico Estratégico',
      description:
        'Mergulhamos no seu funil atual: mapeamos gargalos, perdas e oportunidades. Você recebe um relatório com o exato potencial de faturamento escondido na sua operação.',
      duration: '1-3 dias',
    },
    {
      icon: PenTool,
      step: '02',
      title: 'Arquitetura Sob Medida',
      description:
        'Desenhamos o pipeline, os dashboards e os fluxos de automação alinhados ao seu nicho. Cada etapa é validada com o seu time antes da implementação.',
      duration: '4-7 dias',
    },
    {
      icon: Rocket,
      step: '03',
      title: 'Implementação & Integração',
      description:
        'Conectamos CRM, WhatsApp, formulários e ERPs. Configuramos disparos automáticos, lead scoring e distribuição inteligente — tudo funcionando em até 14 dias.',
      duration: '7-14 dias',
    },
    {
      icon: BarChart3,
      step: '04',
      title: 'Otimização Contínua',
      description:
        'Monitoramos os KPIs em tempo real, ajustamos conversões e liberamos upgrades de automação. Você acompanha o ROI crescer mês a mês no dashboard.',
      duration: 'Contínuo',
    },
  ]

  return (
    <section className="py-24 bg-black text-white relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Do Diagnóstico ao <span className="gold-gradient-text">Resultado Previsível</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Um método comprovado em mais de 120 empresas. Cada etapa foi desenhada para eliminar
            fricção e acelerar o seu retorno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-zinc-800 group-hover:text-[#D4AF37]/30 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{step.description}</p>
                  <div className="pt-3 border-t border-zinc-900">
                    <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full">
                      {step.duration}
                    </span>
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
