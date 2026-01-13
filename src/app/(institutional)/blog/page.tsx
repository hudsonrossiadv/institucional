"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Calendar, Clock, Search, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Lei Geral de Proteção de Dados (LGPD): Guia Completo para Empresas",
    excerpt:
      "Entenda como adequar sua empresa às exigências da LGPD e evitar multas milionárias. Um guia prático com as principais obrigações e procedimentos.",
    category: "Direito Digital",
    date: "15 de Março, 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Reforma do Marco Legal das Startups: O que Mudou",
    excerpt:
      "Análise detalhada das principais mudanças no marco legal das startups e como isso impacta o ecossistema de inovação brasileiro.",
    category: "Direito Empresarial",
    date: "10 de Março, 2024",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 3,
    title: "Contratos Empresariais: 5 Cláusulas Essenciais",
    excerpt:
      "Descubra as cláusulas indispensáveis que todo contrato empresarial deve ter para proteger sua empresa de riscos desnecessários.",
    category: "Contratos",
    date: "8 de Março, 2024",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 4,
    title: "ESG nas Empresas: Aspectos Jurídicos e Compliance",
    excerpt:
      "Como implementar práticas ESG de forma juridicamente segura e criar valor para todos os stakeholders da sua empresa.",
    category: "Compliance",
    date: "5 de Março, 2024",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 5,
    title: "Recuperação Judicial: Quando e Como Solicitar",
    excerpt:
      "Guia completo sobre recuperação judicial: requisitos, procedimentos e estratégias para empresas em dificuldades financeiras.",
    category: "Direito Empresarial",
    date: "1 de Março, 2024",
    readTime: "10 min",
    featured: false,
  },
  {
    id: 6,
    title: "Arbitragem Empresarial: Vantagens e Procedimentos",
    excerpt:
      "Por que a arbitragem pode ser a melhor solução para conflitos empresariais e como estruturar cláusulas arbitrais eficazes.",
    category: "Resolução de Conflitos",
    date: "28 de Fevereiro, 2024",
    readTime: "6 min",
    featured: false,
  },
]

const categories = [
  "Todos",
  "Direito Empresarial",
  "Contratos",
  "Compliance",
  "Direito Digital",
  "Resolução de Conflitos",
]

const Blog = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-b from-background to-gradient-to py-16"
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
              <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                Blog Jurídico
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Insights, análises e orientações práticas sobre direito
                empresarial e civil. Mantenha-se atualizado com as principais
                mudanças e tendências do mundo jurídico.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar artigos..." className="pl-10" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">
                Artigo em Destaque
              </h2>
              {blogPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center">
                        <div className="text-6xl font-serif font-bold text-primary/20">
                          LGPD
                        </div>
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge>{post.category}</Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {post.excerpt}
                        </p>
                        <Button>Ler Artigo Completo</Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-12 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Todos os Artigos</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-4"
                        >
                          Ler Mais
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Carregar Mais Artigos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Receba Atualizações Jurídicas
              </h2>
              <p className="text-slate-300 mb-8">
                Inscreva-se em nossa newsletter e receba artigos, análises e
                atualizações sobre as principais mudanças no mundo jurídico
                diretamente em seu email.
              </p>

              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Seu email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Inscrever
                </Button>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                Enviamos apenas conteúdo relevante. Sem spam, sempre.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Blog
