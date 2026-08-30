"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Cassandra Complex",
    description:
      "Plataforma de salud mental para la comunidad LGBTQ+. Análisis de comportamiento, detección de patrones de riesgo, intervención preventiva.",
    tags: ["Next.js", "TypeScript", "BuildAI", "Análisis"],
    status: "En desarrollo",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Belentani Music",
    description:
      "Producción y distribución musical independiente. R&B, EDM, experimental. Universo visual completo con worldbuilding profesional.",
    tags: ["Audio", "DistroKid", "Producción", "Visual"],
    status: "Activo",
    color: "from-gold/20 to-amber-500/20",
  },
  {
    title: "NOIACORE v3",
    description:
      "Lead prospector automatizado. Sistema de detección de amenazas y análisis de comportamiento para plataformas digitales.",
    tags: ["Python", "FastAPI", "Análisis", "Automatización"],
    status: "Completado",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Portfolio & Blog",
    description:
      "Este sitio. Dark theme, glassmorphism, animaciones fluidas. Blog con artículos sobre Trust & Safety, AI Evaluation y neurociencia.",
    tags: ["Next.js", "Tailwind", "Framer Motion", "Blog"],
    status: "Activo",
    color: "from-gold/20 to-yellow-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-display">
            Trabajo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-gradient-gold">Proyectos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-neutral-200 group-hover:text-gold-light transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-surface-light border border-white/5 text-neutral-400">
                    {p.status}
                  </span>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-lg bg-surface-light/50 border border-white/5 text-neutral-300 group-hover:border-gold/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
