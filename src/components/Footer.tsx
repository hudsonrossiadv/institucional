"use client"

import { TiktokLogoIcon } from "@phosphor-icons/react"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-serif font-bold mb-2">
                Dr. Hudson Rossi
              </div>
              <div className="text-primary-foreground/80">
                Advocacia Especializada
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Escritório jurídico sediado em Ariquemes, Rondônia, que atua na
              prestação de serviços jurídicos de forma técnica, estratégica e
              personalizada, com foco na segurança jurídica e proteção
              patrimonial.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@hudsonrossi.advogado"
                target="_blank"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors"
              >
                <TiktokLogoIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hudsonrossi.adv/"
                target="_blank"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold">Áreas de Atuação</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito Empresarial
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito Contratual
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito Civil
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito Imobiliário
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito do Trabalho
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Direito Tributário
                </a>
              </li>
            </ul>
          </div> */}

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-accent transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-accent transition-colors"
                >
                  Sobre
                </a>
              </li>
              {/* <li>
                <a
                  href="#areas"
                  className="hover:text-accent transition-colors"
                >
                  Áreas de Atuação
                </a>
              </li> */}
              <li>
                <a
                  href="#contato"
                  className="hover:text-accent transition-colors"
                >
                  Contato
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog Jurídico
                </a>
              </li> */}
              {/* <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li> */}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-4 text-primary-foreground/80">
              <div className="flex items-start space-x-3">
                <div>
                  <div>Av. Sergipe, 1000 - Conjunto 123</div>
                  <div>Ariquemes - RO</div>
                  <div>CEP: 01310-100</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <div>(69) 99948-9259</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div>
              © 2024 Dr. Hudson Rossi Advocacia. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>OAB/RO:</span>
              <span className="text-accent font-medium">123.456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
