"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Desarrollo",
    icon: "💻",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Python", level: 75 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    title: "Análisis & Confianza",
    icon: "🛡️",
    skills: [
      { name: "Trust & Safety", level: 95 },
      { name: "Threat Intelligence", level: 90 },
      { name: "AI Evaluation", level: 85 },
      { name: "UX Research", level: 80 },
      { name: "Red-teaming", level: 85 },
    ],
  },
  {
    title: "Cognición & Comunicación",
    icon: "🧠",
    skills: [
      { name: "Metacognición", level: 98 },
      { name: "Teoría de la Mente", level: 95 },
      { name: "Análisis de Patrones", level: 95 },
      { name: "Comunicación Estratégica", level: 90 },
      { name: "Escritura Analítica", level: 90 },
    ],
  },
  {
    title: "Herramientas & Diseño",
    icon: "🎨",
    skills: [
      { name: "Framer Motion", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "IA / LLM Tools", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-display">
            Capacidades
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="text-gradient-gold">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-lg text-neutral-200">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gold font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-light rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: ci * 0.1 + si * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
