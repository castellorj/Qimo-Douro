"use client";
import { useState } from "react";

const WA = "https://wa.me/5521999717040?text=Ol%C3%A1%2C%20quero%20receber%20os%20detalhes%20da%20viagem%20Douro%20%26%20Salamanca%202027";

const days: [string, string, string, string][] = [
  ["01", "Porto", "Chegada ao Porto, traslado e embarque à tarde no Emerald Radiance. À noite, jantar de boas-vindas a bordo.", "/images/douro-hero-desktop.png"],
  ["02", "Pinhão", "Dia de navegação pelo Vale do Douro, entre vinhedos em socalcos e paisagens reconhecidas como Patrimônio Mundial da UNESCO.", "/images/douro-hero-desktop-v2.png"],
  ["03", "Vega de Terrón", "Visita a uma quinta histórica com degustação de vinhos. Caminhada pelos vinhedos ou caiaque no rio antes da navegação à fronteira.", "/images/adega-degustacao.png"],
  ["04", "Salamanca", "Excursão à cidade histórica de Salamanca: o centro antigo, a pedra dourada de Castela e seus principais monumentos.", "/images/salamanca-sol.png"],
  ["05", "Castelo Rodrigo", "A vila medieval sobre o vale e a navegação de regresso até a Régua, com uma experiência a bordo dedicada ao vinho do Porto.", "/images/douro-hero-mobile-v2.png"],
  ["06", "Lamego", "Passeio por Lamego e o Santuário de Nossa Senhora dos Remédios, seguido de almoço em uma quinta tradicional do Douro.", "/images/amigos-douro.png"],
  ["07", "Porto", "Retorno ao Porto para explorar a cidade, suas fortificações e a foz do Douro, com um último cruzeiro pelo rio.", "/images/douro-hero-desktop-v2.png"],
  ["08", "Despedida", "Desembarque após o café da manhã e despedida. O itinerário termina — o inesquecível começa.", "/images/salamanca-sol.png"],
];

const cabins: [string, string, string, string, boolean][] = [
  ["Stateroom", "Riverview · deck inferior", "Janela panorâmica fixa e vista rente ao rio.", "€ 6.810", false],
  ["Suite C", "Panorama · deck principal", "Sacada panorâmica e ambiente flexível.", "€ 8.480", false],
  ["Suite A · B", "Panorama · deck principal", "Sacada panorâmica com mais amplitude.", "€ 8.900", false],
  ["Suite P · R", "Panorama · deck superior", "Sacada ampla e a melhor luz do rio.", "€ 9.320", false],
  ["Owner's One-Bedroom", "Suíte · deck superior", "Sala e quarto separados, o maior conforto a bordo.", "€ 11.000", false],
  ["Riverview Suite", "A mais ampla · deck superior", "Vista frontal privilegiada para o Douro.", "€ 11.630", true],
];

