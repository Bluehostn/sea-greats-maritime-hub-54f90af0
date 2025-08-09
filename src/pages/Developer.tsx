import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function Developer() {
  const { i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="Developer | Bluehostn" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-4">Developer — Bluehostn</h1>
      <p className="text-muted-foreground max-w-3xl">This site is developed and maintained by Bluehostn. For partnerships and tech support, please get in touch.</p>
      <a className="story-link text-primary mt-4 inline-block" href="mailto:contact@bluehostn.com">contact@bluehostn.com</a>
    </main>
  );
}
