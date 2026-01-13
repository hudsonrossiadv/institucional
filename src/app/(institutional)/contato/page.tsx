"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1416496008862503074/yw0sW7JAW4xPrpOOP6zWw3d_i-wqhYHB_iF4jggY0v_CXqaWgpjGK4JCGxYwBBoY6Pul"

const Contato = () => {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<null | boolean>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try {
      const content = `📩 **Novo contato recebido!**\n\n**Nome:** ${form.nome}\n**Telefone:** ${form.telefone}\n**Email:** ${form.email}\n**Assunto:** ${form.assunto}\n**Mensagem:**\n${form.mensagem}`

      const res = await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      })

      if (res.ok) {
        setSuccess(true)
        setForm({
          nome: "",
          telefone: "",
          email: "",
          assunto: "",
          mensagem: "",
        })
      } else {
        setSuccess(false)
      }
    } catch (err) {
      setSuccess(false)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content:
        "Av. Sergipe, 1000 - Conjunto 123\nAriquemes - RO\nCEP: 01310-100",
    },
    {
      icon: Phone,
      title: "Telefones",
      content: "\n(69) 9948-9259\nWhatsApp disponível",
    },
    {
      icon: Mail,
      title: "E-mail",
      content:
        "hudsonrossi.adv@gmail.com\njuridico@hudsonrossiadv.com\nAtendimento rápido",
    },
    {
      icon: Clock,
      title: "Horário",
      content:
        "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h\nAtendimento de urgência 24h",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero */}
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
                  <MessageCircle className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl font-serif font-bold text-foreground mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Estamos prontos para ajudar você. Entre em contato e agende uma
                consulta para discutir suas necessidades jurídicas.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Cards */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Form */}
        <motion.section
          className="py-16 bg-secondary/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-foreground">
                    Envie sua Mensagem
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entraremos em contato em até
                    24 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          value={form.nome}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          value={form.telefone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assunto">Assunto</Label>
                      <Input
                        id="assunto"
                        value={form.assunto}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={form.mensagem}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={loading}
                    >
                      {loading ? "Enviando..." : "Enviar Mensagem"}
                      {!loading && <Send className="ml-2 h-5 w-5" />}
                    </Button>

                    {success === true && (
                      <p className="text-green-600 text-sm text-center">
                        Mensagem enviada com sucesso!
                      </p>
                    )}
                    {success === false && (
                      <p className="text-red-600 text-sm text-center">
                        Erro ao enviar mensagem.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* CTA à direita mantido */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl bg-primary text-primary-foreground">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Consulta
                    </h3>
                    <p className="mb-6 opacity-90">
                      Agende uma consulta inicial de 30 minutos para avaliarmos
                      seu caso e apresentarmos as melhores estratégias
                      jurídicas.
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
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
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Atendimento de Urgência
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Para casos urgentes que necessitam de atendimento
                      imediato, oferecemos plantão jurídico 24 horas.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <span className="text-foreground font-medium">
                          (69) 9948-9259
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-accent" />
                        <span className="text-foreground font-medium">
                          urgencia@hudsonrossi.com
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default Contato
