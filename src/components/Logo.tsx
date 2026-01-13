"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"
import LogoLight from "@/assets/LogoLight.png"
import LogoDark from "@/assets/LogoDark.png"

export function Logo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Image alt="logo" src={LogoLight} height={32} priority />
  }

  return (
    <Image
      alt="logo"
      src={theme === "light" ? LogoLight : LogoDark}
      height={32}
      priority
    />
  )
}
