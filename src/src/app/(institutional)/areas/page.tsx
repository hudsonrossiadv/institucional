"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Building,
  FileText,
  Handshake,
  Home,
  Users,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Scale,
  Car,
} from "lucide-react"

/**
 * Página que lista todas as áreas de atuação do escritório.
 *
 * A estrutura foi expandida para incluir a nova área "Defesa em Busca e Apreensão",
 * com descrição e lista de serviços específicos. Cada área possui um identificador
 * usado como âncora para navegação, além de um ícone e serviços relacionados.
 */
const AreasAtuacao = () => {
  const areas = [
    {
      id: "direito-empresarial",
      icon: Building,
      title: "Direito Empresarial",
      description:
        "Consultoria jurídica completa para empresas, incluindo constituição, contratos comerciais, compliance e reestruturações societárias.",
      services: [
        "Constituição de empresas e alterações contratuais",
        "Contratos comerciais e parcerias estratégicas",
        "Compliance corporativo e governança",
        "Fusões, aquisições e reestruturações",
        "Direito societário e assembleias",
        "Consultoria preventiva empresarial",
        "Recuperação judicial e extrajudicial",
        "Contratos de distribuição e franquia",
      ],
    },
    {
      id: "direito-contratual",
      icon: FileText,
      title: "Direito Contratual",
      description:
        "Elaboração, revisão e negociação de contratos, com foco na prevenção de conflitos e proteção dos interesses do cliente.",
      services: [
        "Contratos de prestação de serviços",
        "Contratos de fornecimento e distribuição",
        "Parcerias comerciais e joint ventures",
        "Revisão e negociação contratual",
        "Contratos internacionais",
        "Análise de riscos contratuais",
        "Mediação e arbitragem",
        "Rescisão e renegociação de contratos",
      ],
    },
    {
      id: "direito-civil",
      icon: Handshake,
      title: "Direito Civil",
      description:
        "Assessoria completa em questões civis, desde responsabilidade civil até direito de família e sucessões.",
      services: [
        "Responsabilidade civil e danos morais",
        "Direito de família e divórcio",
        "Sucessões e inventários",
        "Direito do consumidor",
        "Contratos civis diversos",
        "Usucapião e posse",
        "Direitos da personalidade",
        "Indenizações e reparações",
      ],
    },
    {
      id: "direito-imobiliario",
      icon: Home,
      title: "Direito Imobiliário",
      description:
        "Assessoria em transações imobiliárias, incorporações, locações e questões condominiais.",
      services: [
        "Compra e venda de imóveis",
        "Incorporações imobiliárias",
        "Locações residenciais e comerciais",
        "Questões condominiais",
        "Regularização de imóveis",
        "Financiamento imobiliário",
        "Loteamentos e desmembramentos",
        "Direito urbanístico",
      ],
    },
    {
      id: "direito-trabalho",
      icon: Users,
      title: "Direito do Trabalho",
      description:
        "Consultoria preventiva e contenciosa em relações trabalhistas, compliance trabalhista e reestruturações.",
      services: [
        "Consultoria preventiva trabalhista",
        "Compliance trabalhista",
        "Ações trabalhistas e defesa",
        "Reestruturações e demissões",
        "Contratos de trabalho especiais",
        "Terceirização e quarteirização",
        "Acordos e negociações coletivas",
        "Auditoria trabalhista",
      ],
    },
    {
      id: "direito-tributario",
      icon: Briefcase,
      title: "Direito Tributário",
      description:
        "Planejamento tributário, consultoria fiscal e defesa em processos administrativos e judiciais.",
      services: [
        "Planejamento tributário",
        "Consultoria fiscal preventiva",
        "Defesa em processos administrativos",
        "Contencioso tributário judicial",
        "Recuperação de tributos pagos indevidamente",
        "Parcelamento de débitos fiscais",
        "Elisão e evasão fiscal",
        "Auditoria tributária",
      ],
    },
    {
      id: "defesa-busca-e-apreensao",
      icon: Car,
      title: "Defesa em Busca e Apreensão",
      description:
        "Especializados em defesa contra busca e apreensão de veículos, proporcionando suporte jurídico completo para recuperar seu veículo e renegociar dívidas.",
      services: [
        "Defesa em busca e apreensão",
        "Revisão de contratos de financiamento",
        "Renegociação de dívidas e acordos",
        "Recuperação imediata do veículo",
      ],
      // Incluímos a propriedade href para que o botão "Saiba Mais" leve ao caminho /dba
      href: "/dba",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="pt-20">
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
                  <Scale className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                Áreas de Atuação
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Oferecemos serviços jurídicos especializados com foco em
                resultados e soluções personalizadas para cada necessidade do
                cliente.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Areas Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-16">
              {areas.map((area, index) => (
                <motion.div
                  key={area.id}
                  id={area.id}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <CardHeader className="lg:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-accent/10 rounded-xl">
                            <area.icon className="h-8 w-8 text-accent" />
                          </div>
                          <CardTitle className="text-3xl font-serif font-bold text-foreground">
                            {area.title}
                          </CardTitle>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                          {area.description}
                        </p>
                         <Button
                           size="lg"
                           className="w-fit bg-primary hover:bg-primary/90"
                           asChild
                         >
                           <a
                             href={
                               // Se a área define um link específico, usa-o; caso contrário, gera o slug baseado no título
                               area.href ??
                               `/areas/${area.title
                                 .toLowerCase()
                                 .replace(/\s+/g, "-")
                                 .replace("ç", "c")
                                 .replace("ã", "a")}`
                             }
                           >
                             Saiba Mais
                             <ArrowRight className="ml-2 h-5 w-5" />
                           </a>
                         </Button>
                      </CardHeader>

                      <CardContent className="lg:p-12 bg-muted/30">
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                          Nossos Serviços:
                        </h3>
                        <div className="grid gap-3">
                          {area.services.map((service, serviceIndex) => (
                            <div
                              key={serviceIndex}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-16 bg-secondary/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Não encontrou sua necessidade?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco. Temos experiência em diversas outras
                  áreas do direito e podemos ajudar você a encontrar a melhor
                  solução jurídica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="/contato">
                      Fale Conosco
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a
                      href="https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consulta
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default AreasAtuacao