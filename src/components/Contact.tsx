"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const DISCORD_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK || ""

const Contact = () => {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: "",
  })
  const [files, setFiles] = useState<FileList | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<null | boolean>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    try {
      const content = `📩 **Novo formulário recebido!**\n\n**Nome:** ${form.nome}\n**Telefone:** ${form.telefone}\n**Email:** ${form.email}\n**Assunto:** ${form.assunto}\n**Mensagem:**\n${form.mensagem}`

      const fd = new FormData()
      fd.append("content", content)
      if (files && files.length > 0) {
        Array.from(files).forEach((file) => fd.append("files", file))
      }

      const res = await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        body: fd,
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
        setFiles(null)
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
        {/* Informações de contato e formulário */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-foreground">
              Descreva melhor o seu caso
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
                <Label htmlFor="assunto">Assunto *</Label>
                <select
                  id="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Selecione um assunto...
                  </option>
                  <option value="Ambiental & Agrário (Produtor Rural)">
                    Ambiental & Agrário (Produtor Rural)
                  </option>
                  <option value="Defesa em Busca e Apreensão">
                    Defesa em Busca e Apreensão
                  </option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Descreva seu caso *</Label>
                <Textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="anexos">Anexos (opcional)</Label>
                <Input
                  id="anexos"
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  onChange={(e) => setFiles(e.target.files)}
                />
                <p className="text-xs text-muted-foreground">
                  Você pode anexar fotos ou PDF. Se preferir, envie pelo
                  WhatsApp.
                </p>
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
