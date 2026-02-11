"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AlertCircle, Car, Clock, MessageCircle, ShieldCheck, CheckCircle, Shield, FileText } from "lucide-react"

/**
 * Landing page: Defesa em Busca e Apreensão (DBA)
 *
 * Página dedicada para conversão (CTA -> WhatsApp) e esclarecimento de dúvidas.
 */
export default function DBAPage() {
  const faqs = [
    {
      question: "A apreensão do veículo é legal?",
      answer:
        "O procedimento pode ser legal, mas o banco precisa cumprir requisitos formais e materiais. Uma análise rápida do seu caso pode identificar nulidades, abusos contratuais e medidas urgentes cabíveis.",
    },
    {
      question: "Eu consigo recuperar o veículo rapidamente?",
      answer:
        "Em muitos casos, é possível adotar medidas para buscar a recuperação do veículo ou evitar prejuízos maiores. O ponto principal é agir rápido: os prazos correm e cada dia conta.",
    },
    {
      question: "Se eu não me defender, posso perder mais do que o carro?",
      answer:
        "Sim. Dependendo do caso, o banco pode prosseguir para cobrar diferença de saldo, além de consolidar a propriedade do bem. Uma defesa técnica pode reduzir danos, discutir valores e buscar soluções mais seguras.",
    },
  ]

  const services = [
    "Defesa em ação de Busca e Apreensão",
    "Revisão de contrato de financiamento",
    "Renegociação estratégica e acordos",
  ]

  const entregaveis = [
    "Diagnóstico do caso (análise da liminar, prazos, documentos e risco)",
    "Plano de ação objetivo (administrativo/judicial) com próximos passos",
    "Peças e protocolos necessários (contestação, petições, requerimentos)",
    "Relatório do caso em linguagem clara (cenários, riscos e alternativas)",
    "Acompanhamento e atualizações via WhatsApp em rotina definida", 
    "Atuação urgente em situações críticas (prazo curto, risco de consolidação, prejuízo imediato)",
  ]

  const whatsappLink =
    "https://wa.me/556999489259?text=Ol%C3%A1%2C%20meu%20ve%C3%ADculo%20foi%20apreendido%20(ou%20estou%20sob%20risco)%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20urgente.%20Pode%20me%20ajudar%3F"

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        className="relative min-h-[78vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6">
                <Car className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Seu veículo foi apreendido ou está em risco?
              </h1>
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl font-semibold text-primary-foreground">
                Defesa estratégica em Busca e Apreensão
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Avaliação rápida do seu caso e orientação objetiva para reduzir prejuízos.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80">
                Clique abaixo e fale diretamente comigo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Falar no WhatsApp agora
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <a href="#como-atuamos">Ver como atuamos</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Urgência */}
      <section className="bg-destructive text-destructive-foreground py-6">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center gap-3 text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock className="h-6 w-6 flex-shrink-0" />
            <p className="text-lg font-semibold">
              Prazos correm rápido — quanto antes agir, melhor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Dúvidas frequentes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Sobre nós</h2>
            <div className="text-lg text-primary-foreground/90 leading-relaxed space-y-5">
              <p>
                O <strong>escritório HR Advocacia</strong> é conduzido por Hudson Rossi (OAB/RO 14.882),
                com atuação direta e estratégica em demandas patrimoniais, cíveis e empresariais.
              </p>
              <p>
                Em casos de <span className="font-semibold text-primary-foreground underline decoration-accent underline-offset-4">Busca e Apreensão</span>,
                o foco é agir rápido, explicar com clareza e construir a melhor saída: defesa processual,
                revisão de contrato e negociação com segurança.
              </p>
              <p>
                Atendimento online e presencial em Ariquemes/RO, com comunicação transparente e acompanhamento próximo.
              </p>
            </div>

            {/* CTA fora das caixas */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base md:text-lg px-7 py-6 h-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar sobre meu caso
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/40 !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground text-base md:text-lg px-7 py-6 h-auto"
                asChild
              >
                <a href="#como-atuamos">Ver como atuamos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Serviços
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <ShieldCheck className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg">{service}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como atuamos (bloco semelhante ao Ambiental/Agrário) */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Como atuamos na Defesa em Busca e Apreensão
              </h2>
              <p className="text-muted-foreground">
                Estratégia, clareza e velocidade — sem promessas vazias, com execução organizada.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-accent" />
                    Entregáveis do serviço
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {entregaveis.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-accent" />
                    Diferenciais do escritório
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>
                      Atendimento direto e orientação clara sobre o que fazer em cada etapa.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>
                      Foco em reduzir prejuízos: análise de nulidades, prazos e opções de estratégia.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>
                      Preparação para atuação em situações urgentes (lógica de resposta rápida e decisão sob pressão).
                    </p>
                  </div>

                  
                </CardContent>
              </Card>
            </div>

            {/* CTA fora das caixas */}
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base md:text-lg px-7 py-6 h-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar sobre meu caso
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Como atuamos */}
      <section id="como-atuamos" className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Como atuamos na Defesa em Busca e Apreensão
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Um método claro: diagnóstico rápido, estratégia objetiva e execução segura — com foco em reduzir prejuízos e
              buscar a melhor saída para o seu caso.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-accent" />
                  Entregáveis do serviço
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Diagnóstico jurídico do caso (análise do processo/liminar, contrato e riscos)",
                  "Plano de ação com prazos e estratégia (defesa, negociação e medidas urgentes)",
                  "Elaboração e protocolo das peças cabíveis (conforme a fase do processo)",
                  "Relatório objetivo do caso e próximos passos (linguagem clara)",
                  "Checklist documental e orientação prática para acelerar a tomada de decisão",
                  "Acompanhamento e atualizações em rotina definida via WhatsApp",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-accent" />
                  Diferenciais do escritório
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Em casos de Busca e Apreensão, tempo e estratégia importam. O objetivo é reduzir danos, explicar com
                  clareza e conduzir o caso com segurança.
                </p>
                <div className="space-y-3">
                  {[
                    "Atuação estratégica com foco em urgência e prazos processuais",
                    "Contato direto e comunicação objetiva (sem juridiquês desnecessário)",
                    "Avaliação de alternativas: defesa técnica, revisão contratual e negociação",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-border bg-background p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Formação e preparo:</span> experiência e formação
                    complementar em atuação em situações urgentes e defesa em flagrante delito — aplicada aqui como
                    método de resposta rápida e estratégia em medidas liminares e proteção patrimonial.
                  </p>
                </div>

                
              </CardContent>
            </Card>
          </div>

          {/* CTA fora das caixas */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base md:text-lg px-7 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-7 py-6 h-auto"
              asChild
            >
              <a href="#faq">Ver dúvidas frequentes</a>
            </Button>
          </div>

        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-destructive/20 rounded-full">
              <Clock className="h-10 w-10 text-destructive-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Quer agir com segurança e rapidez?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Clique e me conte seu caso.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
