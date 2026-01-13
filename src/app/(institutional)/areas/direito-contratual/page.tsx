"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FileText, CheckCircle, ArrowRight, Phone } from "lucide-react"

const DireitoContratual = () => {
  const services = [
    "Elaboração de contratos sob medida",
    "Revisão e análise de riscos contratuais",
    "Negociação de termos e condições",
    "Contratos de prestação de serviços",
    "Contratos de fornecimento e distribuição",
    "Parcerias comerciais e joint ventures",
    "Contratos internacionais",
    "Resolução de conflitos contratuais",
  ]

  const benefits = [
    {
      title: "Prevenção de Conflitos",
      description:
        "Contratos bem elaborados evitam 90% dos conflitos comerciais futuros.",
    },
    {
      title: "Proteção Jurídica",
      description:
        "Cláusulas específicas que protegem seus interesses em todas as situações.",
    },
    {
      title: "Economia de Recursos",
      description:
        "Investimento em prevenção é sempre menor que custos de litígio.",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-br from-primary/5 to-accent/5 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                Direito Contratual
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Elaboração, revisão e negociação de contratos com foco na
                proteção dos seus interesses e prevenção de conflitos futuros.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Serviços Contratuais Especializados
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Por Que Investir em Contratos Bem Elaborados?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Nosso Processo de Trabalho
              </h2>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Análise</h3>
                  <p className="text-sm text-muted-foreground">
                    Entendemos suas necessidades e objetivos específicos.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Elaboração</h3>
                  <p className="text-sm text-muted-foreground">
                    Criamos contratos personalizados com cláusulas de proteção.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Revisão</h3>
                  <p className="text-sm text-muted-foreground">
                    Revisamos junto com você cada cláusula e implicação.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Negociação</h3>
                  <p className="text-sm text-muted-foreground">
                    Apoiamos na negociação para garantir os melhores termos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Precisa de Assessoria Contratual?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Proteja seus interesses com contratos elaborados por
                  especialistas. Agende uma consulta e evite problemas futuros.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Agendar Consulta
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/#contact">
                      Fale Conosco
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DireitoContratual
