export function TeamSection() {
  const team = [
    {
      name: 'Leandro Pelegrini',
      role: 'Fundador e responsável pelo marketing dos clientes',
      photo: 'https://img.usecurling.com/ppl/large?gender=male&seed=leandro-pelegrini',
      bio: 'Vinte e sete anos de audiovisual, quatorze deles dirigindo em televisão. É quem conduz o diagnóstico, define o posicionamento e apresenta os números para o dono do negócio todo mês.',
    },
    {
      name: 'Talita',
      role: 'Estrategista de marketing digital',
      photo: 'https://img.usecurling.com/ppl/large?gender=female&seed=talita',
      bio: 'Responsável por toda a estratégia digital da empresa, pela construção de marca e pela condução dos projetos. É quem garante que o que foi definido no diagnóstico chegue inteiro na execução.',
    },
  ]

  return (
    <section
      id="equipe"
      className="py-24 bg-black text-white relative border-t border-zinc-900 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Quem está por trás
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4 leading-snug">
            Duas pessoas com <span className="gold-gradient-text">nome e rosto</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Você não vai falar com um atendente diferente a cada mês. Vai falar com quem decide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 mb-6 group-hover:border-[#D4AF37] transition-all duration-300">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#D4AF37] mb-4 leading-relaxed">
                  {member.role}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
