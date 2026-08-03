import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { createLead } from '@/services/leads'
import { CheckCircle2, Send, MessageCircle, AlertCircle } from 'lucide-react'

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const errs: { [key: string]: string } = {}
    if (!formData.name.trim()) errs.name = 'Nome é obrigatório.'
    if (!formData.email.trim()) {
      errs.email = 'E-mail é obrigatório.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Insira um e-mail válido.'
    }
    if (!formData.phone.trim()) errs.phone = 'Telefone/WhatsApp é obrigatório.'
    return errs
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    try {
      await createLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setErrors({ global: 'Ocorreu um erro ao enviar. Tente novamente ou use o WhatsApp.' })
    } finally {
      setLoading(false)
    }
  }

  const openWhatsAppNow = () => {
    window.open(
      'https://wa.me/5517997194145?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20no%20site%20da%20Max%203%20Digital.',
      '_blank',
    )
  }

  return (
    <section
      id="contato"
      className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
              Diagnóstico Gratuito
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Pronto para Transformar Seu Negócio em Referência?
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed mb-8">
              Preencha o formulário e receba um diagnóstico exclusivo de marketing, marca e tráfego
              pago. Sem compromisso.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Análise de posicionamento, marca e presença digital</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Demonstração prática do Método A8 e plano de ação</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Atendimento humanizado por especialistas em marketing</span>
              </div>
            </div>
          </div>

          <Card className="bg-black border-[#D4AF37]/30 shadow-2xl p-2 sm:p-6 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Solicitar Diagnóstico Gratuito
              </CardTitle>
              <CardDescription className="text-zinc-400">
                A resposta é rápida. Entraremos em contato no mesmo dia útil.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {success ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-zinc-300">
                    Obrigado pelo contato! Nossos especialistas já receberam seus dados e
                    responderão em breve.
                  </p>
                  <Button
                    onClick={openWhatsAppNow}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Iniciar Conversa no WhatsApp Agora
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errors.global && (
                    <div className="p-3 rounded bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                      {errors.global}
                    </div>
                  )}

                  <div>
                    <Label htmlFor="name" className="text-zinc-300 text-xs">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Ex: Roberto Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 text-white focus:border-[#D4AF37] mt-1"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-[11px] mt-0.5 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-zinc-300 text-xs">
                      E-mail Corporativo *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="roberto@suaempresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 text-white focus:border-[#D4AF37] mt-1"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-[11px] mt-0.5 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-zinc-300 text-xs">
                      Telefone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 text-white focus:border-[#D4AF37] mt-1"
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-[11px] mt-0.5 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-zinc-300 text-xs">
                      Conte brevemente seu momento comercial (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={3}
                      placeholder="Quantos vendedores você possui? Qual o maior desafio atual?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 text-white focus:border-[#D4AF37] mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full gold-gradient-bg text-black font-bold py-6 text-base hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all mt-2"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Solicitação Gratuita
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
