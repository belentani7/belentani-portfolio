import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.belentani.es";
  const lastModified = "2026-11-13";
  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified, priority: 1 },
    { url: `${base}/blog`, lastModified, priority: 0.9 },
    ...posts,
  ];
}
