/* DESIGN: Órbita de Judas — transparencia técnica local, no vigilancia ni rastreo. */
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Radio } from "lucide-react";

type VisitorSnapshot = {
  browser: string;
  viewport: string;
  locale: string;
  motion: string;
};

function readBrowser() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Edg/")) return "Microsoft Edge";
  if (userAgent.includes("Firefox/")) return "Firefox";
  if (userAgent.includes("Chrome/")) return "Chrome";
  if (userAgent.includes("Safari/")) return "Safari";
  return "Navegador desconocido";
}

export default function VisitorPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [snapshot, setSnapshot] = useState<VisitorSnapshot>({
    browser: "Leyendo localmente…",
    viewport: "—",
    locale: "—",
    motion: "—",
  });

  useEffect(() => {
    const updateSnapshot = () => {
      setSnapshot({
        browser: readBrowser(),
        viewport: `${window.innerWidth} × ${window.innerHeight}`,
        locale: navigator.language || "No disponible",
        motion: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "Reducido"
          : "Normal",
      });
    };

    updateSnapshot();
    window.addEventListener("resize", updateSnapshot);
    return () => window.removeEventListener("resize", updateSnapshot);
  }, []);

  return (
    <aside className={`visitor-panel ${isOpen ? "is-open" : ""}`} aria-label="Estado local de la experiencia">
      <button
        className="visitor-panel__toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span><Radio size={14} /> señal local</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </button>
      {isOpen && (
        <div className="visitor-panel__content">
          <p className="eyebrow">telemetría de esta sesión</p>
          <dl>
            <div><dt>Navegador</dt><dd>{snapshot.browser}</dd></div>
            <div><dt>Ventana</dt><dd>{snapshot.viewport}</dd></div>
            <div><dt>Idioma</dt><dd>{snapshot.locale}</dd></div>
            <div><dt>Movimiento</dt><dd>{snapshot.motion}</dd></div>
            <div><dt>IP</dt><dd>No recopilada</dd></div>
          </dl>
          <p className="visitor-panel__note">Esta página no intenta localizarte ni simula un hackeo real.</p>
        </div>
      )}
    </aside>
  );
}
