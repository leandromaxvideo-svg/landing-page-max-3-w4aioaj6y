import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { useRealtime } from '@/hooks/use-realtime'
import { getLeads, updateLeadStatus, deleteLead, LeadItem } from '@/services/leads'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import logoImg from '@/assets/logo-max-3-horizontal-a6ba9.png'
import {
  Users,
  Search,
  LogOut,
  Phone,
  Mail,
  Calendar,
  Trash2,
  Download,
  RefreshCw,
} from 'lucide-react'

export default function AdminDashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [leads, setLeads] = useState<LeadItem[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('todos')

  const fetchLeads = async () => {
    try {
      const data = await getLeads()
      setLeads(data)
    } catch (err) {
      // Quiet fail if error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLeads()
  }, [])

  useRealtime<LeadItem>('leads', () => {
    fetchLeads()
  })

  const handleStatusChange = async (id: string, newStatus: LeadItem['status']) => {
    try {
      await updateLeadStatus(id, newStatus)
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)))
    } catch (err) {
      //
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja remover este lead?')) {
      try {
        await deleteLead(id)
        setLeads((prev) => prev.filter((l) => l.id !== id))
      } catch (err) {
        //
      }
    }
  }

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  const filteredLeads = leads.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      (item.phone && item.phone.includes(search))
    const matchesStatus = statusFilter === 'todos' || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const exportCSV = () => {
    const headers = 'Nome,Email,Telefone,Mensagem,Status,Data\n'
    const rows = filteredLeads
      .map(
        (l) =>
          `"${l.name}","${l.email}","${l.phone || ''}","${(l.message || '').replace(/"/g, '""')}","${l.status}","${l.created}"`,
      )
      .join('\n')

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads_max3_${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-950 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logoImg} alt="Max 3 Digital" className="h-8 w-auto object-contain" />
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
            Painel Gestor de Leads
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-xs text-zinc-400 hidden sm:inline">
            Usuário: <strong className="text-white">{user?.email || 'Admin'}</strong>
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleSignOut}
            className="border-zinc-800 text-zinc-300 hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Total de Leads</p>
                <p className="text-2xl font-bold text-white mt-1">{leads.length}</p>
              </div>
              <Users className="w-8 h-8 text-[#D4AF37]" />
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Leads Novos</p>
                <p className="text-2xl font-bold text-amber-400 mt-1">
                  {leads.filter((l) => l.status === 'novo').length}
                </p>
              </div>
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Em Atendimento</p>
                <p className="text-2xl font-bold text-blue-400 mt-1">
                  {leads.filter((l) => l.status === 'em_atendimento').length}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400">Convertidos</p>
                <p className="text-2xl font-bold text-emerald-400 mt-1">
                  {leads.filter((l) => l.status === 'convertido').length}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-zinc-950 border-zinc-800">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
            <CardTitle className="text-lg font-bold text-white flex items-center">
              Leads Capturados
            </CardTitle>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <Input
                  placeholder="Buscar por nome, email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-zinc-900 border-zinc-800 text-white pl-9 text-xs"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-36 bg-zinc-900 border-zinc-800 text-white text-xs">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800 text-white text-xs">
                  <SelectItem value="todos">Todos Status</SelectItem>
                  <SelectItem value="novo">Novo</SelectItem>
                  <SelectItem value="em_atendimento">Em Atendimento</SelectItem>
                  <SelectItem value="convertido">Convertido</SelectItem>
                  <SelectItem value="arquivado">Arquivado</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={fetchLeads}
                className="border-zinc-800 text-zinc-300"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </Button>

              <Button
                onClick={exportCSV}
                size="sm"
                className="gold-gradient-bg text-black font-semibold text-xs"
              >
                <Download className="w-3.5 h-3.5 mr-1" /> CSV
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-zinc-500">Carregando leads...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-8 text-center text-zinc-500">Nenhum lead encontrado.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-300">
                  <thead className="bg-zinc-900 text-zinc-400 font-semibold uppercase tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="p-4">Nome & Contato</th>
                      <th className="p-4">Mensagem</th>
                      <th className="p-4">Data</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-zinc-900/50 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{lead.name}</div>
                          <div className="flex items-center text-zinc-400 mt-1 space-x-3 text-[11px]">
                            <span className="flex items-center">
                              <Mail className="w-3 h-3 mr-1 text-[#D4AF37]" /> {lead.email}
                            </span>
                            {lead.phone && (
                              <a
                                href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-emerald-400 hover:underline"
                              >
                                <Phone className="w-3 h-3 mr-1" /> {lead.phone}
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="p-4 max-w-xs truncate text-zinc-400">
                          {lead.message || (
                            <span className="text-zinc-600 italic">Sem mensagem</span>
                          )}
                        </td>
                        <td className="p-4 whitespace-nowrap text-zinc-500">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(lead.created).toLocaleDateString('pt-BR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: '2-digit',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </td>
                        <td className="p-4">
                          <Select
                            value={lead.status || 'novo'}
                            onValueChange={(val) =>
                              handleStatusChange(lead.id, val as LeadItem['status'])
                            }
                          >
                            <SelectTrigger className="w-32 h-8 bg-zinc-900 border-zinc-800 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-900 border-zinc-800 text-white text-xs">
                              <SelectItem value="novo">Novo</SelectItem>
                              <SelectItem value="em_atendimento">Em Atendimento</SelectItem>
                              <SelectItem value="convertido">Convertido</SelectItem>
                              <SelectItem value="arquivado">Arquivado</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="p-4 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(lead.id)}
                            className="text-zinc-500 hover:text-red-400 hover:bg-zinc-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
