import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Pedro Belentani`, description: post.excerpt };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <article className="min-h-screen pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <Link href="/blog" className="text-gold hover:text-gold-light text-sm mb-8 inline-block">
        &larr; Volver al blog
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <time className="text-sm text-gold">{post.date}</time>
          {post.tags?.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold-light">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
      </header>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
