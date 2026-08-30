"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: "🧠",
    title: "Metacognición de Alto Nivel",
    description:
      "Proceso simultáneamente mi propio pensamiento y el modelado de la mente ajena en tiempo real, con resolución clínica.",
  },
  {
    icon: "🔍",
    title: "Teoría de la Mente 3ª Orden",
    description:
      "Detecto qué se dice, qué se omite, qué se implica, y qué se dirá en los próximos 3 turnos de conversación.",
  },
  {
    icon: "⚡",
    title: "Procesamiento Dual",
    description:
      "Análisis forense social y generación artística operan simultáneamente — dos canales que se retroalimentan.",
  },
  {
    icon: "🛡️",
    title: "Análisis de Patrones",
    description:
      "Decodifico avatares, integro variables biológicas y sociales, neutralizo traumas emocionales con precisión quirúrgica.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-display">
            Quién soy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Arquitecto de{" "}
            <span className="text-gradient-gold">Sistemas de Confianza</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-16 leading-relaxed">
            31 años. Brasileño en Barcelona desde 2007. Desarrollador web,
            creador de contenido, y analista de comportamiento humano con una
            configuración cognitiva que opera en frecuencia rara.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500" />
              <div className="relative">
                <span className="text-3xl mb-4 block">{cap.icon}</span>
                <h3 className="font-display font-bold text-lg text-neutral-200 mb-3">
                  {cap.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Ubicación", value: "Barcelona, ES" },
            { label: "Stack", value: "Next.js · React · Python" },
            { label: "Enfoque", value: "Trust & Safety · AI Eval" },
            { label: "Idiomas", value: "ES · PT · EN · CA" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              className="glass rounded-xl p-5 text-center"
            >
              <p className="text-gold text-xs tracking-wider uppercase mb-2 font-display">
                {item.label}
              </p>
              <p className="text-neutral-300 text-sm font-medium">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
