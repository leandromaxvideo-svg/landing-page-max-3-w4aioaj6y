import { Link } from 'react-router-dom'
import logoImg from '@/assets/logo-max-3-horizontal-a6ba9.png'

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <img src={logoImg} alt="Max 3 Digital Logo" className="h-10 w-auto object-contain" />
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              Max 3 Digital — Transformando pipelines comerciais, criando dashboards de inteligência
              e automatizando processos para empresas de alta performance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solucoes" className="hover:text-[#D4AF37] transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[#D4AF37] transition-colors">
                  Pipeline de Vendas
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#D4AF37] transition-colors">
                  Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Redes & Portal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://instagram.com/max3digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Instagram oficial
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/max3digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  LinkedIn corporativo
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp Business
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#D4AF37] transition-colors">
                  Solicitar diagnóstico
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/admin/login"
                  className="text-zinc-500 hover:text-[#D4AF37] transition-colors"
                >
                  Área do Cliente / Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Max 3 Digital. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">
            Desenvolvido com excelência comercial & design de alta conversão.
          </p>
        </div>
      </div>
    </footer>
  )
}
