"use client"

import { motion } from "framer-motion"
import Contact from "@/components/Contact"

/**
 * Página /contato
 *
 * Conforme solicitado, removemos os cards quadrados de informações (endereço, e-mail,
 * whatsapp, etc.) e deixamos apenas o formulário de contato.
 */
export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <motion.section
          className="py-12 bg-gradient-to-br from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Contato
              </h1>
              <p className="text-lg text-muted-foreground">
                Envie sua mensagem e retornaremos o mais rápido possível.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Formulário (sem os cards quadrados) */}
        <Contact />
      </main>
    </div>
  )
}
