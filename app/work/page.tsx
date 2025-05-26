import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Work - Jiri Kocica",
  description: "Explore the sculptural works and art collections by contemporary artist Jiri Kocica.",
}

export default function WorkPage() {
  // Sample work data
  const collections = [
    {
      id: "series-1",
      title: "Organic Formations",
      year: "2023",
      description: "A series exploring natural forms and organic structures through various materials.",
      pieces: [
        { title: "Formation I", material: "Bronze, Wood", dimensions: "45 × 30 × 25 cm" },
        { title: "Formation II", material: "Marble, Steel", dimensions: "60 × 40 × 35 cm" },
        { title: "Formation III", material: "Ceramic, Brass", dimensions: "50 × 30 × 30 cm" },
      ],
    },
    {
      id: "series-2",
      title: "Spatial Dialogues",
      year: "2022",
      description: "Works that investigate the relationship between object and environment.",
      pieces: [
        { title: "Dialogue I", material: "Steel, Glass", dimensions: "80 × 50 × 40 cm" },
        { title: "Dialogue II", material: "Aluminum, Acrylic", dimensions: "70 × 45 × 35 cm" },
        { title: "Dialogue III", material: "Copper, Stone", dimensions: "65 × 40 × 30 cm" },
      ],
    },
    {
      id: "series-3",
      title: "Material Tensions",
      year: "2021",
      description: "Explorations of contrasting materials and their physical properties.",
      pieces: [
        { title: "Tension I", material: "Concrete, Fabric", dimensions: "55 × 35 × 25 cm" },
        { title: "Tension II", material: "Wood, Metal", dimensions: "60 × 40 × 30 cm" },
        { title: "Tension III", material: "Stone, Resin", dimensions: "50 × 35 × 25 cm" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Work</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore Jiri Kocica's sculptural works, organized by series and collections. Each piece represents an
            investigation into form, material, and spatial relationships.
          </p>

          {collections.map((collection, index) => (
            <div key={collection.id} id={collection.id} className="mb-20">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <h2 className="text-3xl font-bold">{collection.title}</h2>
                  <p className="text-gray-500">{collection.year}</p>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {collection.pieces.map((piece, pieceIndex) => (
                  <div
                    key={pieceIndex}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{piece.title}</h3>
                      <p className="text-gray-600 mb-1">{piece.material}</p>
                      <p className="text-gray-500 text-sm mb-4">{piece.dimensions}</p>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Commission a Custom Piece</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in commissioning a custom sculpture for your space? Jiri Kocica creates bespoke pieces for
              private collectors, public spaces, and architectural projects.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/contact">Inquire About Commissions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
