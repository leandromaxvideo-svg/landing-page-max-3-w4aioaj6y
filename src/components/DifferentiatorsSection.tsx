import { Volume2, Tv, Award, ShieldX } from 'lucide-react'

export function DifferentiatorsSection() {
  const differentials = [
    {
      icon: Volume2,
      title: 'Método próprio, em quatro fases',
      description:
        'Estudamos o terreno antes de construir: Diagnóstico, Arquitetura da Comunicação, Ativação e Mensuração. Nessa ordem, sem pular etapa. E medimos o que paga a conta, contatos qualificados e vendas, não curtida e alcance.',
    },
    {
      icon: Tv,
      title: 'Plano sob medida, sem pacote de posts',
      description:
        'Cada empresa recebe um plano pensado para o seu objetivo, com cada formato escolhido e justificado. Sem "X posts por mês" e sem promessa de resultado antes do diagnóstico. Deixamos claro desde o início o que entra e o que não entra no escopo.',
    },
    {
      icon: Award,
      title: 'Estratégia e execução no mesmo lugar',
      description:
        'Quem desenha a estratégia acompanha a execução: conteúdo, vídeo, tráfego pago e medição. Você contrata só a consultoria ou a consultoria com implementação, e tem uma pessoa responsável pelo marketing da sua empresa.',
    },
    {
      icon: ShieldX,
      title: '27 anos de audiovisual',
      description:
        '14 deles em televisão. Sabemos construir narrativa, gravar o dono da empresa falando com clareza e manter consistência. E o cliente mais antigo da Max está com a gente desde 2009.',
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
