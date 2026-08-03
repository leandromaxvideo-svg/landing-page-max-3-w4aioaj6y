import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Megaphone, Gem, Target, CheckCircle, ArrowRight } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      id: 'marketing',
      icon: Megaphone,
      title: 'Marketing',
      subtitle: 'Curadoria estratégica de conteúdo',
      description:
        'Conteúdo com propósito, não por obrigação. Construímos uma arquitetura editorial que educa, humaniza, prova resultado e vende — sem barulho.',
      features: [
        '4 a 5 pilares de conteúdo alinhados ao posicionamento',
        'Calendário editorial mensal com mínimo 12 posts',
        'Banco de 90 pautas para 3 meses de conteúdo',
        'Gestão estratégica de Instagram, WhatsApp e Google',
      ],
      badge: 'Pilar 01',
    },
    {
      id: 'marca',
      icon: Gem,
      title: 'Marca',
      subtitle: 'Construção de autoridade e identidade',
      description:
        'Transformamos negócios genéricos em referências inconfundíveis. Território de autoridade, slogan, mensagem-mãe e tom de voz que nenhum concorrente copia.',
      features: [
        'Território de autoridade único e defensável',
        'Slogan posicionado e mensagem-mãe',
        'Guia de tom de voz e identidade verbal',
        'Script de apresentação institucional em 3 versões',
      ],
      badge: 'Pilar 02',
    },
    {
      id: 'trafego',
      icon: Target,
      title: 'Tráfego Pago Estruturado',
      subtitle: 'Lead qualificado com CAC controlado',
      description:
        'Campanhas em 3 camadas — consciência, consideração e conversão. Criativos de autoridade, copy posicionada e decisões baseadas em dado, não em feeling.',
      features: [
        'Estrutura em 3 camadas: consciência, consideração, conversão',
        'Criativos de autoridade com o diretor e depoimentos',
        'Pixel instalado, remarketing e públicos semelhantes',
        'Teste A/B contínuo e CAC calculado mensalmente',
      ],
      badge: 'Pilar 03',
    },
  ]

  return (
    <section id="pilares" className="py-24 bg-black relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/10 mb-4 px-3 py-1">
            Os 3 Pilares da Curadoria
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Marketing, Marca e <span className="gold-gradient-text">Tráfego Pago Estruturado</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Três pilares integrados que transformam presença digital em autoridade e autoridade em
            receita previsível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="bg-zinc-950 border-zinc-800 hover:border-[#D4AF37]/60 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
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
