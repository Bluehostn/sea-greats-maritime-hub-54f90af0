import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="Contact | Sea Greats" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-6">{t('contact.title')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-3 p-6 rounded-xl border bg-card/60" onSubmit={(e)=>e.preventDefault()}>
          <Input placeholder={t('contact.name')!} />
          <Input type="email" placeholder={t('contact.email')!} />
          <Input placeholder={t('contact.phone')!} />
          <Textarea placeholder={t('contact.message')!} rows={5} />
          <Button type="submit" variant="hero">{t('contact.send')}</Button>
        </form>
        <aside className="p-6 rounded-xl border bg-card/60">
          <h3 className="font-semibold mb-2">Head Office</h3>
          <p className="text-sm text-muted-foreground">Egypt — Serving all major ports.</p>
          <a className="story-link text-primary mt-3 inline-block" href="https://wa.me/201003328902" target="_blank" rel="noreferrer">WhatsApp: +20 100 332 8902</a>
          <div className="mt-4">
            <iframe title="Sea Greats Map" className="w-full h-64 rounded-md border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Egypt&output=embed"></iframe>
          </div>
        </aside>
      </div>
    </main>
  );
}
