import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient-gold">Blog</span>
      </h1>
      <p className="text-neutral-400 mb-12 text-lg">Artículos sobre tecnología, diseño y más.</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article className="glass rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <time className="text-sm text-gold">{post.date}</time>
                {post.tags?.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold-light">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-gold-light transition-colors">
                {post.title}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
