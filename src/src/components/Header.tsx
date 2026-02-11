"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

import { Logo } from "./Logo"

/**
 * Componente de cabeçalho da página.
 *
 * Este cabeçalho inclui um menu de navegação com uma lista de áreas de atuação.
 * Adicionamos a nova área "Defesa em Busca e Apreensão" para destacar
 * os serviços de recuperação de veículos apreendidos. A lista de áreas é usada
 * para gerar links de âncoras na página /areas.
 */
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lista de áreas disponíveis. Cada item deve ter um título e um identificador
  // que corresponde à âncora na página de áreas. A nova área de defesa contra
  // busca e apreensão foi adicionada ao final da lista.
  const areas = [
    { title: "Direito Empresarial", id: "direito-empresarial" },
    { title: "Direito Contratual", id: "direito-contratual" },
    { title: "Direito Civil", id: "direito-civil" },
    { title: "Direito Imobiliário", id: "direito-imobiliario" },
    { title: "Direito do Trabalho", id: "direito-trabalho" },
    { title: "Direito Tributário", id: "direito-tributario" },
    // Nova área focada em defesa contra busca e apreensão de veículos
    // Incluímos a propriedade href para direcionar à landing page /dba
    { title: "Defesa em Busca e Apreensão", id: "defesa-busca-e-apreensao", href: "/dba" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Início
          </a>
          <a
            href="/saiba-mais"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Saiba Mais
          </a>

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center font-medium gap-1 text-sm text-foreground  hover:text-primary cursor-pointer"
            >
              Áreas de Atuação
              <ChevronDown className="h-4 w-4" />
            </div>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                <a
                  href="/areas"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Ver Todas as Áreas
                </a>
                {areas.map((area) => (
                  <a
                    key={area.id}
                    href={area.href ?? `/areas#${area.id}`}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {area.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* <a href="/blog" className="...">Blog</a> */}
          <a
            href="/contato"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {mounted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}

          <Button
            variant="default"
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a
              href="https://wa.me/556999489259?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20e%20saber%20como%20podemos%20agendar%20uma%20conversa.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulta
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header