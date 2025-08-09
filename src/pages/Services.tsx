import SEO from "@/components/seo/SEO";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { i18n } = useTranslation();
  return (
    <main className="container py-12">
      <SEO title="Sea Greats | Marine Services & Ship Chandling" lang={i18n.language} />
      <h1 className="text-3xl font-bold mb-6">Marine Services & Supplies</h1>
      <p className="text-muted-foreground max-w-3xl mb-8">End-to-end ship chandling across Egypt: provisions, bonded, deck and engine stores, chemicals, safety, cabin and galley, with rapid quotations and compliant delivery at berth or anchorage.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <article className="p-6 rounded-xl border bg-card/60">
          <h2 className="font-semibold text-xl">Provisions</h2>
          <p className="text-sm text-muted-foreground mt-2">Fresh and frozen foods, vegetables & fruits, meat & poultry, dairy, bakery, dry stores, beverages. Cold chain assured.</p>
        </article>
        <article className="p-6 rounded-xl border bg-card/60">
          <h2 className="font-semibold text-xl">Deck Stores</h2>
          <p className="text-sm text-muted-foreground mt-2">Ropes and mooring lines, shackles, wires, anchors, PPE, safety signs, paints and marine chemicals.</p>
        </article>
        <article className="p-6 rounded-xl border bg-card/60">
          <h2 className="font-semibold text-xl">Engine Stores</h2>
          <p className="text-sm text-muted-foreground mt-2">Filters, lubricants, gaskets, valves, pumps, spare parts for M/E & A/E, tools and instruments.</p>
        </article>
        <article className="p-6 rounded-xl border bg-card/60">
          <h2 className="font-semibold text-xl">Bridge & Galley</h2>
          <p className="text-sm text-muted-foreground mt-2">Navigation consumables, stationery, flags, cookware, tableware, hotel and hygiene items.</p>
        </article>
      </div>
    </main>
  );
}
