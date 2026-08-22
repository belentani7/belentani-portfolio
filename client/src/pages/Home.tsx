/* DESIGN: Órbita de Judas — portfolio primero; el mundo orbital organiza, no sustituye, la obra. */
import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, ChevronDown, Disc3, Orbit, Play, SlidersHorizontal } from "lucide-react";
import ContactComposer from "@/components/ContactComposer";
import OrbitalScene from "@/components/OrbitalScene";
import VisitorPanel from "@/components/VisitorPanel";

type SectionId = "home" | "work" | "artist" | "judas" | "contact";
type ProjectCategory = "music" | "visual" | "studio";
type Project = {
  title: string;
  category: ProjectCategory;
  format: string;
  year: string;
  role: string;
  status: string;
  description: string;
  code: string;
  href?: string;
  linkLabel?: string;
  featured?: boolean;
};

const navigation: Array<{ id: SectionId; label: string; signal: string }> = [
  { id: "home", label: "Home", signal: "00" },
  { id: "work", label: "Selected Work", signal: "01" },
  { id: "artist", label: "The Artist", signal: "02" },
  { id: "judas", label: "Judas", signal: "03" },
  { id: "contact", label: "Contact", signal: "04" },
];

const projects: Project[] = [
  {
    title: "Judas Era",
    category: "visual",
    format: "Release world / visual concept",
    year: "2026 / forthcoming",
    role: "Artist, concept & narrative",
    status: "Archivo activo · enlace oficial pendiente",
    description: "Un universo de canción, imagen y ficción artística que convierte la órbita en escenario para la próxima etapa de BELENTANI.",
    code: "ORB-04",
    featured: true,
  },
  {
    title: "Mon Amour",
    category: "music",
    format: "Single",
    year: "2025",
    role: "Artist",
    status: "Escucha oficial por añadir",
    description: "Una pieza de archivo donde la melodía íntima y la textura electrónica se encuentran en un mismo pulso.",
    code: "SON-01",
    href: "https://open.spotify.com/artist/2bU5Ir70YHHuUnq2f3WCYl",
    linkLabel: "Abrir perfil en Spotify",
  },
  {
    title: "Therapist",
    category: "music",
    format: "Single",
    year: "Archivo",
    role: "Artist",
    status: "Escucha oficial por añadir",
    description: "Una entrada del archivo sonoro centrada en voz, tensión y detalle de producción.",
    code: "SON-02",
    href: "https://open.spotify.com/artist/2bU5Ir70YHHuUnq2f3WCYl",
    linkLabel: "Abrir perfil en Spotify",
  },
  {
    title: "I Wrote a Song",
    category: "music",
    format: "Single",
    year: "Archivo",
    role: "Artist",
    status: "Escucha oficial por añadir",
    description: "Composición en la frontera entre canción pop, gesto confesional y electrónica de baja luz.",
    code: "SON-03",
    href: "https://open.spotify.com/intl-es/album/6Z44Lel2ej96S9JGkwmJWi",
    linkLabel: "Escuchar en Spotify",
  },
  {
    title: "Venom",
    category: "visual",
    format: "Visual archive",
    year: "Archivo",
    role: "Artist / visual direction",
    status: "Material visual por incorporar",
    description: "Una ficha reservada para fotografía, vídeo y créditos de la vertiente visual del proyecto.",
    code: "VIS-07",
  },
  {
    title: "Gaze",
    category: "visual",
    format: "Visual archive",
    year: "Archivo",
    role: "Artist / visual direction",
    status: "Material visual por incorporar",
    description: "Archivo de retrato y atmósfera: una pieza visual para documentar la presencia de cada era.",
    code: "VIS-08",
  },
  {
    title: "Studio Transmission",
    category: "studio",
    format: "Collaboration / process",
    year: "Ongoing",
    role: "Artist + production collaborators",
    status: "Créditos por confirmar",
    description: "Un espacio de proceso para registrar colaboraciones, decisiones de producción y el paso de demo a obra.",
    code: "STU-01",
  },
];

