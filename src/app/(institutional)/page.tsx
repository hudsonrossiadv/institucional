"use client"

import About from "@/components/About"
import Banner from "@/components/Banner"
import BlogSection from "@/components/BlogSection"
import Contact from "@/components/Contact"
import PracticeAreas from "@/components/PractionerAreas"

export default function RootPage() {
  return (
    <div className="pt-16">
      <Banner />
      <About />
      <PracticeAreas />
      {/* <BlogSection /> */}
      <Contact />
    </div>
  )
}
