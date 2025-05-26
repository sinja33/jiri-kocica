
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ArtsyGallery from "@/components/artsy-gallery"

export const metadata = {
  title: "Gallery - Jiri Kocica",
  description: "Explore Jiri Kocica's sculptures and exhibitions in an interactive visual gallery.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Gallery</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Scroll through Jiří Kočica's gallery and grab photos along the way
          </p>
        </section>

        <ArtsyGallery />

        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Every piece tells a story
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto px-4">
              Hover over the images to discover more about each work and its journey through time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}