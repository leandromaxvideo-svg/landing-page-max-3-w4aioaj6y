import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

export function FaqSection() {
  const faqs = [
    {
      question: 'Em quanto tempo a implementação fica pronta?',
      answer:
        'O prazo médio é de 14 dias úteis. O diagnóstico leva de 1 a 3 dias, a arquitetura sob medida de 4 a 7 dias, e a implementação com integrações de 7 a 14 dias. Empresas com sistemas mais complexos podem exigir até 21 dias.',
    },
    {
      question: 'Preciso trocar meu CRM atual?',
      answer:
        'Não. A Max 3 Digital integra-se aos principais CRMs do mercado (Pipedrive, HubSpot, RD Station, Salesforce e outros). Se você ainda não usa um CRM, recomendamos e configuramos a melhor opção para o seu porte e nicho.',
    },
    {
      question: 'As automações funcionam com WhatsApp?',
      answer:
        'Sim. Implementamos fluxos de WhatsApp automatizados que qualificam leads, agendam reuniões, enviam follow-ups e distribuem oportunidades para os vendedores — tudo com resposta em menos de 60 segundos.',
    },
    {
      question: 'Como é cobrado o serviço?',
      answer:
        'Trabalhamos com taxa de implementação (setup) + mensalidade de gestão e otimização. O investimento varia conforme o escopo, número de integrações e complexidade. Agende um diagnóstico gratuito para receber uma proposta personalizada.',
    },
    {
      question: 'O dashboard funciona em tempo real?',
      answer:
        'Sim. Todos os indicadores — faturamento, leads, conversão, ticket médio e CAC — são atualizados em tempo real. Você acessa de qualquer dispositivo e pode configurar relatórios automatizados por e-mail.',
    },
    {
      question: 'Vocês atendem empresas de qualquer porte?',
      answer:
        'Atendemos desde pequenas empresas em fase de estruturação comercial até grandes operações com dezenas de vendedores. O método Max 3 é adaptável ao seu momento de crescimento.',
    },
  ]

  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
            Perguntas <span className="gold-gradient-text">Comuns</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tudo o que você precisa saber antes de iniciar com a Max 3 Digital.
          </p>
        </div>

        <div className="flex items-start space-x-3 mb-8">
          <HelpCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-400">
            Não encontrou sua resposta?{' '}
            <a
              href="#contato"
              className="text-[#D4AF37] hover:text-amber-300 font-semibold transition-colors"
            >
              Fale com um especialista
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="bg-black border border-zinc-800 rounded-xl px-6 hover:border-[#D4AF37]/40 transition-colors"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] transition-colors hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-zinc-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
