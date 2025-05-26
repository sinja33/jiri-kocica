import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "About - Jiri Kocica",
  description: "Learn about contemporary sculptor Jiri Kocica, his background, approach, and artistic vision.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Jiri Kocica</h1>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">The Artist</h2>
              <p className="text-gray-600 mb-4">
                Jiri Kocica is a contemporary sculptor whose work explores the relationship between material, form, and
                spatial dynamics. With a background in both traditional and experimental techniques, Kocica creates
                pieces that challenge viewers to reconsider their perception of three-dimensional art.
              </p>
              <p className="text-gray-600">
                His sculptures have been exhibited in galleries across Europe and North America, earning recognition for
                their innovative approach to materiality and conceptual depth.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">Artistic Approach</h2>
              <p className="text-gray-600 mb-4">
                Kocica's work is characterized by a deep investigation of form, material properties, and the dialogue
                between object and space. His sculptures often incorporate unexpected juxtapositions of materials,
                creating tensions that invite contemplation and reinterpretation.
              </p>
              <p className="text-gray-600">
                Drawing inspiration from both natural phenomena and architectural principles, his pieces exist at the
                intersection of organic and constructed forms, challenging conventional categorizations of sculptural
                practice.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Education & Background</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 font-bold">2010-2014</div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold">Master of Fine Arts, Sculpture</h3>
                  <p className="text-gray-600">Academy of Arts, Architecture and Design, Prague</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 font-bold">2006-2010</div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold">Bachelor of Arts, Fine Art</h3>
                  <p className="text-gray-600">University of Arts, Berlin</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 font-bold">2014-2015</div>
                <div className="w-full md:w-3/4">
                  <h3 className="font-semibold">Artist Residency</h3>
                  <p className="text-gray-600">International Sculpture Center, New York</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Artist Statement</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4 italic">
                "My work investigates the boundaries between physical presence and perceptual experience. Through
                sculpture, I seek to create moments of encounter that challenge our understanding of materiality and
                form.
              </p>
              <p className="text-gray-600 mb-4 italic">
                Each piece emerges from a dialogue between concept, material, and process—a conversation that continues
                as the viewer engages with the work in space. I am interested in the tensions that arise when familiar
                materials are transformed, when expected relationships are disrupted, and when the line between the
                natural and the constructed becomes blurred.
              </p>
              <p className="text-gray-600 italic">
                Ultimately, my sculptures are invitations to reconsider our relationship with the physical world and the
                frameworks through which we interpret it."
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
