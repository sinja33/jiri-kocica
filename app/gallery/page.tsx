import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GalleryRoom from "@/components/gallery-room"

export const metadata = {
  title: "3D Gallery - Jiri Kocica",
  description: "Explore Jiri Kocica's sculptures in an interactive 3D virtual gallery space.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Virtual Gallery</h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Explore Jiri Kocica's sculptures in an interactive 3D environment. Use WASD keys to move and mouse to look
            around.
          </p>
        </section>

        <div className="w-full h-[600px] md:h-[800px] relative">
          <GalleryRoom />

          <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg max-w-md mx-auto">
            <h3 className="font-bold mb-2">Controls:</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>W - Move forward</li>
              <li>S - Move backward</li>
              <li>A - Move left</li>
              <li>D - Move right</li>
              <li>Mouse - Look around</li>
              <li>ESC - Release mouse</li>
            </ul>
            <p className="mt-2 text-sm">
              Click on the gallery to activate controls. Press ESC to release mouse control.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
