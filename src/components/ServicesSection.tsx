import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GitMerge, LayoutDashboard, Cpu, CheckCircle, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      id: 'pipeline',
      icon: GitMerge,
      title: 'Pipeline de Vendas de Alta Performance',
      subtitle: 'Estruturação Kanban & Score Inteligente',
      description:
        'Transforme a jornada de compra em um funil visual, previsível e sem vazamento de oportunidades. Rastreamento em tempo real de cada negociação.',
      features: [
        'Mapeamento de etapas customizado ao seu nicho',
        'Lead scoring automático com base em comportamento',
        'Notificações instantâneas para o time de pré-vendas',
        'Integração total com WhatsApp e CRM corporativo',
      ],
      badge: 'Pilar 01',
    },
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      title: 'Dashboard Inteligente & Business Intelligence',
      subtitle: 'Decisões Baseadas em Dados Confiáveis',
      description:
        'Centralize todas as métricas cruciais da sua empresa em painéis visuais intuitivos. Acompanhe receita, ticket médio e CAC em tempo real.',
      features: [
        'Indicadores de desempenho (KPIs) em tempo real',
        'Projeção de faturamento e previsibilidade mensal',
        'Filtros por vendedor, região, canal e produto',
        'Relatórios automatizados por e-mail e executivos',
      ],
      badge: 'Pilar 02',
    },
    {
      id: 'automacoes',
      icon: Cpu,
      title: 'Automações de Processos & IA Comercial',
      subtitle: 'Velocidade & Redução do Custo Operacional',
      description:
        'Elimine tarefas repetitivas e garanta que 100% dos leads sejam atendidos em menos de 60 segundos com fluxos inteligentes e integração total.',
      features: [
        'Disparos inteligentes no WhatsApp no momento exato',
        'Distribuição automática de leads entre vendedores',
        'Integração de formulários, sistemas de pagamento e ERPs',
        'Qualificação de leads via IA antes da reunião',
      ],
      badge: 'Pilar 03',
    },
  ]

  return (
    <section id="solucoes" className="py-24 bg-zinc-950 relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/10 mb-4 px-3 py-1">
            Os 3 Pilares do Método Max 3
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Tecnologia e Estratégia Desenvolvidas para{' '}
            <span className="gold-gradient-text">Acelerar Vendas</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Nossa arquitetura conecta atração, negociação e inteligência estratégica para garantir
            previsibilidade e alta rentabilidade ao seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="bg-black border-zinc-800 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <CardContent className="p-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-zinc-900">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2.5 text-xs text-zinc-300"
                        >
                          <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center text-xs font-bold text-[#D4AF37] hover:text-amber-300 transition-colors pt-2 group/link"
                  >
                    <span>Quero implementar no meu negócio</span>
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
