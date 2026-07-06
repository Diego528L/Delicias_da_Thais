import Image from "next/image";

export default function Home() {
  const whatsappNumber = "5535991443168";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,#ffd7a8_0%,#fff7eb_40%,#fff4ef_100%)] text-[#2d1f1b]">
      <header className="mx-auto w-full max-w-6xl px-6 py-6 md:px-10">
        <nav className="fade-up flex items-center justify-between rounded-full border border-[#e8c9a6] bg-[#fff7ebcc] px-5 py-3 backdrop-blur">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#8d4f2a]">DELICIAS DA THAIS</p>
          <a
            href="#pedido"
            className="rounded-full bg-[#c45a2a] px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#ab4b20]"
          >
            Fazer pedido
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <section className="grid items-center gap-10 pb-20 pt-8 md:grid-cols-2 md:pt-14">
          <div className="space-y-6">
            <p className="fade-up text-xs font-bold tracking-[0.24em] text-[#a65a2d]">CONFEITARIA ARTESANAL</p>
            <h1 className="fade-up text-4xl font-black leading-tight md:text-6xl">
              Onde o afeto
              <span className="block text-[#c45a2a]">vira doce</span>
            </h1>
            <p className="fade-up max-w-xl text-base leading-relaxed text-[#5f3e31] md:text-lg">
              Na Delícias da Thaís, transformamos ingredientes selecionados em momentos inesquecíveis. Cada bolo, doce e sobremesa é feito de forma artesanal, com aquela pitada de carinho que lembra abraço de vó. Seja para celebrar uma grande conquista ou para adoçar o seu dia a dia, nós temos a receita perfeita para você.

✨ Peça o seu e adoce a vida hoje mesmo!
            </p>
            <div className="fade-up flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[#2f7a6b] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Ver cardapio
              </a>
             
            </div>
          </div>

          <div className="fade-up relative mx-auto w-full max-w-md">
            <div className="float-soft absolute -left-6 -top-7 h-20 w-20 rounded-full bg-[#ffe0ba] blur-sm" />
            <div className="float-soft-delayed absolute -bottom-5 -right-4 h-24 w-24 rounded-full bg-[#ffd1cc] blur-sm" />
            <div className="overflow-hidden rounded-4xl border border-[#f0c79f] bg-white p-3 shadow-[0_25px_70px_-35px_rgba(160,80,30,0.45)]">
              <Image
                src="/thais1.jpg"
                alt="Bolo artesanal da Delicias da Thais"
                width={640}
                height={640}
                className="h-115 w-full rounded-3xl object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id="menu" className="space-y-6 pb-20">
          <div className="fade-up flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold md:text-4xl">Nossas Delícias</h2>
            <p className="text-sm font-medium uppercase tracking-wider text-[#8d4f2a]">feito sob encomenda</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm">
              <Image
                src="/shared image (6).jpg"
                alt="Bolo decorado"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Bolos para Festas e Eventos</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Massa leve, recheio cremoso e acabamento elegante para aniversarios e eventos.</p>
            </article>

            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm [animation-delay:120ms]">
              <Image
                src="/shared image (29).jpg"
                alt="Doces finos"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Cestas de Doces Finos</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Brigadeiro gourmet, ninho com frutas e opcoes sazonais para presentear.</p>
            </article>

            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm [animation-delay:220ms]">
              <Image
                src="/shared image (58).jpg"
                alt="Sobremesa artesanal"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Doces de Travessa</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Camadas generosas de puro creme artesanal. Perfeitas para salvar a sua rotina ou brilhar na mesa da sua festa.</p>
            </article>

            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm [animation-delay:320ms]">
              <Image
                src="/shared image (12).jpg"
                alt="Bombons artesanais"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Bombons Artesanais</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Casquinha de chocolate nobre com recheios cremosos para kits e lembrancinhas.</p>
            </article>

            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm [animation-delay:420ms]">
              <Image
                src="/docinhos.jpg"
                alt="Docinhos de festa"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Docinhos de Festa</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Brigadeiro, beijinho e sabores especiais modelados na medida para sua celebração.</p>
            </article>

            <article className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-4 shadow-sm [animation-delay:520ms]">
              <Image
                src="/shared image (22).jpg"
                alt="Ovos de Pascoa artesanais"
                width={420}
                height={300}
                className="h-52 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-4 text-xl font-bold">Ovos de Pascoa</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f3e31]">Ovos recheados e cascas artesanais com sabores especiais para presentear e encantar.</p>
            </article>
          </div>

          <div className="fade-up rounded-3xl border border-[#efcfb0] bg-white p-6 shadow-sm [animation-delay:620ms]">
            <h3 className="text-2xl font-extrabold text-[#8d4f2a]">Cardapio completo</h3>
            <p className="mt-2 text-sm text-[#5f3e31]">Valores base. Para versoes personalizadas, consulte no WhatsApp.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-[#f1d7bc] bg-[#fffaf5] p-4">
                <h4 className="text-base font-bold text-[#6c493b]">Bolos</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#5f3e31]">
                  <li className="flex items-center justify-between"><span>Bolo de festa (2kg)</span><strong>A partir de R$ 130</strong></li>
                  <li className="flex items-center justify-between"><span>Bolo caseiro tradicional</span><strong>R$ 30</strong></li>
                  <li className="flex items-center justify-between"><span>Bento cake</span><strong>R$ 45</strong></li>
                </ul>
              </article>

              <article className="rounded-2xl border border-[#f1d7bc] bg-[#fffaf5] p-4">
                <h4 className="text-base font-bold text-[#6c493b]">Docinhos</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#5f3e31]">
                  <li className="flex items-center justify-between"><span>Brigadeiro gourmet (100 un.)</span><strong>R$ 160</strong></li>
                  <li className="flex items-center justify-between"><span>Docinho tradicional (100 un.)</span><strong>R$ 120</strong></li>
                  <li className="flex items-center justify-between"><span>Caixa degustacao (12 un.)</span><strong>R$ 35</strong></li>
                </ul>
              </article>

              <article className="rounded-2xl border border-[#f1d7bc] bg-[#fffaf5] p-4">
                <h4 className="text-base font-bold text-[#6c493b]">Bombons e cestas</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#5f3e31]">
                  <li className="flex items-center justify-between"><span>Bombom recheado (un.)</span><strong>R$ 9</strong></li>
                  <li className="flex items-center justify-between"><span>Caixa com 6 bombons</span><strong>R$ 24</strong></li>
                  <li className="flex items-center justify-between"><span>Cesta de doces finos</span><strong>A partir de R$ 125</strong></li>
                </ul>
              </article>

              <article className="rounded-2xl border border-[#f1d7bc] bg-[#fffaf5] p-4">
                <h4 className="text-base font-bold text-[#6c493b]">Ovos de Pascoa</h4>
                <ul className="mt-3 space-y-2 text-sm text-[#5f3e31]">
                  <li className="flex items-center justify-between"><span>Ovo de colher 250g</span><strong>R$ 80</strong></li>
                  <li className="flex items-center justify-between"><span>Ovo trufado 350g</span><strong>R$ 120</strong></li>
                  <li className="flex items-center justify-between"><span>Kit mini ovos (4 un.)</span><strong>R$ 60</strong></li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="grid gap-4 pb-20 md:grid-cols-3">
          <div className="fade-up rounded-2xl bg-[#2f7a6b] p-6 text-white">
            <h3 className="text-lg font-bold">Ingredientes selecionados</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#e8fff9]">Sem atalhos:chocolate nobre, frutas frescas e preparo 100% artesanal para garantir o verdadeiro sabor em cada pedaço.</p>
          </div>
          <div className="fade-up rounded-2xl bg-[#c45a2a] p-6 text-white [animation-delay:100ms]">
            <h3 className="text-lg font-bold">Entrega pontual</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#fff1e9]">Organização de agenda:Faça seu pedido com no mínimo 5 dias de antecedência Confirme seu pedido com pagamento de 50% do valor total.</p>
          </div>
          <div className="fade-up rounded-2xl bg-[#8e3a2e] p-6 text-white [animation-delay:200ms]">
            <h3 className="text-lg font-bold">Do seu jeito</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#ffeceb]">Personalizamos sabores, tamanhos e decorações para que cada doce conte a sua história e combine perfeitamente com a sua ocasião.</p>
          </div>
        </section>

        <section id="pedido" className="fade-up overflow-hidden rounded-4xl border border-[#ecc09a] bg-[#fff8f0] p-8 text-center md:p-12">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8d4f2a]">ENCOMENDAS ABERTAS</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Reserve seu pedido com antecedencia</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5f3e31] md:text-base">
            Kits Sob Medida:
Da grande comemoração ao doce da tarde: monte o combo ideal com os seus produtos favoritos. Atendimento prático e rápido direto pelo WhatsApp!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex rounded-full bg-[#2f7a6b] px-7 py-3 text-sm font-bold text-white transition hover:scale-105 hover:bg-[#27685b]"
          >
            Pedir no WhatsApp
          </a>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-8 text-center text-xs text-[#7f5b4d] md:px-10">
        <p>Delicias da Thais • Confeitaria artesanal para momentos especiais</p>
        <p className="mt-2 font-semibold text-[#6c493b]">Endereço: Rua Pedro Maculan, 188 • Bairro-Planalto • Lavras - MG</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block font-semibold text-[#8d4f2a] underline underline-offset-4"
        >
          WhatsApp: +55 35 99144-3168
        </a>
      </footer>
    </div>
  );
}
