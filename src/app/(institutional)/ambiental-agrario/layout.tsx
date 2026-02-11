import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advogado Ambiental e Agrário para Produtor Rural | HR Advocacia",
  description:
    "Defesa em auto de infração ambiental, multas e embargos. Atuação estratégica em Direito Ambiental e Agrário para produtores rurais e agronegócio. Atendimento em todo o Brasil.",
  alternates: {
    canonical: "https://www.hudsonrossi.adv.br/ambiental-agrario",
  },
  keywords: [
    "advogado ambiental produtor rural",
    "direito ambiental agronegócio",
    "auto de infração ambiental defesa",
    "multa ambiental anulação",
    "embargo ambiental suspensão",
    "regularização fundiária advogado",
    "advogado agrário",
    "HR Advocacia",
  ],
  openGraph: {
    title: "Direito Ambiental e Agrário para Produtor Rural | HR Advocacia",
    description:
      "Recebeu multa, embargo ou auto de infração? Defesa estratégica em Direito Ambiental e Agrário para produtores rurais. Atendimento em todo o Brasil.",
    url: "https://www.hudsonrossi.adv.br/ambiental-agrario",
    siteName: "HR Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600",
        width: 1600,
        height: 1067,
        alt: "Produtor rural e lavoura - Direito Ambiental e Agrário",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advogado Ambiental e Agrário | HR Advocacia",
    description:
      "Defesa em auto de infração, multas e embargos ambientais para produtores rurais. Atendimento em todo o Brasil.",
    images: [
      "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function AmbientalAgrarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "HR Advocacia",
    url: "https://www.hudsonrossi.adv.br/ambiental-agrario",
    areaServed: "BR",
    serviceType: [
      "Defesa em Auto de Infração Ambiental",
      "Anulação/Redução de Multa Ambiental",
      "Suspensão de Embargo Ambiental",
      "Direito Agrário",
      "Regularização Fundiária",
    ],
    description:
      "Atuação estratégica em Direito Ambiental e Agrário para produtores rurais: autos de infração, multas, embargos e regularização fundiária.",
    telephone: "+55 69 99948-9259",
    sameAs: ["https://www.hudsonrossi.adv.br"],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
