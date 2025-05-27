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
        <section className="container mx-auto px-4 pt-16 md:pt-24">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold  text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sculptures
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore Jiří Kočica's three-dimensional works in interactive 3D
          </motion.p>
        </section>
        <section className="container mx-auto px-4 pb-16">
          <SculptureGallery />
        </section>

      </main>

      <Footer />
    </div>
  )
} 