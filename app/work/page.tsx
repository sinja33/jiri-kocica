"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"


export default function WorkPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery data with actual exhibition images
  const galleryItems = [
    {
      id: 1,
      image: "/work/Sanje.png",
      title: "Dreams",
      materials: "Brač marble and wood",
      length: "18 cm",
      height: null
    },
    {
      id: 2,
      image: "/work/Mislec.png",
      title: "Thinker",
      materials: "Onyx",
      length: null,
      height: "10 cm"
    },
    {
      id: 3,
      image: "/work/Speči otrok.png",
      title: "Sleeping Child",
      materials: "Čačak marble",
      length: "12 cm",
      height: null
    },
    {
      id: 4,
      image: "/work/Dojenček na dlani (detajl).png",
      title: "Baby in Palm (detail)",
      materials: "Bronze and stone",
      length: "15 cm",
      height: "200 cm"
    },
    {
      id: 5,
      image: "/work/V objem (detajl).png",
      title: "Into an Embrace (detail)",
      materials: "Bronze and stone",
      length: "15 cm",
      height: "210 cm"
    },
    {
      id: 6,
      image: "./work/Speči otrok (detajl) (1).png",
      title: "Sleeping Child (detail)",
      materials: "Bronze and stone",
      length: "15 cm",
      height: "185 cm"
    },
    {
      id: 7,
      image: "/work/Speči otrok (celotna skulptura).png",
      title: "Sleeping Child (complete sculpture)",
      materials: "Bronze and stone",
      length: null,
      height: null
    },
    {
      id: 8,
      image: "/work/Rojen s srebrno žlico 1.png",
      title: "Born with Silver Spoon 1",
      materials: "Wood and silver",
      length: "12 cm", // spoon length
      height: null
    },
    {
      id: 9,
      image: "/work/Rojen s srebrno žlico 2.png",
      title: "Born with Silver Spoon 2",
      materials: "Wood and silver",
      length: "19 cm", // spoon length
      height: null
    },
    {
      id: 10,
      image: "/work/Rojen s srebrno žlico 2 (zaprt).png",
      title: "Born with Silver Spoon 2 (closed)",
      materials: "Wood and silver",
      length: null,
      height: null
    },
    {
      id: 11,
      image: "/work/Rojen s srebrno žlico 3.png",
      title: "Born with Silver Spoon 3",
      materials: "Wood and silver",
      length: "11 cm", // spoon length
      height: null
    },
    {
      id: 12,
      image: "/work/Rojstvo.png",
      title: "Birth",
      materials: "Bronze and stone",
      length: null,
      height: "18 cm"
    },
    {
      id: 13,
      image: "/work/Krst.png",
      title: "Baptism",
      materials: "Bronze and stone",
      length: null,
      height: "25 cm"
    },
    {
      id: 14,
      image: "/work/Fontana - otrok.png",
      title: "Fountain - Child",
      materials: "Bronze, glass and stone",
      length: "40 cm", // using dimensions 40x40x110
      height: "110 cm"
    },
    {
      id: 15,
      image: "./work/Fontana - otrok (1).png",
      title: "Fountain - Child",
      materials: "Bronze, glass and stone",
      length: null,
      height: null
    },
    {
      id: 16,
      image: "./work/Fontana - očetovstvo (1).png",
      title: "Fountain - Fatherhood",
      materials: "Bronze, glass and stone",
      length: "70 cm", // using dimensions 70x40x70
      height: "70 cm"
    },
    {
      id: 17,
      image: "./work/Fontana - očetovstvo (2).png",
      title: "Fountain - Fatherhood",
      materials: "Bronze, glass and stone",
      length: null,
      height: null
    },
    {
      id: 18,
      image: "./work/Fontana - očetovstvo (3).png",
      title: "Fountain - Fatherhood",
      materials: "Bronze, glass and stone",
      length: null,
      height: null
    },
    {
      id: 19,
      image: "./work/Ljubezen.png",
      title: "Love",
      materials: "Brač marble",
      length: null,
      height: "100 cm"
    },
    {
      id: 20,
      image: "./work/Ljubezen2.png",
      title: "Love",
      materials: "Brač marble",
      length: null,
      height: null
    }
  ]
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Work</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Explore Jiří Kočica's sculptural works crafted with traditional materials and contemporary vision.
          </p>

          {/* Gallery Grid */}
          <section className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setSelectedImage(item.id)}
                >
                  {/* Image */}
                  <div className="aspect-[1/1] overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.materials}</p>
                      {item.length && <p className="text-sm opacity-75">Length: {item.length}</p>}
                      {item.height && <p className="text-sm opacity-75">Height: {item.height}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Commission Section */}
          <motion.section 
            className="bg-gray-50 py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 text-center">
              <motion.h2 
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Commission a Custom Piece
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Interested in commissioning a custom sculpture for your space? Jiří Kočica creates bespoke pieces for
                private collectors, public spaces, and architectural projects.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg">
                  <Link href="/contact">Inquire About Commissions</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-w-4xl max-h-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>

                  {/* Image */}
                  <img
                    src={galleryItems.find(item => item.id === selectedImage)?.image}
                    alt={galleryItems.find(item => item.id === selectedImage)?.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />

                  {/* Image info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">
                      {galleryItems.find(item => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-1">
                      {galleryItems.find(item => item.id === selectedImage)?.materials}
                    </p>
                    {galleryItems.find(item => item.id === selectedImage)?.length && (
                      <p className="text-sm opacity-75">
                        Length: {galleryItems.find(item => item.id === selectedImage)?.length}
                      </p>
                    )}
                    {galleryItems.find(item => item.id === selectedImage)?.height && (
                      <p className="text-sm opacity-75">
                        Height: {galleryItems.find(item => item.id === selectedImage)?.height}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer />
    </div>
  )
}