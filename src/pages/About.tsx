import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function About() {
  const { i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="About | Sea Greats" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-6">About Sea Greats</h1>
      <p className="text-muted-foreground max-w-3xl">We are Sea Greats, a ship supply and marine services company operating across Egyptian ports. Our mission is to deliver reliable, timely, and compliant solutions for all vessel needs. Vision: sustained excellence and trusted partnerships. Values: integrity, safety, agility, and customer success.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-4 rounded-lg border bg-card/60"><h3 className="font-semibold">Chairman</h3><p className="text-sm text-muted-foreground">MR. Ahmed Saleh</p></div>
        <div className="p-4 rounded-lg border bg-card/60"><h3 className="font-semibold">Emails</h3><p className="text-sm text-muted-foreground">info@seagreats.com • operation@seagreats.com</p></div>
        <div className="p-4 rounded-lg border bg-card/60"><h3 className="font-semibold">Phone / WhatsApp</h3><p className="text-sm text-muted-foreground">+20 100 332 8902</p></div>
      </div>
    </main>
  );
}