const faqs: [string, string][] = [
  ["O que está incluído", "Sete noites a bordo do Emerald Radiance, pensão completa (café da manhã, almoço e jantar), pacote de bebidas selecionadas nas refeições e a bordo, jantares de boas-vindas e despedida, transfers de chegada e saída no Porto, excursões do roteiro com acompanhamento local, taxas portuárias e gorjetas, além de Wi-Fi durante a navegação."],
  ["O que não está incluído", "Passagens aéreas, bebidas premium e rótulos fora do pacote, tratamentos de spa e lavanderia adicional, excursões opcionais não previstas no roteiro base, serviços pré ou pós-viagem e qualquer item não descrito como incluso."],
  ["Datas e forma de pagamento", "De 13 a 20 de novembro de 2027. Entrada de € 1.000 e saldo em até 10 parcelas, com o primeiro pagamento apenas em agosto de 2026. Condição especial de lançamento: 10% de desconto para as primeiras 20 cabines. Valores por suíte dupla, para duas pessoas."],
  ["Política de cancelamento", "Em caso de revenda da suíte, devolução de 100%. Sem revenda: multa de 25% até 6 meses antes, 50% até 20 semanas antes e 100% até 16 semanas antes. Prazo de devolução: até 60 dias após a solicitação."],
  ["Passaporte e seguro viagem", "Passaporte com validade mínima de 6 meses a partir da data de retorno; brasileiros com passaporte comum entram sem visto por até 90 dias. Seguro viagem obrigatório, com cobertura mínima de € 30.000. Recomendamos chegar ao Porto ao menos um dia antes do embarque."],
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [faq, setFaq] = useState<number | null>(0);

  return (
    <main>
      <header className="siteNav">
        <a className="brand" href="#topo"><b>QiMO</b><small>Douro & Salamanca</small></a>
        <nav className="navLinks">
          <a href="#roteiro">Roteiro</a>
          <a href="#barco">O Navio</a>
          <a href="#galeria">Galeria</a>
          <a href="#valores">Valores</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="topo">
        <picture>
          <source media="(max-width:700px)" srcSet="/images/douro-hero-mobile-v2.png" />
          <img src="/images/douro-hero-desktop-v2.png" alt="Vale do Douro ao entardecer" fetchPriority="high" />
        </picture>
        <div className="heroShade" />
        <div className="heroInner">
          <p className="kicker">13—20 de Novembro de 2027 · Portugal & Espanha</p>
          <h1>Douro <em>&amp; Salamanca</em></h1>
          <p className="heroDek">Sete noites pelo rio, entre vinho, paisagem e história viva. Uma experiência exclusiva da QiMO, do Porto ao coração do Douro Vinhateiro.</p>
        </div>
        <div className="heroScroll"><span>Descubra</span><i /></div>
      </section>

      {/* ROTEIRO */}
      <section className="section itinerary" id="roteiro">
        <div className="sectionHead">
          <p className="kicker">O Roteiro</p>
          <h2>O rio conduz <em>a viagem.</em></h2>
          <p>Oito dias do Porto à fronteira espanhola — e de volta, por uma paisagem que nunca se repete. Toque em cada dia para conhecer.</p>
          <div className="rule" />
        </div>
        <div className="dayRow">
          {days.map((d, i) => (
            <article
              key={d[0]}
              className={"dayCard" + (open === i ? " open" : "")}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <img src={d[3]} alt={d[1]} loading="lazy" />
              <div className="cardShade" />
              <div className="cardInfo">
                <span>Dia {d[0]}</span>
                <h3>{d[1]}</h3>
                <span className="more">Conhecer mais +</span>
              </div>
              <div className="cardBody">
                <span>Dia {d[0]}</span>
                <h3>{d[1]}</h3>
                <p>{d[2]}</p>
                <span className="more">Fechar −</span>
              </div>
            </article>
          ))}
        </div>
        <p className="dayHint">← arraste para ver todo o percurso →</p>
      </section>

      {/* O NAVIO */}
      <section className="ship" id="barco">
        <div className="shipImg">
          <img src="/images/adega-degustacao.png" alt="Interior do Emerald Radiance" loading="lazy" />
          <span>Star-Ship de luxo fluvial</span>
        </div>
        <div className="shipCopy">
          <p className="kicker">O Navio</p>
          <h2>Emerald Radiance</h2>
          <p>Um Star-Ship boutique concebido especialmente para o Rio Douro, unindo design contemporâneo, serviço atento e conforto absoluto. A luz natural, as vistas do rio e o ritmo tranquilo tornam o próprio percurso parte essencial da experiência.</p>
          <div className="shipStats">
            <div><b>292</b><span>pés de comprimento</span></div>
            <div><b>7</b><span>noites a bordo</span></div>
            <div><b>2</b><span>países</span></div>
          </div>
          <ul className="shipList">
            <li>Suítes elegantes com vista para o rio</li>
            <li>Lounge panorâmico e sun deck</li>
            <li>Piscina interna, spa e academia</li>
            <li>Restaurante e alta gastronomia a bordo</li>
            <li>Serviço personalizado e discreto</li>
          </ul>
        </div>
      </section>

      {/* GALERIA */}
      <section className="section gallery" id="galeria">
        <div className="sectionHead">
          <p className="kicker">Edições Anteriores</p>
          <h2>Do Atlântico <em>ao Douro.</em></h2>
          <p>Depois de duas edições inesquecíveis navegando pelo Adriático, a QiMO leva sua curadoria ao coração de Portugal. Foram dois anos reunindo mais de 300 viajantes em encontros marcados por exclusividade, cultura e celebração.</p>
        </div>
        <div className="galleryGrid">
          <figure className="g1"><img src="/images/douro-hero-desktop.png" alt="Vale do Douro" loading="lazy" /></figure>
          <figure className="g2"><img src="/images/amigos-douro.png" alt="Encontros no Douro" loading="lazy" /></figure>
          <figure className="g3"><img src="/images/adega-degustacao.png" alt="Degustação em quinta" loading="lazy" /></figure>
          <figure className="g4"><img src="/images/salamanca-sol.png" alt="Salamanca ao sol" loading="lazy" /></figure>
          <figure className="g5"><img src="/images/douro-hero-desktop-v2.png" alt="Rio Douro" loading="lazy" /></figure>
        </div>
      </section>

      {/* VALORES */}
      <section className="section cabins" id="valores">
        <div className="sectionHead">
          <p className="kicker">Cabines e Investimento</p>
          <h2>Sua casa <em>no rio.</em></h2>
          <p>Categorias distribuídas pelos decks do Emerald Radiance. Valores por suíte dupla, para duas pessoas.</p>
          <div className="rule" />
        </div>
        <div className="cabinGrid">
          {cabins.map((c) => (
            <div key={c[0]} className={"cabinCard" + (c[4] ? " feature" : "")}>
              <span className="deck">{c[1]}</span>
              <h3>{c[0]}</h3>
              <p className="desc">{c[2]}</p>
              <div className="price">{c[3]}<small>por suíte dupla</small></div>
            </div>
          ))}
        </div>
        <div className="payment">
          <p>Entrada de <strong>€ 1.000</strong> e saldo em até 10 parcelas, com o primeiro pagamento apenas em agosto de 2026. Condição especial de lançamento para as primeiras cabines.</p>
          <div className="badge"><b>10%</b><span>desconto nas primeiras 20 cabines</span></div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="section faq" id="duvidas">
        <div className="sectionHead">
          <p className="kicker">Antes de Embarcar</p>
          <h2>Principais <em>dúvidas.</em></h2>
        </div>
        <div className="faqList">
          {faqs.map((f, i) => (
            <div className="faqItem" key={f[0]}>
              <button aria-expanded={faq === i} onClick={() => setFaq(faq === i ? null : i)}>
                <span>{f[0]}</span><b>{faq === i ? "−" : "+"}</b>
              </button>
              {faq === i && <p>{f[1]}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <img src="/images/amigos-douro.png" alt="Encontros à beira do Douro" loading="lazy" />
        <div className="closingShade" />
        <div className="closingInner">
          <p className="kicker">QiMO · Douro 2027</p>
          <h2>Vem sentir <em>o inesquecível?</em></h2>
          <a className="cta" href={WA} target="_blank" rel="noreferrer">Falar com a curadoria ↗</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#topo"><b>QiMO</b><small>Douro & Salamanca · 2027</small></a>
        <div className="fContact">
          <span>Contato · Carla Perdigão</span>
          <a href={WA} target="_blank" rel="noreferrer">(21) 99971-7040</a><br />
          <a href="mailto:contato@qimobr.com">contato@qimobr.com</a>
        </div>
      </footer>
    </main>
  );
}
