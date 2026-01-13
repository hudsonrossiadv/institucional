"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Calendar,
  FileText,
  Scale,
  Instagram,
  ExternalLink,
} from "lucide-react"

const Bio = () => {
  const links = [
    {
      icon: Calendar,
      title: "Agendar Consulta",
      description: "Consulta de 30 minutos",
      url: "https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Atendimento direto e rápido",
      url: "https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21",
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "(69) 9948-9259",
      url: "tel:+556999489259",
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "hudsonrossi.adv@gmail.com",
      url: "mailto:hudsonrossi.adv@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
    },
    // {
    //   icon: Scale,
    //   title: "Áreas de Atuação",
    //   description: "Conheça nossa especialização",
    //   url: "/areas",
    //   color: "bg-amber-500 hover:bg-amber-600",
    // },
    // {
    //   icon: FileText,
    //   title: "Blog Jurídico",
    //   description: "Artigos e atualizações",
    //   url: "/blog",
    //   color: "bg-indigo-500 hover:bg-indigo-600",
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-md">
          {/* Profile Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Scale className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
                <Instagram className="h-6 w-6 text-accent-foreground" />
              </div>
            </div>

            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              Dr. Hudson Rossi
            </h1>
            <p className="text-lg text-primary font-semibold mb-3">
              Advocacia Especializada
            </p>
          </motion.div>

          {/* Quick Stats */}

          {/* Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Button
                  asChild
                  className={`w-full h-auto p-4 ${link.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div className="flex items-center w-full">
                      <link.icon className="h-6 w-6 mr-4 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="font-semibold text-lg">
                          {link.title}
                        </div>
                        <div className="text-sm opacity-90">
                          {link.description}
                        </div>
                      </div>
                      {link.url.startsWith("http") && (
                        <ExternalLink className="h-5 w-5 ml-2 flex-shrink-0" />
                      )}
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            className="text-center mt-8 pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-sm text-muted-foreground mb-2">
              📍 Rua Amapá, nº 2539 - Ariquemes/RO
            </p>
            <p className="text-xs text-muted-foreground">
              © 2026 Dr. Hudson Rossi Advocacia
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default Bio
