"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Post } from "@/lib/blog";

const categoryColors: Record<string, string> = {
  "Trust & Safety": "from-blue-500/20 to-cyan-500/20",
  "AI Evaluation": "from-purple-500/20 to-pink-500/20",
  "Neurociencia": "from-green-500/20 to-emerald-500/20",
  Psicología: "from-amber-500/20 to-orange-500/20",
};

export default function BlogPreview({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-display">
                Análisis
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient-gold">Blog</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm text-neutral-400 hover:text-gold transition-colors flex items-center gap-1"
            >
              Ver todos
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="glass rounded-2xl p-8 h-full hover:border-gold/20 transition-all duration-500 group relative overflow-hidden">
                    {/* Category gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        categoryColors[post.tags?.[0] || ""] ||
                        "from-gold/10 to-amber-500/10"
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <time className="text-xs text-gold font-mono">
                          {post.date}
                        </time>
                        {post.tags?.[0] && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-surface-light border border-white/5 text-neutral-400">
                            {post.tags[0]}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display font-bold text-lg text-neutral-200 mb-3 group-hover:text-gold-light transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        Leer artículo
                        <svg
                          className="w-3 h-3"
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
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
