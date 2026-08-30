"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-display">
            Conexión
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">Contacto</span>
          </h2>
          <p className="text-neutral-400 mb-16 max-w-xl">
            ¿Tienes un proyecto que necesita análisis profundo? ¿Una plataforma
            que necesita sistemas de confianza? ¿Una idea que necesita ser
            desafiada? Hablemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-sm text-neutral-200 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-600"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-sm text-neutral-200 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-600"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-sm text-neutral-200 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-600"
                  placeholder="Trust & Safety, AI Eval, Proyecto..."
                />
              </div>
              <div>
                <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-surface-light border border-white/5 rounded-xl px-5 py-4 text-sm text-neutral-200 focus:outline-none focus:border-gold/50 transition-colors resize-none placeholder:text-neutral-600"
                  placeholder="Cuéntame sobre tu proyecto o necesidad..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display font-bold text-lg text-neutral-200 mb-6">
                Directo
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:belentani7pedro@gmail.com"
                  className="flex items-center gap-4 text-neutral-400 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">Email</p>
                    <p className="text-xs text-neutral-500">
                      belentani7pedro@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/pedro-belentani"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 text-neutral-400 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">LinkedIn</p>
                    <p className="text-xs text-neutral-500">
                      /in/pedro-belentani
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/belentani7pedro"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 text-neutral-400 hover:text-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-light flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">GitHub</p>
                    <p className="text-xs text-neutral-500">@belentani7pedro</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display font-bold text-lg text-neutral-200 mb-4">
                Disponible para
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Trust & Safety",
                  "AI Behavioral Eval",
                  "UX Research",
                  "Content Moderation",
                  "Red-teaming",
                  "Análisis de Patrones",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
