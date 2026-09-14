import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const canonicalUrl = "https://pidedipietra.com.tr";
const title = "Pide Di Pietra | Çayırova Pide ve Lahmacun";
const description = "Çayırova'da Murat Usta'nın taş fırınından çıtır pide ve lahmacun. Geleneksel tat, taze malzeme ve aile sıcaklığı. Sipariş: 0547 300 05 05.";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${canonicalUrl}/#restaurant`,
  name: "Pide Di Pietra",
  alternateName: "Pide Di Pietra - Taş Fırında Pide ve Lahmacun",
  description,
  url: canonicalUrl,
  telephone: "+90 547 300 05 05",
  image: `${canonicalUrl}/og-v2.png`,
  logo: `${canonicalUrl}/logo-original.jpeg`,
  servesCuisine: ["Türk Mutfağı", "Pide", "Lahmacun"],
  priceRange: "₺₺",
  hasMenu: `${canonicalUrl}/#menu`,
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Özgürlük Mahallesi Uğur Mumcu Caddesi No: 5/A",
    addressLocality: "Çayırova",
    addressRegion: "Kocaeli",
    postalCode: "41420",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.8294706,
    longitude: 29.378899,
  },
  sameAs: [
    "https://www.instagram.com/pidedipietra/",
    "https://www.google.com/maps/search/?api=1&query=Pide%20Di%20Pietra%20%C3%87ay%C4%B1rova",
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost:3000";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "tr_TR",
      images: [{ url: `${origin}/og-v2.png`, width: 1792, height: 1024, alt: "Pide Di Pietra — Murat Usta'nın taş fırın lezzeti" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og-v2.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
