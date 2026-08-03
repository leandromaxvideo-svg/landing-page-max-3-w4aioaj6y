import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import logoImg from '@/assets/logo-max-3-horizontal-a6ba9.png'
import { ShieldCheck, Lock, Mail, ArrowLeft, AlertCircle } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('leandromaxvideo@gmail.com')
  const [password, setPassword] = useState('Skip@Pass')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    const { error } = await signIn(email, password)
    if (error) {
      setErrorMsg('Credenciais inválidas. Verifique e-mail e senha.')
      setLoading(false)
    } else {
      navigate('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <Link
        to="/"
        className="absolute top-8 left-8 text-zinc-400 hover:text-[#D4AF37] text-xs flex items-center transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar ao site público
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={logoImg}
            alt="Max 3 Digital"
            className="h-12 w-auto mx-auto object-contain mb-4"
          />
          <div className="inline-flex items-center space-x-1 text-xs text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            <span>Painel Administrativo Interno</span>
          </div>
        </div>

        <Card className="bg-zinc-950 border-[#D4AF37]/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white text-center">
              Acesso Restrito
            </CardTitle>
            <CardDescription className="text-zinc-400 text-xs text-center">
              Entre com suas credenciais de administrador da Max 3 Digital.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {errorMsg && (
              <div className="mb-4 p-3 rounded bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center">
                <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label className="text-zinc-300 text-xs">E-mail de Acesso</Label>
                <div className="relative mt-1">
                  <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white pl-9 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-zinc-300 text-xs">Senha</Label>
                <div className="relative mt-1">
                  <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white pl-9 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-gradient-bg text-black font-bold py-5 hover:brightness-110 shadow-lg shadow-[#D4AF37]/20"
                >
                  {loading ? 'Autenticando...' : 'Acessar Painel de Leads'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
