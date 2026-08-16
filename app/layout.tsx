import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import "./globals.css";
import { CLINIC } from "@/lib/clinic";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Baskaran Clinic | The Clinic Melur Loves",
    template: "%s | Baskaran Clinic",
  },
  description:
    "Baskaran Clinic — the famous local clinic Melur patients prefer. Personal care on Alagar Kovil Road. Call +91 80988 59590.",
  keywords: [
    "Baskaran Clinic Melur",
    "best clinic Melur",
    "clinic Melur patients like",
    "famous doctor Melur",
    "Alagar Kovil Road clinic",
  ],
  openGraph: {
    title: "Baskaran Clinic | The Clinic Melur Loves",
    description:
      "Famous in Melur. Preferred by local families. One trusted clinic on Alagar Kovil Road.",
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: CLINIC.name,
  alternateName: "Baskaran Clinic Melur",
  description:
    "The well-known local clinic Melur families prefer — personal medical consultation at a single Alagar Kovil Road location.",
  url: "https://baskaranclinic.example",
  telephone: CLINIC.phoneTel,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.addressLine,
    addressLocality: "Melur",
    addressRegion: "Tamil Nadu",
    postalCode: CLINIC.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.0324,
    longitude: 78.3395,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "13:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "17:30",
      closes: "21:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Melur",
  },
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
