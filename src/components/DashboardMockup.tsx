import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  TrendingUp,
  Users,
  Zap,
  DollarSign,
  ArrowUpRight,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react'

export function DashboardMockup() {
  const [period, setPeriod] = useState<'dia' | 'semana' | 'mes'>('mes')

  const metrics = {
    mes: {
      faturamento: 'R$ 842.500,00',
      leads: '1.420',
      conversao: '24,8%',
      automacoes: '3.842 ações/dia',
    },
    semana: {
      faturamento: 'R$ 215.300,00',
      leads: '380',
      conversao: '22,1%',
      automacoes: '950 ações/dia',
    },
    dia: {
      faturamento: 'R$ 34.800,00',
      leads: '54',
      conversao: '28,3%',
      automacoes: '180 ações/dia',
    },
  }[period]

  const kanbanColumns = [
    {
      title: 'Novos Leads',
      count: 14,
      color: 'border-amber-500/30 bg-amber-950/10',
      badge: 'Score AI 92+',
      items: [
        { name: 'Grupo Alfa Corp', value: 'R$ 85.000', tag: 'WhatsApp Auto', origin: 'Meta Ads' },
        { name: 'Tech Solutions SA', value: 'R$ 42.000', tag: 'Qualificado AI', origin: 'Google' },
      ],
    },
    {
      title: 'Em Negociação',
      count: 8,
      color: 'border-[#D4AF37]/50 bg-[#D4AF37]/5',
      badge: 'Reunião Agendada',
      items: [
        {
          name: 'Logística Express',
          value: 'R$ 120.000',
          tag: 'Proposta Enviada',
          origin: 'Inbound',
        },
        { name: 'Rede Farma Plus', value: 'R$ 65.000', tag: 'Follow-up 24h', origin: 'Indicação' },
      ],
    },
    {
      title: 'Fechados / Ganho',
      count: 19,
      color: 'border-emerald-500/40 bg-emerald-950/20',
      badge: 'Conversão 100%',
      items: [
        {
          name: 'Indústria Votoran',
          value: 'R$ 195.000',
          tag: 'Contrato Assinado',
          origin: 'Max 3 Flow',
        },
      ],
    },
  ]

  return (
    <div className="w-full rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-3 sm:p-6 shadow-2xl shadow-[#D4AF37]/10 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-zinc-800/80 gap-3">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-zinc-400 font-mono ml-2 hidden sm:inline">
            max3-control-center.v3.live
          </span>
        </div>

        <div className="flex items-center space-x-2 self-end sm:self-auto">
          <Badge
            variant="outline"
            className="border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/10 flex items-center space-x-1"
          >
            <Sparkles className="w-3 h-3 animate-spin" />
            <span className="text-xs">IA & Automação Ativas</span>
          </Badge>

          <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800 text-xs">
            {(['dia', 'semana', 'mes'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                  period === p
                    ? 'bg-[#D4AF37] text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {p === 'mes' ? 'Mês' : p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5">
        <Card className="bg-zinc-900/80 border-zinc-800/80 hover:border-[#D4AF37]/40 transition-colors">
          <CardContent className="p-3.5">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
              <span>Pipeline Ativo</span>
              <DollarSign className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {metrics.faturamento}
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" /> +32.4% vs mês anterior
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/80 border-zinc-800/80 hover:border-[#D4AF37]/40 transition-colors">
          <CardContent className="p-3.5">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
              <span>Leads Capturados</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {metrics.leads}
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-1" /> 100% integrados
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/80 border-zinc-800/80 hover:border-[#D4AF37]/40 transition-colors">
          <CardContent className="p-3.5">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
              <span>Taxa de Conversão</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {metrics.conversao}
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center mt-1">
              <CheckCircle2 className="w-3 h-3 mr-1" /> +8.2% pós automação
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/80 border-zinc-800/80 hover:border-[#D4AF37]/40 transition-colors">
          <CardContent className="p-3.5">
            <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
              <span>Eficiência Automações</span>
              <Zap className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {metrics.automacoes}
            </div>
            <div className="text-[11px] text-amber-300 flex items-center mt-1">
              <Clock className="w-3 h-3 mr-1" /> Resposta imediata (&lt;3s)
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {kanbanColumns.map((col, idx) => (
          <div
            key={idx}
            className={`rounded-xl border ${col.color} p-3 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-sm text-zinc-100">{col.title}</span>
                  <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-300 font-mono">
                    {col.count}
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-zinc-500" />
              </div>

              <div className="space-y-2">
                {col.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all cursor-pointer shadow-sm group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-xs text-white group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </span>
                      <span className="font-bold text-xs text-emerald-400">{item.value}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800/60 text-[10px]">
                      <span className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px]">
                        {item.origin}
                      </span>
                      <span className="text-[#D4AF37] font-medium flex items-center">
                        <Zap className="w-2.5 h-2.5 mr-0.5" />
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 text-[11px] text-zinc-400 flex items-center justify-between pt-2 border-t border-zinc-800/40">
              <span className="flex items-center text-zinc-400">
                <Filter className="w-3 h-3 mr-1" /> Kanban Automático
              </span>
              <span className="text-[#D4AF37]">{col.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
