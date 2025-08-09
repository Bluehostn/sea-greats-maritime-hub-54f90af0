import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

const posts = [
  { title: "Checklist: Provisioning Before Canal Transit", excerpt: "How to prepare your item list and schedule for fast turnarounds.", category: "Operations" },
  { title: "Selecting Mooring Lines for Tankers", excerpt: "Safety and longevity considerations for deck stores.", category: "Deck" },
  { title: "Engine Spares That Save Time", excerpt: "Critical spares to reduce downtime in port.", category: "Engine" },
];

export default function Blog() {
  const { i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="Articles | Sea Greats" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="p-6 border rounded-xl bg-card/60 hover-scale">
            <p className="text-xs uppercase text-muted-foreground">{p.category}</p>
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
