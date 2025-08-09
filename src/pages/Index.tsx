import hero from "@/assets/hero-ocean.jpg";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MarineAssistant from "@/components/assistant/MarineAssistant";

const Index = () => {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <SEO
        title="Sea Greats | Marine Services Egypt"
        description="Ship chandling & marine services covering all Egyptian ports. Provisions, technical stores, bonded, and logistics."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
        lang={i18n.language}
      />

      <section className="relative min-h-[70vh] flex items-center bg-background">
        <img src={hero} alt="Sea Greats hero - ocean vessel" className="absolute inset-0 w-full h-full object-cover opacity-70" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80" />
        <div className="container relative py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight animate-enter max-w-3xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild variant="hero" size="lg" className="hover-scale">
              <Link to="/services">{t("hero.ctaPrimary")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">{t("hero.ctaSecondary")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Provisions", text: "Fresh, frozen and dry stores with cold-chain integrity." },
            { title: "Deck & Engine", text: "ISSA-coded technical stores, tools and spares." },
            { title: "24/7 Ops", text: "Rapid quotations, last-mile delivery at berth or anchorage." }
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-xl border bg-card/60 hover-scale">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <MarineAssistant />
    </main>
  );
};

export default Index;
