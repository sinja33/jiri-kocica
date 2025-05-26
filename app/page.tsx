import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Hero Section with Image */}
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contemporary Sculpture Artist</h1>
            <p className="text-lg text-gray-600 mb-8">
              Exploring the boundaries between form, space, and meaning through sculptural works that challenge
              conventional perspectives.
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="/work">View Collection</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[600px]">
            <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100">
              <img
                src="/hero-sculpture.jpg"
                alt="Jiri Kocica Sculpture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Featured Preview */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Sculpture Series {item}</h3>
                    <p className="text-gray-600 mb-4">A exploration of form and texture through organic materials.</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/work#series-${item}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="/work">View All Works</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
