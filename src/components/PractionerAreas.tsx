import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Building,
  FileText,
  Handshake,
  Home,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react"

const PracticeAreas = () => {
  const areas = [
    {
      icon: Building,
      title: "Direito Civil",
      description:
        "Atuação em responsabilidade civil, relações patrimoniais, conflitos contratuais e possessórios, e demandas civis em geral.",
      services: [
        "Responsabilidade Civil",
        "Conflitos Patrimoniais",
        "Ações Possessórias",
        "Direitos Reais",
      ],
    },
    {
      icon: Briefcase,
      title: "Direito Empresarial",
      description:
        "Consultoria e defesa contenciosa para empresas em litígios judiciais e administrativos, incluindo questões societarias e comerciais.",
      services: [
        "Defesa Contenciosa Empresarial",
        "Litígios Judiciais",
        "Demandas Administrativas",
        "Consultoria Preventiva",
      ],
    },
    {
      icon: FileText,
      title: "Direito Contratual",
      description:
        "Elaboração, revisão e análise de contratos, defesa em conflitos contratuais e consultoria preventiva.",
      services: [
        "Elaboração de Contratos",
        "Revisão Contratual",
        "Conflitos Contratuais",
        "Consultoria Preventiva",
      ],
    },
    {
      icon: Home,
      title: "Direito Imobiliário e Patrimonial",
      description:
        "Atuação em questões imobiliárias, registrárias, usucapião, alienações e proteção patrimonial.",
      services: [
        "Usucapião",
        "Questões Registrárias",
        "Alienações",
        "Proteção Patrimonial",
      ],
    },
    {
      icon: Handshake,
      title: "Direito Agrário e Fundiário",
      description:
        "Defesa em questões agrárias, regularização fundiária, conflitos de terras e direitos possessórios rurais.",
      services: [
        "Regularização Fundiária",
        "Conflitos Agrários",
        "Usucapião Rural",
        "Direitos Possessórios",
      ],
    },
    {
      icon: Users,
      title: "Direito Ambiental",
      description:
        "Defesa administrativa e judicial em autos de infração ambiental, apreensão de bens e penalidades administrativas.",
      services: [
        "Defesa em Autos de Infração",
        "Apreensão de Bens",
        "Penalidades Administrativas",
        "Licenciamento Ambiental",
      ],
    },
  ]

  return (
    <motion.section
      id="areas"
      className="py-24 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O escritório atua de forma abrangente em diferentes áreas do
            Direito, com destaque para demandas que envolvem responsabilidade
            civil, relações patrimoniais, atividade econômica e defesa
            administrativa e judicial.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 flex flex-col justify-between">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <area.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {area.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {area.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={`/areas/${area.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace("ç", "c")
                        .replace("ã", "a")}`}
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              Não encontrou sua necessidade?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco. Temos experiência em diversas outras
              áreas do direito e podemos ajudar você a encontrar a melhor
              solução jurídica.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a
                href="https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PracticeAreas
