import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section with Overlaid Title */}
        <section className="relative h-screen flex justify-center">
          {/* Sculpture Image - smaller, centered */}
          <div className="relative z-0">
            <img
              src="/home.png"
              alt="Jiri Kocica Sculpture"
              className="max-h-[90vh] max-w-full object-contain"
            />
            
          </div>
        </section>

        {/* About/Description Section */}
        <section className="py-0 md:py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
              Exploring the boundaries between form, space, and meaning through sculptural works that challenge
              conventional perspectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/work">View Work</Link>
              </Button>
              <Button asChild size="lg">
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