import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Building2, Users, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Atuação Técnica",
      description:
        "Análise jurídica criteriosa e definição de estratégias compatíveis com a legislação vigente",
    },
    {
      icon: Building2,
      title: "Atuação Estratégica",
      description:
        "Planejamento jurídico voltado para a proteção patrimonial e resolução eficaz de conflitos",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Cada caso é tratado de forma individualizada, respeitando suas particularidades",
    },
    {
      icon: Trophy,
      title: "Experiência Diversificada",
      description:
        "Atuação em demandas administrativas, judiciais, defesa contenciosa e consultoria preventiva",
    },
  ]

  return (
    <motion.section
      id="sobre"
      className="py-24 bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                Quem Somos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Hudson Rossi Advocacia é um escritório jurídico sediado em
                Ariquemes, Rondônia, que atua na prestação de serviços jurídicos
                de forma técnica, estratégica e personalizada.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O escritório atende pessoas físicas e jurídicas, com atuação
                voltada tanto à consultoria jurídica preventiva quanto à defesa
                contenciosa, em demandas administrativas e judiciais, sempre com
                foco na segurança jurídica, na proteção do patrimônio e na
                solução adequada dos conflitos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada caso é tratado de forma individualizada, respeitando suas
                particularidades jurídicas, econômicas e humanas.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    width={256}
                    height={320}
                    src={
                      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    alt="Dr. Hudson Rossi - Advogado especialista em Direito Empresarial e Civil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <qual.icon className="h-12 w-12 text-accent mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {qual.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Missão & Valores
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Nossa Atuação
                    </h4>
                    <p className="text-muted-foreground">
                      A atuação do escritório é marcada pela condução
                      responsável de demandas reais, que exigem análise técnica,
                      estratégia processual e acompanhamento próximo do cliente.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      Compromisso Profissional
                    </h4>
                    <p className="text-muted-foreground">
                      Atuar com ética e responsabilidade profissional, manter
                      comunicação clara e acessível com o cliente, defender os
                      interesses confiados com seriedade e técnica, e buscar
                      soluções jurídicas consistentes, respeitando os limites
                      legais.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-xl p-8">
                <blockquote className="text-lg italic text-foreground leading-relaxed">
                  "A atuação do Hudson Rossi Advocacia é pautada por método,
                  técnica e transparência. O objetivo é oferecer ao cliente
                  previsibilidade, segurança e confiança durante toda a condução
                  da demanda."
                </blockquote>
                <footer className="mt-4 text-right">
                  <cite className="text-primary font-semibold">
                    Hudson Rossi, OAB/RO 14.882
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
