"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Shield, Leaf, Gavel, ArrowRight } from "lucide-react"

/**
 * Página "Saiba Mais"
 *
 * - Mantém a foto profissional (IMG_8929) somente aqui.
 * - Restaura uma estrutura mais rica (cards, diferenciais, prova de atualização, CTA),
 *   evitando a sensação de página "pobre".
 */
export default function SaibaMaisPage() {
  const whatsappLink =
    "https://wa.me/556999489259?text=Ol%C3%A1%21%20Quero%20falar%20com%20o%20escrit%C3%B3rio%20HR%20Advocacia.%20Pode%20me%20orientar%3F"

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="pt-20 py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Saiba mais sobre o escritório
              </h1>

              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                O <strong>escritório Hudson Rossi Advocacia</strong> atua com foco em dois nichos
                principais: <strong>Direito Ambiental & Agrário</strong> (Produtor Rural) e
                <strong> Defesa em Busca e Apreensão</strong>. Atendimento direto, estratégia e
                comunicação clara do início ao fim.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground"
                  asChild
                >
                  <a href="#diferenciais">Ver diferenciais</a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl bg-primary-foreground/10 p-4">
                  <p className="font-semibold">Atendimento direto</p>
                  <p className="text-sm text-primary-foreground/85 mt-1">
                    Você fala com o advogado, com clareza de prazos e próximos passos.
                  </p>
                </div>
                <div className="rounded-xl bg-primary-foreground/10 p-4">
                  <p className="font-semibold">Estratégia + execução</p>
                  <p className="text-sm text-primary-foreground/85 mt-1">
                    Planejamento técnico e condução objetiva do caso — administrativo e/ou judicial.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FOTO PROFISSIONAL (somente aqui) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative w-full max-w-md lg:max-w-lg mx-auto"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-card">
                <Image
                  src="/images/hudson-rossi.jpg"
                  alt="Hudson Rossi - HR Advocacia"
                  width={645}
                  height={805}
                  quality={92}
                  sizes="(max-width: 1024px) 92vw, 520px"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Diferenciais do escritório
              </h2>
              <p className="text-muted-foreground mt-3">
                Organização, estratégia e comunicação direta — do primeiro atendimento ao encaminhamento final.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-accent" />
                    Atendimento direto
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Você fala comigo, com clareza sobre prazos, riscos e próximos passos — sem enrolação.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-accent" />
                    Estratégia com execução
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Diagnóstico e plano de ação: organização de documentos, tese defensiva e encaminhamento objetivo.
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-accent" />
                    Foco em reduzir prejuízos
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  A meta é proteger seu patrimônio e sua atividade, com comunicação clara e decisões rápidas.
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Formação e atualização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>
                    Participação no{" "}
                    <a
                      className="font-semibold underline decoration-primary/40 hover:decoration-primary"
                      href="https://www.oab-ro.org.br/oab-rondonia-promove-o-1o-seminario-estadual-do-direito-agrario-entre-a-tradicao-e-a-inovacao/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      1º Seminário Estadual do Direito Agrário (OAB Rondônia)
                    </a>
                    .
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p>
                    Formação complementar em atendimento e atuação em situações urgentes (incluindo defesa em flagrante
                    delito), aplicando resposta rápida e estratégia também em demandas agrárias e patrimoniais (apreensão e
                    recuperação de bens).
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/contato">
                  Falar com o escritório
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
                asChild
              >
                <a href="/areas">Ver áreas de atuação</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
