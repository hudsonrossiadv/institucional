"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Car,
  ShieldCheck,
  Clock,
  AlertCircle,
  MessageCircle,
  CheckCircle,
} from "lucide-react"

const DBAPage = () => {
  const faqs = [
    {
      question: "A apreensão do veículo é legal?",
      answer:
        "Sim, o procedimento é legal e o banco pode requerer a medida. Porém, é necessário que ele cumpra os requisitos legais para realização da busca e apreensão.",
    },
    {
      question: "Eu consigo recuperar o veículo rapidamente?",
      answer:
        "Sim! Essa é a boa notícia! Você pode recorrer para recuperar o seu veículo, mas o seu prazo já está correndo.",
    },
    {
      question: "Meu nome vai continuar no SPC?",
      answer: "Sim, até a quitação completa do contrato.",
    },
    {
      question: "Se eu não me defender, o banco pode cobrar algum outro valor?",
      answer:
        "Sim, se o valor obtido pela venda do carro não for capaz de quitar o saldo devedor do contrato, o banco continuará sendo seu credor e poderá converter a ação de busca e apreensão em execução para atingir outros bens seus. Nesse caso, você perderá o carro, todo o valor que já pagou por ele (incluindo a entrada) e poderá continuar devendo ao banco com o seu nome no SPC até a plena quitação.",
    },
  ]

  const services = [
    "Defesa em Busca e Apreensão",
    "Revisão de Contrato de Veículo",
    "Revisão de Contrato de Dívidas Bancárias",
  ]

  const whatsappLink =
    "https://wa.me/556999489259?text=Ol%C3%A1%2C%20meu%20ve%C3%ADculo%20foi%20apreendido%20e%20preciso%20de%20ajuda%20jur%C3%ADdica%20urgente.%20Pode%20me%20orientar%3F"

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10"></div>

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
                O seu veículo foi apreendido pelo banco?
              </h1>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl font-semibold text-accent">
                Assessoria jurídica completa especializada em Busca e Apreensão.
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Auxiliamos na recuperação imediata do seu automóvel.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/80">
                Clique no botão abaixo e veja como podemos te ajudar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
                asChild
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Fale com um especialista
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Alert Section */}
      <section className="bg-destructive text-destructive-foreground py-6">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center justify-center gap-3 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Clock className="h-6 w-6 flex-shrink-0" />
            <p className="text-lg font-semibold">
              O prazo para recuperar o seu veículo já está correndo!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
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
              Dúvidas Frequentes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Fale com um especialista
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Sobre Nós
              </h2>
              <div className="space-y-6 text-lg text-primary-foreground/90 leading-relaxed">
                <p>
                  O VSN Advogados é um escritório especializado em{" "}
                  <span className="font-semibold text-accent">
                    RECUPERAÇÃO DE VEÍCULOS APREENDIDOS POR BANCOS E FINANCEIRAS
                  </span>
                  .
                </p>
                <p>
                  Há mais de 10 anos no mercado e com atuação à nível nacional,
                  de forma totalmente digital, o nosso maior objetivo é acelerar
                  a resolução das causas focando sempre no conforto dos nossos
                  clientes.
                </p>
                <p>
                  Contamos com profissionais altamente capacitados na matéria,
                  preocupados com a constante atualização dos seus
                  conhecimentos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Nossos Serviços
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">
              Depoimentos
            </h2>
            <p className="text-muted-foreground text-lg">
              Em breve, depoimentos de clientes satisfeitos.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Final CTA Section */}
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
              O prazo para recuperar o seu veículo já está correndo!
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Clique no botão abaixo e conte com uma advocacia especializada.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Fale com um especialista
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DBAPage
