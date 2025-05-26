import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

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
      material: "Marble and Wood"
    },
    {
      id: 2,
      image: "/work/Mislec.png",
      title: "Thinker",
      material: ""
    },
    {
      id: 3,
      image: "./work/Speči otrok.png",
      title: "Sleeping Child",
      material: "Marble"
    },
    {
      id: 4,
      image: "./work/Dojenček na dlani (detajl).png",
      title: "Baby in the palm of your hand",
      material: "Bronze and Stone"
    },
    {
      id: 5,
      image: "./work/V objem (detajl).png",
      title: "Into a hug",
      material: "Bronze and Stone"
    },
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
                    <p className="text-sm opacity-90 mb-1">{item.material}</p>
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