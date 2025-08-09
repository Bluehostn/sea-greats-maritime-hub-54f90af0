import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";
import provisions from "@/assets/gallery-provisions.jpg";
import ropes from "@/assets/gallery-ropes-tools.jpg";
import engine from "@/assets/gallery-engine-spares.jpg";
import bridge from "@/assets/gallery-bridge-galley.jpg";

export default function Gallery() {
  const { i18n } = useTranslation();
  const images = [
    { src: provisions, alt: "Ship provisions - fruits and vegetables" },
    { src: ropes, alt: "Ropes and technical stores" },
    { src: engine, alt: "Engine room spares and lubricants" },
    { src: bridge, alt: "Bridge and galley supplies" },
  ];
  return (
    <main className="container py-12">
      <SEO title="Gallery | Sea Greats" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-6">Media Gallery</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <figure key={i} className="rounded-xl overflow-hidden border bg-card/60 hover-scale">
            <img src={img.src} alt={img.alt} loading={i>0? 'lazy':'eager'} className="w-full h-56 object-cover" />
            <figcaption className="p-3 text-sm text-muted-foreground">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
