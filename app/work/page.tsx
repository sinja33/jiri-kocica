import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { publicDecrypt } from "crypto"

export const metadata = {
  title: "Work - Jiri Kocica",
  description: "Explore the sculptural works and art collections by contemporary artist Jiri Kocica.",
}

export default function WorkPage() {
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
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Work</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore Jiří Kočica's sculptural works and exhibitions spanning over three decades of artistic practice.
          </p>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[1/1] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-1">{item.materials}</p>
                    {item.length && (
                      <p className="text-sm opacity-90 mb-1">Length: {item.length}</p>
                    )}
                    {item.height && (
                      <p className="text-sm opacity-90 mb-1">Height: {item.height}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Commission a Custom Piece</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Interested in commissioning a custom sculpture for your space? Jiří Kočica creates bespoke pieces for
              private collectors, public spaces, and architectural projects.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Inquire About Commissions</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}