const filters: Array<{ id: "all" | ProjectCategory; label: string }> = [
  { id: "all", label: "Todo" },
  { id: "music", label: "Música" },
  { id: "visual", label: "Visual" },
  { id: "studio", label: "Studio" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const [notice, setNotice] = useState("");
  const activeIndex = useMemo(
    () => Math.max(0, navigation.findIndex((item) => item.id === activeSection)),
    [activeSection],
  );
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "all" || project.category === activeFilter),
    [activeFilter],
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
    navigation.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => observer.disconnect();
  }, []);

  const moveTo = (id: SectionId) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const showPending = (title: string) => setNotice(`El enlace oficial de “${title}” todavía no se ha añadido al archivo.`);

  return (
    <div className="site-shell portfolio-shell">
      <a className="skip-link" href="#work">Saltar al portfolio</a>
      <OrbitalScene activeIndex={activeIndex} />

      <header className="site-header">
        <button className="brand-lockup" type="button" onClick={() => moveTo("home")} aria-label="Volver al inicio">
          <span className="brand-mark">B</span><span className="brand-axis" aria-hidden="true" /><span className="brand-name">/ BELENTANI</span>
        </button>
        <div className="header-status"><span /> JUDAS / PORTFOLIO ONLINE</div>
      </header>

      <nav className="orbit-nav" aria-label="Secciones del portfolio">
        <p className="orbit-nav__title">ZION / ARCHIVE</p>
        <ol>
          {navigation.map((item) => (
            <li key={item.id}>
              <button type="button" className={activeSection === item.id ? "is-active" : ""} onClick={() => moveTo(item.id)} aria-current={activeSection === item.id ? "page" : undefined}>
                <span className="orbit-nav__signal">{item.signal}</span><span>{item.label}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <main>
        <section id="home" data-orbit="00" className="story-section portfolio-hero" aria-labelledby="home-title">
          <div className="story-section__meta">BELENTANI / ARTIST PORTFOLIO / 2026</div>
          <div className="portfolio-hero__grid">
            <div className="hero-copy">
              <p className="eyebrow">music · visual · world building</p>
              <h1 id="home-title">Obra en órbita.<br /><em>Archivo abierto.</em></h1>
              <p className="hero-copy__lead">Un portfolio de música, universos visuales y procesos creativos de BELENTANI. La próxima transmisión: <strong>Judas</strong>.</p>
              <div className="hero-actions">
                <button className="signal-button" type="button" onClick={() => moveTo("work")}>Ver trabajos <ArrowDown size={17} /></button>
                <button className="text-button" type="button" onClick={() => moveTo("judas")}>Entrar en Judas <Play size={15} fill="currentColor" /></button>
              </div>
            </div>
            <aside className="hero-ledger" aria-label="Resumen del archivo">
              <p>ARCHIVE INDEX</p>
              <div><strong>{projects.filter((project) => project.category === "music").length}</strong><span>entradas musicales</span></div>
              <div><strong>{projects.filter((project) => project.category === "visual").length}</strong><span>proyectos visuales</span></div>
              <div><strong>01</strong><span>era en transmisión</span></div>
            </aside>
          </div>
        </section>

        <section id="work" data-orbit="01" className="story-section story-section--work" aria-labelledby="work-title">
          <div className="story-section__meta">01 / SELECTED WORK</div>
          <div className="portfolio-heading">
            <div>
              <p className="eyebrow">selected archive</p>
              <h2 id="work-title">Trabajo seleccionado, no decoración.</h2>
            </div>
            <p>Explora cada entrada por formato, estado, rol y contexto. Los enlaces quedan señalados como pendientes hasta que se incorporen las URLs oficiales.</p>
          </div>
          <div className="archive-controls" aria-label="Filtrar proyectos">
            <span><SlidersHorizontal size={15} /> filtrar archivo</span>
            <div role="group" aria-label="Categorías de proyectos">
              {filters.map((filter) => (
                <button key={filter.id} type="button" className={activeFilter === filter.id ? "is-selected" : ""} onClick={() => setActiveFilter(filter.id)}>{filter.label}</button>
              ))}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className={`project-card ${project.featured ? "project-card--featured" : ""}`} key={project.code}>
                <div className="project-card__top"><span>{project.code}</span><span>{project.year}</span></div>
                <div className="project-card__visual" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className="project-card__body">
                  <p className="eyebrow">{project.format}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <footer className="project-card__footer">
                  <span>{project.role}</span>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel ?? `Abrir ${project.title}`} (abre en una nueva pestaña)`}><ArrowUpRight size={16} /></a>
                  ) : (
                    <button type="button" onClick={() => showPending(project.title)} aria-label={`Ver enlace de ${project.title}`}><ArrowUpRight size={16} /></button>
                  )}
                </footer>
                <p className="project-card__status"><span />{project.status}</p>
              </article>
            ))}
          </div>
          {notice && <p className="archive-notice" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Cerrar aviso">×</button></p>}
        </section>

        <section id="artist" data-orbit="02" className="story-section story-section--profile" aria-labelledby="artist-title">
          <div className="story-section__meta">02 / THE ARTIST</div>
          <div className="profile-grid">
            <div className="profile-stamp"><span>B</span><small>artist profile<br />updated / 2026</small></div>
            <div>
              <p className="eyebrow">biografía breve</p>
              <h2 id="artist-title">Voz, producción e imagen dentro de un mismo lenguaje.</h2>
              <div className="chapter-copy">
                <p>Pedro Belentani trabaja entre R&amp;B, pop y electrónica experimental. Su práctica combina escritura, interpretación y construcción de mundos visuales para convertir cada lanzamiento en una experiencia con contexto.</p>
                <p>Barcelona, São Paulo y Recife aparecen aquí como referencias creativas de una misma ruta, no como una cronología cerrada. Para prensa o bookings, este bloque puede ampliarse con una bio oficial y un press kit.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="judas" data-orbit="03" className="story-section story-section--judas" aria-labelledby="judas-title">
          <div className="story-section__meta">03 / JUDAS</div>
          <div className="judas-layout">
            <div><p className="eyebrow">upcoming release world</p><h2 id="judas-title">Una era, una pieza de portfolio, un universo en desarrollo.</h2></div>
            <div className="chapter-copy">
              <p><strong>Judas</strong> reúne música, lenguaje visual y ficción artística en una nueva etapa de BELENTANI. El Guardián, el Artefacto y la órbita son herramientas narrativas para sostener las piezas, no afirmaciones sobre personas reales.</p>
              <dl className="project-facts"><div><dt>Formato</dt><dd>Release world / música + visual</dd></div><div><dt>Rol</dt><dd>Artista · concepto · narrativa</dd></div><div><dt>Estado</dt><dd>En desarrollo / 2026</dd></div></dl>
              <div className="interference-card"><Orbit size={18} /><span>JUDAS / SIGNAL HELD</span><p>El material oficial, fecha y enlaces se integrarán en esta ficha cuando estén disponibles.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" data-orbit="04" className="story-section story-section--contact" aria-labelledby="contact-title">
          <div className="story-section__meta">04 / CONTACT</div>
          <div className="contact-grid">
            <div><p className="eyebrow">open channel</p><h2 id="contact-title">Contacto para colaboraciones, management y prensa.</h2><p className="section-intro">El archivo está listo para incorporar un correo de booking y un press kit descargable.</p><div className="social-links"><a href="https://open.spotify.com/artist/2bU5Ir70YHHuUnq2f3WCYl" target="_blank" rel="noreferrer">Spotify <ArrowUpRight size={14} /></a><a href="https://www.instagram.com/belentani_/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div><p className="contact-note">El formulario abre un borrador local y no guarda datos. Añade un destinatario oficial antes de usarlo como canal de contacto público.</p></div>
            <ContactComposer />
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 B / BELENTANI</span><span>JUDAS / PORTFOLIO ARCHIVE</span><button type="button" onClick={() => moveTo("work")}>Explorar trabajos <Orbit size={15} /></button></footer>
      <VisitorPanel />
    </div>
  );
}
