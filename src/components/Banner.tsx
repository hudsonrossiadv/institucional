"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

/**
 * Banner (Hero) da home.
 *
 * Mantém a imagem original do projeto (pasta /public/imagessera) e ajusta a
 * proporção/tamanho para ficar consistente com a imagem do "Quem Somos".
 */
const Banner = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="absolute inset-0 bg-[url('/imagessera/eu.simples.png')] bg-cover bg-center opacity-5" />

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
                Atuação em dois focos principais: <strong>Direito Ambiental & Agrário</strong>
                (Produtor Rural) e <strong>Defesa em Busca e Apreensão</strong>, com estratégia,
                agilidade e comunicação clara.
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
            </motion.div>
          </motion.div>

          {/* Imagem do hero com proporção consistente */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-card">
                <Image
                  src="/imagessera/eu.simples.PNG"
                  alt="Hudson Rossi - Advocacia"
                  width={645}
                  height={805}
                  quality={90}
                  sizes="(max-width: 1024px) 92vw, 440px"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
