import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

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

          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="artwork">Artwork Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="exhibition">Exhibition Opportunity</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Home Address</h3>
                  <p className="text-gray-600">
                    Kebetova ulica 34
                    <br />
                    1000 Ljubljana, Slovenia
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

              <h2 className="text-2xl font-bold mb-6 mt-8">Representation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Gallery Mulec</h3>
                  <p className="text-gray-600">Trubarjeva cesta 22</p>
                  <p className="text-gray-600">1000 Ljubljana</p>
                  <p className="text-gray-600">Slovenia</p>
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
