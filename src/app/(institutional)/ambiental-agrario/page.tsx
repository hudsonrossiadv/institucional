"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Tractor,
  ShieldAlert,
  FileWarning,
  Gavel,
  CheckCircle,
  MessageCircle,
  MapPinned,
  Clock,
} from "lucide-react"

/**
 * LP: Direito Ambiental & Agrário (Produtor Rural)
 *
 * - Foco em conversão: Hero forte + dores + como ajudamos + prova social implícita + FAQ + CTA.
 * - Captação: formulário opcional com envio para /api/contact.
 * - CTA primário: WhatsApp.
 */
export default function AmbientalAgrarioLP() {
  const whatsappLink =
    "https://wa.me/556999489259?text=Ol%C3%A1%21%20Recebi%20multa%20ambiental%2Fembargo%20ou%20auto%20de%20infra%C3%A7%C3%A3o%20na%20minha%20propriedade%20rural.%20Quero%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20com%20o%20escrit%C3%B3rio%20HR%20Advocacia.";

  const atuacoes = [
    "Defesa administrativa em auto de infração (IBAMA, SEDAM e órgãos estaduais/municipais)",
    "Impugnação e recursos para anulação/redução de multa ambiental",
    "Atuação urgente para suspensão/reversão de embargo ambiental",
    "Estratégia e defesa em execução fiscal ambiental (cobrança judicial)",
    "Consultoria preventiva e orientação para fiscalizações no campo",
    "Suporte documental e regularização fundiária (caso a caso)",
  ];

  // Entregáveis (produtos) do serviço: itens concretos que o cliente recebe.
  const entregaveis = [
    "Diagnóstico jurídico do caso (auto, prazos, risco e documentos)",
    "Plano de ação com estratégia e cronograma de prazos",
    "Atuação administrativa (defesa, recursos e protocolos) quando cabível",
    "Relatório detalhado do caso com próximos passos e orientações",
    "Checklist documental e organização de provas (fiscalização/área)",
    "Acompanhamento com atualizações em rotina definida e atuação urgente em situações críticas",
  ];

  const faqs = [
    {
      q: "Recebi um auto de infração ambiental. O que devo fazer?",
      a: "Preserve documentos, registre as informações da fiscalização e busque orientação jurídica rapidamente. Há prazos curtos para defesa, e muitas autuações apresentam vícios formais ou materiais.",
    },
    {
      q: "É possível anular ou reduzir multa ambiental?",
      a: "Em muitos casos, sim. Dependendo do auto, é possível discutir nulidades, provas, tipificação, proporcionalidade e falhas de procedimento — buscando anulação ou redução significativa.",
    },
    {
      q: "Embargo ambiental pode ser suspenso?",
      a: "Dependendo do fundamento e do estágio do procedimento, é possível atuar para suspender ou mitigar os efeitos do embargo, inclusive por via administrativa e/ou judicial.",
    },
    {
      q: "Vocês atendem fora do estado?",
      a: "Sim. O atendimento pode ser online, e a estratégia é definida conforme o órgão autuador, a documentação do imóvel e os objetivos do produtor.",
    },
  ];

  // Formulário de captação (opcional) — envia para /api/contact
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    subject: "Ambiental & Agrário (Produtor Rural)",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    try {
      const payload = {
        name: form.name,
        phone: form.phone,
        email: "", // opcional
        subject: form.subject,
        message: `Cidade/UF: ${form.city}\n\n${form.message}`.trim(),
        page: "/ambiental-agrario",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("ok");
      setForm({
        name: "",
        phone: "",
        city: "",
        subject: "Ambiental & Agrário (Produtor Rural)",
        message: "",
      });
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <motion.section
        className="relative min-h-[82vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-accent/20 rounded-full mb-6">
                <Tractor className="h-10 w-10 text-accent" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Recebeu multa ambiental, embargo ou auto de infração na sua
                propriedade rural?
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 mt-6">
                O <span className="font-semibold">escritório HR Advocacia</span>{" "}
                atua na defesa de produtores rurais em{" "}
                <span className="font-semibold">Direito Ambiental e Agrário</span>,
                com foco em estratégia, prazos e solução prática.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-7 py-6 h-auto"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar com advogado agora
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 !text-primary-foreground hover:bg-primary-foreground/10 hover:!text-primary-foreground"
                  asChild
                >
                  <a href="#como-ajudamos">Ver como ajudamos</a>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="rounded-xl bg-primary-foreground/10 p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Clock className="h-5 w-5 text-accent" />
                    Prazos curtos
                  </div>
                  <p className="text-sm text-primary-foreground/85 mt-2">
                    A defesa costuma ter prazo limitado. Agir rápido muda o jogo.
                  </p>
                </div>

                <div className="rounded-xl bg-primary-foreground/10 p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <FileWarning className="h-5 w-5 text-accent" />
                    Estratégia técnica
                  </div>
                  <p className="text-sm text-primary-foreground/85 mt-2">
                    Análise do auto, provas e procedimento para atacar o ponto fraco.
                  </p>
                </div>

                <div className="rounded-xl bg-primary-foreground/10 p-4">
                  <div className="flex items-center gap-2 font-semibold">
                    <Gavel className="h-5 w-5 text-accent" />
                    Atuação completa
                  </div>
                  <p className="text-sm text-primary-foreground/85 mt-2">
                    Administrativa e judicial, conforme a necessidade do caso.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* DORES */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Situações mais comuns no campo
              </h2>
              <p className="text-muted-foreground mt-3">
                Veja as principais frentes de atuação do escritório neste nicho.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="h-6 w-6 text-accent" />
                    Principais atuações do escritório
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {atuacoes.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">{d}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPinned className="h-6 w-6 text-accent" />
                    Atendimento prático (sem enrolação)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    A prioridade é proteger sua atividade e seu patrimônio. Trabalhamos com
                    análise documental, estratégia de defesa e encaminhamento claro do que fazer.
                  </p>
                  <p>
                    Em muitos casos, o problema não é só “a multa”: é o risco de embargo,
                    execução fiscal e travas na operação.
                  </p>
                  <p className="font-medium text-foreground">
                    Quanto antes você agir, maiores as chances de construir uma defesa forte.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA fora das caixas (mais limpo e com melhor hierarquia visual) */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base md:text-lg px-7 py-6 h-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Quero orientação agora
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-7 py-6 h-auto border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#como-ajudamos">Ver como ajudamos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <section id="como-ajudamos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Como o escritório HR Advocacia pode ajudar
              </h2>
              <p className="text-muted-foreground mt-3">
                Atuação estratégica no Direito Ambiental e Agrário, com foco em solução e resultado.
              </p>
            </motion.div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    Entregáveis do serviço
                  </h3>
                  <div className="space-y-3">
                    {entregaveis.map((s, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <p className="text-muted-foreground">{s}</p>
                      </div>
                    ))}
                  </div>

                  {/* Botões movidos para fora da caixa para melhor hierarquia visual */}
                </div>

                <div className="p-8 lg:p-10 bg-muted/30">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    O que você ganha com isso
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">
                        Clareza sobre prazo, risco e melhor caminho (administrativo/judicial).
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">
                        Defesa técnica para atacar o ponto fraco da autuação.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-muted-foreground">
                        Redução de prejuízo operacional e proteção patrimonial.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border border-border bg-background p-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Importante:</span>{" "}
                      cada caso depende do órgão autuador, documentos do imóvel e do histórico da fiscalização.
                      A análise inicial define a estratégia.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA fora das caixas (melhor hierarquia visual) */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center gap-3">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base md:text-lg px-7 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar com advogado
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-7 py-6 h-auto"
              asChild
            >
              <a href="#captura">Quero análise do meu caso</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CAPTURA (FORM) */}
      <section id="captura" className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Quer uma análise inicial do seu caso?
              </h2>
              <p className="text-muted-foreground mt-3">
                Envie seus dados e uma breve descrição. Se preferir, clique no WhatsApp.
              </p>
            </motion.div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Descreva melhor o seu caso</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade/UF</Label>
                      <Input
                        id="city"
                        placeholder="Ex.: Ariquemes/RO"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="Ambiental & Agrário (Produtor Rural)">
                          Ambiental & Agrário (Produtor Rural)
                        </option>
                        <option value="Defesa em Busca e Apreensão">
                          Defesa em Busca e Apreensão
                        </option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Descreva o ocorrido (opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Ex.: recebi auto de infração, houve embargo, valor da multa, órgão autuador, etc."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={submitting}>
                      {submitting ? "Enviando..." : "Enviar para análise"}
                    </Button>
                    <Button type="button" variant="outline" asChild>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        Prefiro WhatsApp
                        <MessageCircle className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>

                  {status === "ok" && (
                    <p className="text-sm text-primary">
                      Recebido! Em breve entraremos em contato.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Não foi possível enviar agora. Clique no WhatsApp para atendimento imediato.
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground">
                    Atendimento ético e sigiloso. Cada caso é analisado individualmente.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Sobre o escritório
            </motion.h2>

            <motion.div
              className="space-y-5 text-lg text-primary-foreground/90 leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p>
                O <strong>escritório HR Advocacia</strong> atua com foco em{" "}
                <strong>Direito Ambiental e Agrário</strong>, atendendo produtores rurais e
                empresas do agronegócio na defesa de autos de infração, multas e embargos.
              </p>
              <p>
                A atuação é <strong>personalizada</strong>, com análise técnica do auto,
                documentação do imóvel, provas e procedimento administrativo, buscando a melhor
                estratégia para proteger sua atividade e seu patrimônio.
              </p>
              <p>
                Atendimento online e presencial (conforme o caso), comunicação direta e orientação
                clara do que fazer — do primeiro contato até a definição da medida administrativa
                e/ou judicial.
              </p>
            </motion.div>

            <div className="mt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar com o escritório
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-foreground">Dúvidas frequentes</h2>
              <p className="text-muted-foreground mt-3">
                Respostas diretas para objeções comuns do produtor rural.
              </p>
            </motion.div>

            <div className="space-y-5">
              {faqs.map((item, i) => (
                <Card key={i} className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-destructive/20 rounded-full">
              <FileWarning className="h-9 w-9" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Não deixe uma multa ou embargo travar sua operação.
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Clique no botão e fale com o escritório HR Advocacia agora.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar com advogado agora
              </a>
            </Button>
            <p className="text-xs text-primary-foreground/75">
              Atendimento ético e sigiloso. Cada caso é analisado individualmente.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
