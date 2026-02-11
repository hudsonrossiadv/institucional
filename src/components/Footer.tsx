"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

// Links públicos (podem ser ajustados depois, se necessário)
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/hudsonrossi.adv"
const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL || "https://www.tiktok.com/@hudsonrossi.adv"

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {/* Ícone simples (SVG) */}
      <path d="M16.5 2c.4 3.4 2.2 5.4 5.5 5.7v3.3c-2 0-3.7-.6-5.5-1.7v7.6c0 4.1-3.3 7.4-7.4 7.4S1.7 20.9 1.7 16.8c0-4.1 3.3-7.4 7.4-7.4.6 0 1.3.1 1.9.3v3.6c-.6-.2-1.2-.4-1.9-.4-2.2 0-4 1.8-4 4 0 2.2 1.8 4 4 4s4-1.8 4-4V2h3.4z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-serif font-bold text-foreground">HR Advocacia</p>
            <p className="text-sm text-muted-foreground">Ariquemes/RO • Atendimento online e presencial</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/areas" className="text-foreground hover:text-primary transition-colors">
              Áreas
            </Link>
            <Link href="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          <p>OAB/RO nº 14.882 • Atendimento ético e sigiloso. Cada caso é analisado individualmente.</p>
        </div>
      </div>
    </footer>
  )
}
