import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      'https://wa.me/5517997194145?text=Ol%C3%A1!%20Quero%20impulsionar%20as%20vendas%20da%20minha%20empresa%20com%20a%20Max%203%20Digital.',
      '_blank',
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute -top-10 right-0 bg-zinc-900 border border-[#D4AF37]/40 text-white text-[11px] font-medium px-3 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Atendimento On-line no WhatsApp ⚡
      </div>

      <button
        onClick={handleClick}
        aria-label="Contato via WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </button>
    </div>
  )
}
