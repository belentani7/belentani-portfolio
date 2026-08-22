/* DESIGN: Órbita de Judas — narrativa editorial espacial, roja, calmada y legible. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Disc3, Orbit, Play, Sparkles } from "lucide-react";
import ContactComposer from "@/components/ContactComposer";
import OrbitalScene from "@/components/OrbitalScene";
import VisitorPanel from "@/components/VisitorPanel";

type SectionId = "home" | "artist" | "music" | "studio" | "judas" | "contact";

const navigation: Array<{ id: SectionId; label: string; signal: string }> = [
  { id: "home", label: "Home", signal: "00" },
  { id: "artist", label: "The Artist", signal: "01" },
  { id: "music", label: "Music", signal: "02" },
  { id: "studio", label: "Studio", signal: "03" },
  { id: "judas", label: "Judas", signal: "04" },
  { id: "contact", label: "Contact", signal: "05" },
];

const tracks = [
  ["Mon Amour", "Archivo sonoro"],
  ["Therapist", "Archivo sonoro"],
  ["Apaga a Luz", "Archivo sonoro"],
  ["I Wrote a Song", "Archivo sonoro"],
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const activeIndex = useMemo(
    () => Math.max(0, navigation.findIndex((item) => item.id === activeSection)),
    [activeSection],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const next = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (next) setActiveSection(next.target.id as SectionId);
      },
      { rootMargin: "-42% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const moveTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#home">Saltar al contenido</a>
      <OrbitalScene activeIndex={activeIndex} />

      <header className="site-header">
        <button className="brand-lockup" type="button" onClick={() => moveTo("home")} aria-label="Volver al inicio">
          <span className="brand-mark">B</span>
          <span className="brand-axis" aria-hidden="true" />
          <span className="brand-name">/ BELENTANI</span>
        </button>
        <div className="header-status"><span /> JUDAS / SIGNAL ACTIVE</div>
      </header>

      <nav className="orbit-nav" aria-label="Capítulos de la experiencia">
        <p className="orbit-nav__title">ZION / ORBIT</p>
        <ol>
          {navigation.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={activeSection === item.id ? "is-active" : ""}
                onClick={() => moveTo(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <span className="orbit-nav__signal">{item.signal}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <main>
        <section id="home" data-orbit="00" className="story-section story-section--hero" aria-labelledby="home-title">
          <div className="story-section__meta">TRANSMISSION / 2026</div>
          <div className="hero-copy">
            <p className="eyebrow">next release / judas</p>
            <h1 id="home-title">La señal no llegó desde lejos.<br /><em>La construimos aquí.</em></h1>
            <p className="hero-copy__lead">BELENTANI abre una nueva órbita: voz, imagen y una mitología de ciencia ficción que se escucha antes de explicarse.</p>
            <div className="hero-actions">
              <button className="signal-button" type="button" onClick={() => moveTo("judas")}>Entrar en la órbita <ArrowUpRight size={17} /></button>
              <button className="text-button" type="button" onClick={() => moveTo("music")}>Explorar música <Play size={15} fill="currentColor" /></button>
            </div>
          </div>
          <div className="hero-footnote"><ArrowDown size={14} /> scroll para navegar por la órbita</div>
        </section>

        <section id="artist" data-orbit="01" className="story-section" aria-labelledby="artist-title">
          <div className="story-section__meta">01 / THE ARTIST</div>
          <div className="chapter-grid chapter-grid--artist">
            <div>
              <p className="eyebrow">archivo recuperado</p>
              <h2 id="artist-title">Una voz en movimiento entre ciudades, géneros y símbolos.</h2>
            </div>
            <div className="chapter-copy">
              <p>Pedro Belentani desarrolla un universo artístico situado entre el R&amp;B, el pop y la electrónica experimental. La música no aparece aislada: convive con imagen, performance y una escritura de mundo propia.</p>
              <p>Desde Barcelona, el proyecto mira hacia São Paulo y Recife como puntos de una misma ruta creativa. Esta web reúne esa trayectoria como un archivo vivo, no como una biografía cerrada.</p>
              <button className="text-button" type="button" onClick={() => moveTo("studio")}>Ver el proceso <ArrowUpRight size={15} /></button>
            </div>
          </div>
          <aside className="quote-block">“La órbita no es una fuga. Es una forma de volver con otra voz.”</aside>
        </section>

        <section id="music" data-orbit="02" className="story-section" aria-labelledby="music-title">
          <div className="story-section__meta">02 / MUSIC</div>
          <div className="chapter-grid">
            <div>
              <p className="eyebrow">sonic archive</p>
              <h2 id="music-title">Canciones como coordenadas.</h2>
              <p className="section-intro">Una selección de títulos que dibuja el paso entre la intimidad vocal, el pulso electrónico y la nueva etapa Judas.</p>
            </div>
            <ol className="track-list">
              {tracks.map(([track, description], index) => (
                <li key={track}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{track}</strong>
                  <em>{description}</em>
                  <Disc3 size={17} />
                </li>
              ))}
            </ol>
          </div>
          <p className="disclosure">Los enlaces de streaming se añadirán cuando se compartan las URLs oficiales.</p>
        </section>

        <section id="studio" data-orbit="03" className="story-section" aria-labelledby="studio-title">
          <div className="story-section__meta">03 / STUDIO</div>
          <div className="chapter-grid chapter-grid--studio">
            <div>
              <p className="eyebrow">process / not a preset</p>
              <h2 id="studio-title">El estudio como lugar de traducción.</h2>
            </div>
            <div className="process-list">
              <article><span>01</span><h3>Voz</h3><p>La melodía arranca como una presencia física: cercana, respirada y sin pulir de más.</p></article>
              <article><span>02</span><h3>Textura</h3><p>Sintetizadores, silencios y capas vocales convierten el gesto emocional en arquitectura sonora.</p></article>
              <article><span>03</span><h3>Imagen</h3><p>Las piezas visuales no ilustran la canción: extienden su tensión hacia otra dimensión.</p></article>
            </div>
          </div>
        </section>

        <section id="judas" data-orbit="04" className="story-section story-section--judas" aria-labelledby="judas-title">
          <div className="story-section__meta">04 / JUDAS</div>
          <div className="judas-layout">
            <div>
              <p className="eyebrow">mythology / artistic fiction</p>
              <h2 id="judas-title">El Guardián, el Artefacto y una llave que cambia de manos.</h2>
            </div>
            <div className="chapter-copy">
              <p><strong>Judas</strong> es una mitología artística de ciencia ficción. San Pedro aparece como figura de ancla; Judas, como una fuerza de ambición y fractura; el Artefacto, como aquello que una voz protege cuando el relato se vuelve inestable.</p>
              <p>La historia no describe personas reales ni diagnostica identidades. Es una ficción sobre lealtad, deseo y el coste de intentar poseer una señal que no se puede controlar.</p>
              <div className="interference-card"><Sparkles size={18} /><span>INTERFERENCIA DETECTADA</span><p>La señal se fragmenta, pero la órbita permanece.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" data-orbit="05" className="story-section story-section--contact" aria-labelledby="contact-title">
          <div className="story-section__meta">05 / CONTACT</div>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">open channel</p>
              <h2 id="contact-title">Escribe desde tu punto de la órbita.</h2>
              <p className="section-intro">Para management, colaboraciones, prensa o una idea que necesite llegar con precisión.</p>
              <p className="contact-note">El destinatario oficial de correo se añadirá cuando se proporcione. Hasta entonces, el formulario abre un borrador local y no guarda información.</p>
            </div>
            <ContactComposer />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 B / BELENTANI</span>
        <span>JUDAS / ORBITAL EDITION</span>
        <button type="button" onClick={() => moveTo("home")}>Volver a la señal <Orbit size={15} /></button>
      </footer>

      <VisitorPanel />
    </div>
  );
}
