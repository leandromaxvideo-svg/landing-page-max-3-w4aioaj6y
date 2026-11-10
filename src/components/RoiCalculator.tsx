import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Calculator, TrendingUp, DollarSign, ArrowRight } from 'lucide-react'

export function RoiCalculator() {
  const [leads, setLeads] = useState<number>(300)
  const [ticket, setTicket] = useState<number>(2500)

  const currentConversion = 0.08 // 8% padrão
  const max3Conversion = 0.22 // 22% com Max 3 Digital pipeline e automação

  const currentRevenue = leads * currentConversion * ticket
  const projectedRevenue = leads * max3Conversion * ticket
  const additionalMonthlyRevenue = projectedRevenue - currentRevenue
  const annualGrowth = additionalMonthlyRevenue * 12

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
  }

  return (
    <section id="calculadora" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-[#D4AF37] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Impacto Financeiro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Calcule o Quanto Sua Empresa Deixa de Faturar <br />
            <span className="gold-gradient-text">Sem o Método MM3</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Ajuste seus números atuais e veja o potencial imediato de expansão com a nossa
            arquitetura comercial.
          </p>
        </div>

        <Card className="bg-zinc-950 border-[#D4AF37]/30 max-w-4xl mx-auto p-4 sm:p-8 rounded-2xl shadow-2xl">
          <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Leads Mensais Recebidos
                  </label>
                  <span className="text-lg font-bold text-[#D4AF37]">{leads} leads</span>
                </div>
                <Slider
                  value={[leads]}
                  min={50}
                  max={5000}
                  step={50}
                  onValueChange={(val) => setLeads(val[0])}
                  className="py-2"
                />
                <span className="text-[11px] text-zinc-500">
                  Mova para simular seu volume de contatos
                </span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Ticket Médio das Vendas
                  </label>
                  <span className="text-lg font-bold text-[#D4AF37]">{formatCurrency(ticket)}</span>
                </div>
                <Slider
                  value={[ticket]}
                  min={200}
                  max={25000}
                  step={100}
                  onValueChange={(val) => setTicket(val[0])}
                  className="py-2"
                />
                <span className="text-[11px] text-zinc-500">
                  Valor médio por contrato ou compra
                </span>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 space-y-2">
                <div className="flex justify-between">
                  <span>Conversão Estimada Atual (Sem MM3):</span>
                  <span className="font-semibold text-zinc-300">8.0%</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversão Média com MM3 Pipeline:</span>
                  <span className="font-semibold text-emerald-400">22.0%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 via-black to-zinc-900 p-6 rounded-xl border border-[#D4AF37]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
                  Potencial Adicional Estimado
                </span>
                <div className="mt-2">
                  <span className="text-xs text-zinc-400 block">Faturamento Extra Mensal</span>
                  <span className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">
                    + {formatCurrency(additionalMonthlyRevenue)}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <span className="text-xs text-zinc-400 block">Impacto Anual no Seu Caixa</span>
                  <span className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center mt-1">
                    <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />+{' '}
                    {formatCurrency(annualGrowth)} / ano
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a href="#contato">
                  <Button className="w-full gold-gradient-bg text-black font-bold py-6 text-sm hover:brightness-110 shadow-lg shadow-[#D4AF37]/20">
                    Capturar Esse Faturamento Extra
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
