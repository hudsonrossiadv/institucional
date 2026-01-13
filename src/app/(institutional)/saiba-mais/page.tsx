"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Award, Users, Clock, Scale, BookOpen, Target } from "lucide-react"
import joaoSilvaPortrait from "@/assets/joao-silva-portrait.jpg"
import Image from "next/image"

const SaibaMais = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-b from-background to-gradient-to py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                    Conheça Mais Sobre o
                    <span className="text-primary block">
                      Hudson Rossi Advocacia
                    </span>
                  </h1>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    Escritório jurídico sediado em Ariquemes, Rondônia, que atua
                    na prestação de serviços jurídicos de forma técnica,
                    estratégica e personalizada, com foco na segurança jurídica
                    e proteção patrimonial.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">OAB/RO 14.882</Badge>

                    <Badge variant="secondary">Ariquemes/RO</Badge>
                  </div>
                </motion.div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    width={645}
                    height={805}
                    src={
                      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt="Escritório de advocacia profissional"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Formação e Especialização */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Nossa Atuação
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Casos Atendidos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">
                        Defesa Contenciosa Empresarial
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Litígios judiciais e administrativos envolvendo empresas
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Fraudes e Golpes Financeiros
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Atuação em casos de transferências indevidas via PIX e
                        fraudes
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Defesa Ambiental</h4>
                      <p className="text-sm text-muted-foreground">
                        Autos de infração, apreensão de bens e penalidades
                        administrativas
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Áreas Diversificadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Conflitos Patrimoniais</h4>
                      <p className="text-sm text-muted-foreground">
                        Questões contratuais, possessórias e de proteção
                        patrimonial
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Demandas Administrativas
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Atuação perante órgãos públicos e processos
                        administrativos
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Consultoria Preventiva</h4>
                      <p className="text-sm text-muted-foreground">
                        Análise técnica e estratégia para evitar conflitos
                        futuros
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Números e Conquistas */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-12">
                Forma de Trabalho
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <Scale className="h-12 w-12 mx-auto" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Análise Jurídica Criteriosa
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <Target className="h-12 w-12 mx-auto" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Esclarecimento de Riscos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <BookOpen className="h-12 w-12 mx-auto" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Estratégias Compatíveis
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    <Users className="h-12 w-12 mx-auto" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Acompanhamento Responsável
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofia e Valores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Compromisso Profissional
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Ética e Responsabilidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Atuar com ética e responsabilidade profissional, mantendo
                      comunicação clara e acessível com o cliente em todas as
                      etapas do processo.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Defesa Técnica e Séria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Defender os interesses confiados com seriedade e técnica,
                      buscando soluções jurídicas consistentes e adequadas à
                      realidade de cada caso.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>Atendimento Individualizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Cada caso é tratado de forma individualizada, respeitando
                      suas particularidades jurídicas, econômicas e humanas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Precisa de Assessoria Jurídica?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Entre em contato para discutir como o Hudson Rossi Advocacia pode
              ajudar você ou sua empresa com soluções jurídicas técnicas e
              estratégicas.
            </p>
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
                Agendar Consulta
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SaibaMais
