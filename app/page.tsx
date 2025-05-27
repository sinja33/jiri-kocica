"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow overflow-x-hidden">
        {/* Hero Section with Overlaid Title */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
          {/* Sculpture Image - smaller, centered */}
          <motion.div 
            className="relative z-0 w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src="/home.png"
              alt="Jiri Kocica Sculpture"
              className="max-h-[80vh] w-full max-w-full object-contain mx-auto"
            />
          
          </motion.div>

          
        </section>

        {/* About/Description Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              Exploring the boundaries between form, space, and meaning through sculptural works that challenge
              conventional perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/work">View Collection</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  )
}