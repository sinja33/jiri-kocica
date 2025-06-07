"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { X, ArrowLeft } from "lucide-react"

interface GalleryItem {
  id: number
  image: string
  title: string
  materials: string
  length: string | null
  height: string | null
}

interface Series {
  id: string
  title: string
  description: string
  items: GalleryItem[]
}

export default function WorkPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null)

  // Organized gallery data into series
  const seriesData: Series[] = [
    {
      id: "bird-day",
      title: "Bird Day",
      description: "A contemporary series exploring the relationship between nature and form through bronze and stone.",
      items: [
        {
          id: 21,
          image: "/IMG_3169.jpeg",
          title: "Bird Day I",
          materials: "Bronze and stone",
          length: null,
          height: null
        },
        {
          id: 22,
          image: "/IMG_3171.jpeg",
          title: "Bird Day II",
          materials: "Bronze and stone",
          length: null,
          height: null
        },
        {
          id: 23,
          image: "/IMG_3569.jpeg",
          title: "Bird Day III",
          materials: "Bronze and stone",
          length: null,
          height: null
        },
        {
          id: 24,
          image: "/IMG_3571.jpeg",
          title: "Bird Day IV",
          materials: "Bronze and stone",
          length: null,
          height: null
        },
        {
          id: 25,
          image: "/IMG_7913.jpeg",
          title: "Bird Day V",
          materials: "Bronze and stone",
          length: null,
          height: null
        }
      ]
    },
    {
      id: "intimate-moments",
      title: "Intimate Moments",
      description: "Sculptural explorations of human tenderness and vulnerability in marble and stone.",
      items: [
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
        }
      ]
    },
    {
      id: "life-cycles",
      title: "Life Cycles",
      description: "Bronze and stone sculptures exploring the themes of birth, growth, and human connection.",
      items: [
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
          image: "/work/Speči otrok (detajl) (1).png",
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
        }
      ]
    },
    {
      id: "silver-spoon",
      title: "Born with Silver Spoon",
      description: "A series examining privilege and circumstance through the metaphor of silver spoons enclosed in wooden forms.",
      items: [
        {
          id: 8,
          image: "/work/Rojen s srebrno žlico 1.png",
          title: "Born with Silver Spoon 1",
          materials: "Wood and silver",
          length: "12 cm",
          height: null
        },
        {
          id: 9,
          image: "/work/Rojen s srebrno žlico 2.png",
          title: "Born with Silver Spoon 2",
          materials: "Wood and silver",
          length: "19 cm",
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
          length: "11 cm",
          height: null
        }
      ]
    },
    {
      id: "fountains",
      title: "Fountain Series",
      description: "Interactive sculptures combining bronze, glass, and stone to explore themes of childhood and fatherhood.",
      items: [
        {
          id: 14,
          image: "/work/Fontana - otrok.png",
          title: "Fountain - Child",
          materials: "Bronze, glass and stone",
          length: "40 cm",
          height: "110 cm"
        },
        {
          id: 15,
          image: "/work/Fontana - otrok (1).png",
          title: "Fountain - Child (Detail)",
          materials: "Bronze, glass and stone",
          length: null,
          height: null
        },
        {
          id: 16,
          image: "/work/Fontana - očetovstvo (1).png",
          title: "Fountain - Fatherhood",
          materials: "Bronze, glass and stone",
          length: "70 cm",
          height: "70 cm"
        },
        {
          id: 17,
          image: "/work/Fontana - očetovstvo (2).png",
          title: "Fountain - Fatherhood (Detail 1)",
          materials: "Bronze, glass and stone",
          length: null,
          height: null
        },
        {
          id: 18,
          image: "/work/Fontana - očetovstvo (3).png",
          title: "Fountain - Fatherhood (Detail 2)",
          materials: "Bronze, glass and stone",
          length: null,
          height: null
        }
      ]
    },
    {
      id: "love-series",
      title: "Love",
      description: "Monumental marble sculptures exploring the eternal theme of love and human connection.",
      items: [
        {
          id: 19,
          image: "/work/Ljubezen.png",
          title: "Love",
          materials: "Brač marble",
          length: null,
          height: "100 cm"
        },
        {
          id: 20,
          image: "/work/Ljubezen2.png",
          title: "Love (Alternative View)",
          materials: "Brač marble",
          length: null,
          height: null
        }
      ]
    }
  ]

  const currentSeries = selectedSeries ? seriesData.find(s => s.id === selectedSeries) : null
  const allItems = seriesData.flatMap(series => series.items)

  const SeriesOverview = () => (
    <section className="container mx-auto px-4 pb-16">
      <div className="space-y-16">
        {seriesData.map((series, seriesIndex) => (
          <motion.div
            key={series.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: seriesIndex * 0.1 }}
          >
            {/* Series Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-3xl font-bold mb-4">{series.title}</h2>
                  <p className="text-gray-600 max-w-2xl">{series.description}</p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Button 
                    onClick={() => setSelectedSeries(series.id)}
                    variant="outline"
                  >
                    View Complete Series
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Grid - First 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {series.items.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
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

            {/* Show count if more items exist */}
            {series.items.length > 3 && (
              <div className="text-center mt-6">
                <p className="text-gray-500 text-sm">
                  Showing 3 of {series.items.length} pieces in this series
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )

  const SeriesDetailView = () => {
    if (!currentSeries) return null

    return (
      <section className="container mx-auto px-4 pb-16">
        {/* Back Button and Series Header */}
        <div className="mb-12">
          <Button 
            onClick={() => setSelectedSeries(null)}
            variant="ghost"
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Series
          </Button>
          
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{currentSeries.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{currentSeries.description}</p>
          </div>
        </div>

        {/* Full Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSeries.items.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Work</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            {selectedSeries 
              ? `Explore the complete ${currentSeries?.title} series`
              : "Explore Jiři Kočica's sculptural works organized by thematic series, crafted with traditional materials and contemporary vision."
            }
          </p>

          {/* Conditional Rendering */}
          {selectedSeries ? <SeriesDetailView /> : <SeriesOverview />}


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
                    src={allItems.find(item => item.id === selectedImage)?.image}
                    alt={allItems.find(item => item.id === selectedImage)?.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />

                  {/* Image info */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">
                      {allItems.find(item => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-1">
                      {allItems.find(item => item.id === selectedImage)?.materials}
                    </p>
                    {allItems.find(item => item.id === selectedImage)?.length && (
                      <p className="text-sm opacity-75">
                        Length: {allItems.find(item => item.id === selectedImage)?.length}
                      </p>
                    )}
                    {allItems.find(item => item.id === selectedImage)?.height && (
                      <p className="text-sm opacity-75">
                        Height: {allItems.find(item => item.id === selectedImage)?.height}
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