"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SculptureGallery from "@/components/sculpture-gallery"
import { motion } from "framer-motion"

export default function SculpturesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sculptures</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Explore Jiří Kočica's sculptures in three dimensional space.
          </p>

          
          <section className="container mx-auto px-4 pb-16">
            <SculptureGallery />
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
} 