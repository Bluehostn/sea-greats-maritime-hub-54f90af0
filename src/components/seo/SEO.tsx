import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  lang?: string;
};

export default function SEO({ title, description = "Sea Greats — Ship Supply & Marine Services in Egypt.", canonical, image, lang = "en" }: SEOProps) {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : "";
  const url = canonical ?? siteUrl;
  const ogImage = image ?? `${siteUrl}/opengraph-image.png`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      {ogImage && <meta name="twitter:image" content={ogImage} />}    
    </Helmet>
  );
}
