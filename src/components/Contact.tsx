"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1416496008862503074/yw0sW7JAW4xPrpOOP6zWw3d_i-wqhYHB_iF4jggY0v_CXqaWgpjGK4JCGxYwBBoY6Pul"

const Contact = () => {
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
      const content = `📩 **Novo formulário recebido!**\n\n**Nome:** ${form.nome}\n**Telefone:** ${form.telefone}\n**Email:** ${form.email}\n**Assunto:** ${form.assunto}\n**Mensagem:**\n${form.mensagem}`

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
      content: "Rua Amapá, nº 2539\nAriquemes/RO\nCEP: 76.870-726",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "(69) 9 9948-9259\nAtendimento via WhatsApp",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "hudsonrossi.adv@gmail.com\nRetorno em até 24 horas",
    },
    {
      icon: Clock,
      title: "Informações",
      content: "OAB/RO nº 14.882\nAtendimento personalizado\nConsulta prévia",
    },
  ]

  return (
    <motion.section
      id="contato"
      className="py-24 bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* --- infos omitidas para encurtar --- */}

        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-foreground">
              Envie sua Mensagem
            </CardTitle>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato em até 24
              horas.
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
      </div>
    </motion.section>
  )
}

export default Contact
