export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://belentani.dev/sitemap.xml",
  };
}
