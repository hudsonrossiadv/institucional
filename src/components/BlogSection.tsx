import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"

const BlogSection = () => {
  const articles = [
    {
      title: "Nova Lei de Proteção de Dados: Impactos para Empresas",
      excerpt:
        "Entenda como a LGPD afeta seu negócio e quais medidas preventivas adotar para garantir compliance total.",
      date: "15 de Janeiro, 2024",
      author: "Dr. Hudson Rossi",
      category: "Direito Digital",
      readTime: "5 min",
    },
    {
      title: "Contratos Empresariais: Principais Cláusulas de Proteção",
      excerpt:
        "Descubra as cláusulas essenciais que todo contrato empresarial deve ter para proteger seus interesses.",
      date: "10 de Janeiro, 2024",
      author: "Dr. Hudson Rossi",
      category: "Direito Empresarial",
      readTime: "7 min",
    },
    {
      title: "Planejamento Tributário: Estratégias Legais para Reduzir Custos",
      excerpt:
        "Conheça as principais estratégias de planejamento tributário para otimizar a carga fiscal da sua empresa.",
      date: "5 de Janeiro, 2024",
      author: "Dr. Hudson Rossi",
      category: "Direito Tributário",
      readTime: "6 min",
    },
  ]

  return (
    <motion.section
      className="py-24 bg-muted/30"
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
            Blog Jurídico
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Fique atualizado com as últimas novidades do direito e insights
            práticos para proteger seus interesses pessoais e empresariais.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-3">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="/blog">
                        Ler mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" asChild>
            <a href="/blog">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default BlogSection
