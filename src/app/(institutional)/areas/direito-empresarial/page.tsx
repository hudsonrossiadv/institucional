"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Building, CheckCircle, ArrowRight, Phone } from "lucide-react"

const DireitoEmpresarial = () => {
  const services = [
    "Constituição de empresas e alterações contratuais",
    "Contratos comerciais e parcerias estratégicas",
    "Compliance corporativo e governança",
    "Fusões, aquisições e reestruturações",
    "Direito societário e assembleias",
    "Consultoria preventiva empresarial",
    "Recuperação judicial e extrajudicial",
    "Contratos de distribuição e franquia",
  ]

  const cases = [
    {
      title: "Fusão Estratégica",
      description:
        "Assessoria completa em fusão de duas empresas do setor tecnológico, resultando em economia fiscal de 30%.",
    },
    {
      title: "Programa de Compliance",
      description:
        "Implementação de programa de compliance para multinacional, evitando sanções regulatórias.",
    },
    {
      title: "Recuperação Judicial",
      description:
        "Condução exitosa de processo de recuperação judicial, preservando 500 empregos.",
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
                  <Building className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                Direito Empresarial
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Consultoria jurídica estratégica para empresas de todos os
                portes, desde startups inovadoras até grandes corporações
                estabelecidas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Nossos Serviços Especializados
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

        {/* Cases Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Casos de Sucesso
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {cases.map((case_, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-lg">{case_.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {case_.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Precisa de Consultoria Empresarial?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Agende uma consulta e descubra como podemos ajudar sua empresa
                  a crescer com segurança jurídica e estratégia.
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

export default DireitoEmpresarial
