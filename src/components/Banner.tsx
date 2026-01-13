import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Scale, Shield, Award } from "lucide-react"
import Image from "next/image"

const Banner = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hudson Rossi
                <span className="text-primary block">Advocacia</span>
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Advocacia estratégica, com atuação técnica e responsável na
                defesa de interesses patrimoniais, civis e empresariais.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a
                  href="https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Conhecer Escritório
              </Button> */}
            </motion.div>

            {/* <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Scale className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">
                  Casos Ganhos
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1</div>
                <div className="text-sm text-muted-foreground">
                  Ano de Experiência
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">
                  Taxa de Sucesso
                </div>
              </motion.div>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-card">
              <Image
                width={645}
                height={805}
                src={
                  "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="Escritório de advocacia profissional"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
