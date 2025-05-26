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
                  <h3 className="font-semibold mb-2">Studio Address</h3>
                  <p className="text-gray-600">
                    Kunsthalle Studio Complex
                    <br />
                    Hauptstrasse 123
                    <br />
                    10559 Berlin, Germany
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">studio@jirikocica.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+49 30 1234 5678</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Studio Visits</h2>
              <p className="text-gray-600 mb-4">
                Studio visits are available by appointment for collectors, curators, and art professionals. Please
                contact us to arrange a visit.
              </p>

              <h2 className="text-2xl font-bold mb-6 mt-8">Representation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Gallery Modern</h3>
                  <p className="text-gray-600">Berlin, Germany</p>
                  <a href="#" className="text-black hover:underline">
                    gallerymodern.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">Contemporary Arts Space</h3>
                  <p className="text-gray-600">Prague, Czech Republic</p>
                  <a href="#" className="text-black hover:underline">
                    contemporaryartsspace.cz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Newsletter</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to receive updates about new works, upcoming exhibitions, and events.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-black focus:outline-none"
              />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
