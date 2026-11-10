import { XCircle } from 'lucide-react'

const notScope = [
  'Não vendemos pacote de posts sem posicionamento',
  'Não prometemos resultado milagroso em 30 dias',
  'Não entregamos relatório de curtidas como se fosse estratégia',
  'Não fazemos tráfego pago sem diagnóstico prévio',
  'Não terceirizamos o atendimento para um "social media" júnior',
  'Não desaparecemos depois da assinatura do contrato',
]

export function NotScopeSection() {
  return (
    <section
      id="nao-fazemos"
      className="py-24 bg-black text-white relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                Critério, não barulho
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 leading-snug">
                O que <span className="gold-gradient-text">não fazemos</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Nosso escopo é delimitado de propósito. Trabalhamos com comunicação estratégica,
                consultoria e implementação, e somos honestos sobre o que está fora disso. Essa
                delimitação é o que garante profundidade no que fazemos e responsabilidade sobre o
                que assumimos.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Se o que você procura está na lista ao lado, provavelmente não somos o fornecedor
                certo, e preferimos dizer isso antes do contrato do que depois.
              </p>
            </div>
            <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8">
              <ul className="space-y-4">
                {notScope.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
