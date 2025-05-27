"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Get in touch with Jiři Kočica for inquiries about artworks, commissions, exhibitions, or collaborations.
          </p>

          <div className="w-full max-w-5xl mx-auto md:flex md:gap-12">
            {/* Contact Info */}
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
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
              </motion.div>
            </motion.div>

            {/* Representation Info */}
            <motion.div 
              className="w-full md:w-1/2 md:pl-12 mt-12 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Representation</h2>
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="font-semibold mb-2">Gallery Mulec</h3>
                <p className="text-gray-600">Trubarjeva cesta 22</p>
                <p className="text-gray-600">1000 Ljubljana</p>
                <p className="text-gray-600">Slovenia</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}