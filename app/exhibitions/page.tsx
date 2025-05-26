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
      id: "exhibition-1",
      title: "Being",
      year: "2023",
      location: "Ljubljana",
      shortDescription: "Exhibition and event at the gallery Hest",
      image: "./Biti1.jpg"
    },
    {
      id: "exhibition-2",
      title: "DNA heritage",
      year: "2022",
      location: "Izola",
      shortDescription: "Exhibition and event at the gallery Insula",
      image: "./Insula_drugasoba.jpg"
    },
    {
      id: "exhibition-3",
      title: "Jure Zadnikar and Jiři Kočica",
      year: "2022",
      location: "Ljubljana",
      shortDescription: "Exhibition and event in the studio at Trubarjeva cesta 23",
      image: "./jure_jiri3.jpg"
    },
    {
      id: "exhibition-4",
      title: "Izvirnik (Source of Origin)",
      year: "2018",
      location: "Ljubljana",
      shortDescription: "The release of the book (novel) \"Izvirnik\" (Source or Origin) and the nomination for the Kresnik Award",
      image: "./izvirnik.jpg"
    },
    {
      id: "exhibition-5",
      title: "Artside the box",
      year: "2016",
      location: "Vienna",
      shortDescription: "Sculpture installation and event",
      image: "./artsidethebox2.jpg"
    },
    {
      id: "exhibition-6",
      title: "Open studio",
      year: "2015",
      location: "Ljubljana",
      shortDescription: "Month of the open studio",
      image: "./odprtiatelje1.jpg"
    },
    {
      id: "exhibition-7",
      title: "Heritage",
      year: "2014",
      location: "Nova Gorica",
      shortDescription: "",
      image: "./NGprerokinje.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exhibitions</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Explore Jiři Kocica's various exhibitions.
          </p>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block"></div>

            {/* Timeline Items */}
            {collections.map((collection, index) => (
              <div key={collection.id} className="relative mb-16 md:mb-24">
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Content Container */}
                <div className={`md:flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-lg shadow-lg border">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">{collection.title}</h2>
                        <div>
                          <span className="text-lg font-medium text-gray-500">{collection.location},</span>&nbsp;
                          <span className="text-lg font-medium text-gray-500">{collection.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{collection.shortDescription}</p>
                      {/* Pieces Grid */}
                      <div className="space-y-4">
                        <div className="w-64 h-64 overflow-hidden rounded">
                          <img
                            src={collection.image}
                            alt="Being image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <Button variant="outline" className="mt-6">
                        View Collection
                      </Button>
                    </div>
                  </div>

                  {/* Mobile-only year indicator */}
                  <div className="md:hidden absolute top-0 left-0 bg-black text-white px-3 py-1 rounded-br-lg">
                    {collection.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commission Section */}
          <div className="bg-gray-50 p-8 rounded-lg mt-16">
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