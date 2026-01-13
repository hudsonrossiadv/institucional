import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Hudson Gabriel Rossi - Advogado",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
