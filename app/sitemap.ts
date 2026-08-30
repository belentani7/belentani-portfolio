import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const base = "https://belentani.dev";
  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.9 },
    ...posts,
  ];
}
