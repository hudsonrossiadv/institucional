"use client"

import Banner from "@/components/Banner"
import About from "@/components/About"
import Contact from "@/components/Contact"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Tractor, Car, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Home institucional.
 *
 * Contém: Banner, cards de áreas de atuação (com DBA no lugar de Imobiliário),
 * Quem Somos e Contato.
 */
export default function InstitutionalHomePage() {
  const areas = [
    {
      title: "Ambiental & Agrário (Produtor Rural)",
      icon: Tractor,
      description: "Defesa em autos de infração, multas e embargos ambientais no meio rural.",
      href: "/ambiental-agrario",
    },
    {
      title: "Defesa em Busca e Apreensão",
      icon: Car,
      description: "Atuação rápida para recuperar o veículo e reduzir prejuízos.",
      href: "/dba",
    },
  ]

  return (
    <div className="min-h-screen">
      <Banner />

      {/* Cards de Áreas de Atuação */}
      <section id="areas" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-lg text-muted-foreground">
              Dois serviços em destaque: <strong>Ambiental & Agrário (Produtor Rural)</strong> e
              <strong> Defesa em Busca e Apreensão</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <area.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {area.description}
                    </p>
                    <div className="pt-5">
                      <Button asChild className="w-full">
                        <a href={area.href}>
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Contact />
    </div>
  )
}
