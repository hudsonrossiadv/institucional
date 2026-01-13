"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock, Share2, ArrowLeft, User, Tag } from "lucide-react"

const BlogPost = () => {
  const relatedPosts = [
    {
      title: "LGPD no Ambiente Corporativo",
      excerpt:
        "Como adequar sua empresa às novas regulamentações de proteção de dados",
      date: "15 Mar 2024",
      category: "Direito Digital",
    },
    {
      title: "Contratos de Trabalho Remoto",
      excerpt: "Aspectos legais do trabalho à distância na legislação atual",
      date: "10 Mar 2024",
      category: "Direito Trabalhista",
    },
    {
      title: "Startups e Aspectos Jurídicos",
      excerpt:
        "Guia completo para formalização e proteção jurídica de startups",
      date: "5 Mar 2024",
      category: "Direito Empresarial",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Article Header */}
        <motion.section
          className="py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button variant="ghost" className="mb-6" asChild>
                <a href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Blog
                </a>
              </Button>

              <Badge variant="secondary" className="mb-4">
                Direito Empresarial
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Marco Legal das Startups: Oportunidades e Desafios para
                Empreendedores
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Dr. Hudson Rossi
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  20 de Março, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />8 min de leitura
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Imagem do Artigo
                  </h3>
                  <p className="text-muted-foreground">
                    Marco Legal das Startups
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Article Content */}
        <motion.section
          className="pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                  <p>
                    O Marco Legal das Startups, estabelecido pela Lei
                    Complementar nº 182/2021, representa um divisor de águas no
                    ecossistema empreendedor brasileiro. Esta legislação trouxe
                    importantes inovações que facilitam a criação,
                    desenvolvimento e crescimento de empresas inovadoras no
                    país.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Principais Inovações da Lei
                  </h2>

                  <p>
                    Entre as principais mudanças introduzidas pela nova
                    legislação, destacam-se:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Definição legal de startup:</strong> Empresas com
                      até 10 anos de inscrição no CNPJ, faturamento anual de até
                      R$ 16 milhões e que desenvolvam modelos de negócios
                      inovadores.
                    </li>
                    <li>
                      <strong>Tratamento tributário diferenciado:</strong>{" "}
                      Possibilidade de enquadramento no Simples Nacional mesmo
                      com investimento de capital estrangeiro.
                    </li>
                    <li>
                      <strong>Facilitação do investimento:</strong> Criação de
                      novos instrumentos jurídicos para captação de recursos.
                    </li>
                    <li>
                      <strong>Ambiente regulatório experimental:</strong>{" "}
                      Sandbox regulatório para testar soluções inovadoras.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Impactos Práticos para Empreendedores
                  </h2>

                  <p>
                    A nova legislação traz benefícios concretos para o dia a dia
                    das startups. A possibilidade de manter o regime do Simples
                    Nacional mesmo com investimento estrangeiro é
                    particularmente relevante, pois anteriormente isso
                    resultaria automaticamente no desenquadramento do regime
                    simplificado.
                  </p>

                  <p>
                    Além disso, a criação de novos instrumentos de investimento,
                    como o contrato de investimento coletivo e as debêntures
                    conversíveis, oferece maior flexibilidade na estruturação de
                    rodadas de investimento.
                  </p>

                  <h2 className="text-2xl font-serif font-bold text-foreground mt-8 mb-4">
                    Desafios e Cuidados Necessários
                  </h2>

                  <p>
                    Apesar dos avanços, é fundamental que empreendedores estejam
                    atentos aos requisitos para manutenção dos benefícios. O
                    enquadramento como startup exige comprovação contínua dos
                    critérios estabelecidos pela lei.
                  </p>

                  <p>
                    Recomendamos que startups busquem assessoria jurídica
                    especializada para estruturar adequadamente seus negócios e
                    aproveitar plenamente as oportunidades oferecidas pelo novo
                    marco legal.
                  </p>

                  <div className="bg-accent/10 rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      💡 Dica do Especialista
                    </h3>
                    <p className="text-muted-foreground">
                      É essencial manter documentação organizada e atualizada
                      sobre as atividades inovadoras da empresa, pois isso será
                      fundamental para comprovar o enquadramento como startup
                      perante os órgãos fiscalizadores.
                    </p>
                  </div>
                </div>
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Marco Legal</Badge>
                  <Badge variant="outline">Startups</Badge>
                  <Badge variant="outline">Direito Empresarial</Badge>
                  <Badge variant="outline">Investimento</Badge>
                  <Badge variant="outline">Simples Nacional</Badge>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Related Posts */}
        <motion.section
          className="py-16 bg-secondary/30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-center mb-12">
                Artigos Relacionados
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {post.date}
                          </span>
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 h-auto"
                          >
                            Ler mais →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default BlogPost
