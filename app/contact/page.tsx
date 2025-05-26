import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact - Jiri Kocica",
  description:
    "Get in touch with contemporary sculptor Jiri Kocica for inquiries, commissions, or exhibition opportunities.",
}

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Get in touch with Jiri Kocica for inquiries about artworks, commissions, exhibitions, or collaborations.
          </p>


          <div className="w-full max-w-5xl mx-auto md:flex md:gap-12">
            {/* Representation Info */}
            <div className="w-full md:w-1/2 md:pl-12 mt-12 md:mt-0">
              <h2 className="text-2xl font-bold mb-6">Representation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-2">Gallery Mulec</h3>
                <p className="text-gray-600">Trubarjeva cesta 22</p>
                <p className="text-gray-600">1000 Ljubljana</p>
                <p className="text-gray-600">Slovenia</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Home Address</h3>
                  <p className="text-gray-600">
                    Kebetova ulica 34
                    <br />
                    1000 Ljubljana
                    <br />
                    Slovenia
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">jiri.kocica@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+386 31 614 245</p>
                </div>
              </div>
            </div>

          </div>

        
        </section>
      </main>

      <Footer />
    </div>
  )
}