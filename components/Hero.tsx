"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.substring(0, text.length + 1));
          if (text === current) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <span className="text-gradient-gold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden noise-overlay">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(202,138,4,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />
      <Particles />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-neutral-400 tracking-wider uppercase">
              Disponible para proyectos
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gold text-sm tracking-[0.4em] uppercase mb-6 font-display"
          >
            Trust & Safety · AI Evaluation · UX Research
          </motion.p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-display leading-[0.9] tracking-tight">
            <span className="block text-neutral-200">Pedro</span>
            <span className="block text-gradient-gold gradient-animated">
              Belentani
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-neutral-400 mb-4 h-10">
            <TypeWriter
              words={[
                "Metacognición de Alto Nivel",
                "Análisis de Patrones Humanos",
                "Evaluación de IA",
                "Diseño de Sistemas de Confianza",
              ]}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Arquitecto de sistemas de confianza. Analizo comportamiento humano
            con precisión clínica y construyo interfaces que protegen y conectan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-black font-semibold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 flex items-center gap-2"
            >
              Ver proyectos
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl glass text-neutral-300 font-semibold text-sm hover:text-gold hover:border-gold/30 transition-all duration-300"
            >
              Hablemos
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: "8+", label: "Artículos publicados" },
              { value: "5+", label: "Proyectos" },
              { value: "4", label: "Idiomas" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gold font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-neutral-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
