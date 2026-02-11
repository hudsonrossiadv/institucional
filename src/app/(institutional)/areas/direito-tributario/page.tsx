"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, CheckCircle2, MessageCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/556999489259?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20em%20Direito%20Tribut%C3%A1rio.%20Podemos%20conversar%3F"

export default function DireitoTributarioPage() {
  const services = [
    "Consultoria preventiva e análise de risco tributário",
    "Defesa em execuções fiscais e contencioso",
    "Revisão de débitos, parcelamentos e negociação",
    "Recuperação de créditos/valores pagos indevidamente (quando aplicável)",
    "Suporte a empresas e profissionais autônomos",
  ]

  const faqs = [
    {
      q: "Execução fiscal significa que vou perder bens?",
      a: "Não automaticamente. Existem etapas e meios de defesa. O essencial é agir rápido para evitar constrições e organizar a melhor estratégia.",
    },
    {
      q: "Dá para parcelar ou negociar?",
      a: "Em muitos casos, sim. Avaliamos a melhor via (administrativa ou judicial) conforme o tipo de débito e a fase do procedimento.",
    },
    {
      q: "Vocês atendem online?",
      a: "Sim. Podemos analisar documentos e orientar a estratégia com segurança, inclusive para clientes fora de Ariquemes/RO.",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <motion.section
          className="py-14 bg-gradient-to-br from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl">
                <Briefcase className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                Direito Tributário
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Orientação estratégica para reduzir riscos, organizar passivos e defender seus interesses em
                procedimentos administrativos e judiciais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/areas">
                    Ver todas as áreas <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    Como podemos ajudar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {services.map((s, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">{s}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    Situações comuns
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>• Notificações, autos de infração e pendências fiscais.</p>
                  <p>• Execução fiscal em andamento.</p>
                  <p>• Necessidade de parcelamento/regularização.</p>
                  <p>• Planejamento preventivo para evitar surpresas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
                Dúvidas frequentes
              </h2>
              <div className="grid gap-6">
                {faqs.map((f, idx) => (
                  <Card key={idx} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{f.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                Quer organizar sua situação com segurança jurídica?
              </h3>
              <p className="text-muted-foreground mb-6">
                Envie uma mensagem e vamos avaliar o melhor caminho para o seu caso.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Iniciar atendimento
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
