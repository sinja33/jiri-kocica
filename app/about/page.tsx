"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Learn about Jiři Kočica's life, his beginnings in art and sculpture.
          </p>

          <div className="flex flex-col md:flex-row items-center mb-16">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  className='w-full h-full object-cover rounded-lg' 
                  src='./jiri-about.png' 
                  alt="Jiři Kočica"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 md:pl-12">
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Jiři Kočica was born in 1966 in Slovenj Gradec, Slovenia. 
                He completed his secondary school education in design and photography, 
                specializing in graphic design, in Ljubljana in 1985. He continued his studies at 
                the Academy of Fine Arts in Ljubljana and graduated with a diploma in 
                "Sculpture at a Specific Location" in 1991 under the supervision of professors 
                Lujo Vodopivec and Tomaž Brejc. He completed his specialization in 1993 with the 
                topic "Kata-logos" under the guidance of Professor Dušan Tršar.
              </motion.p>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Currently, he is employed as a university professor at the Department of Visual Arts 
                and Design at the University of Primorska. Prior to that, he was a professor of design 
                and arrangement at the Secondary School for Arrangement. 
                He served as an external collaborator and assistant professor at the Faculty of 
                Education, University of Maribor, at the Department of Fine Arts for several years.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mb-16">
            <motion.div 
              className="w-full md:w-1/2 mb-8 md:mb-0 md:pl-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  className='w-full h-full object-cover rounded-lg' 
                  src='./jiri2-about.png' 
                  alt="Jiři Kočica"
                />
              </div>
            </motion.div>
            <div className="w-full md:w-1/2 md:pr-12">
              <motion.p 
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Since 1993, he has actively published in scientific, professional, and popular journals, 
                and has contributed to several major monographic publications. He was involved in the 
                conceptual design of a four-year project called "Contemporary Sculpture Today" at the 
                Celje Gallery of Contemporary Art. He also participated in a symposium on the connection 
                between science and art in Zagreb. He has been the curator of exhibitions at the Gallery of 
                the Slovenian Institute for Chemistry in Ljubljana for seven years. As an artist, he has had 
                over 70 solo exhibitions in various prominent galleries in Slovenia and abroad. 
                He co-organized and participated in the transformation of old prisons at Metelkova into 
                the artistic Youth Hostel Celica. He has created several public sculptures, including an 
                important monument on Pohorje on the occasion of the establishment of the Pahernik Fund, 
                and a central large sculpture at the Pregl Research Centre in Ljubljana.
              </motion.p>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Jiři Kočica lives and works in Ljubljana with his wife Vilma Ducman and three children.
              </motion.p>
            </div>
          </div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-lg mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Education & Background</h2>
            <div className="space-y-4 max-w-3xl mx-auto pl-20">
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-full md:w-1/4 font-bold pl-4">1981-1985</div>
                <div className="w-full md:w-3/4 pl-4">
                  <h3 className="font-semibold">High School of Design and Photography</h3>
                  <p className="text-gray-600">Graphic Design Course, Ljubljana</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-full md:w-1/4 font-bold pl-4">1986-1991</div>
                <div className="w-full md:w-3/4 pl-4">
                  <h3 className="font-semibold">Academy of Fine Arts and Design</h3>
                  <p className="text-gray-600">Department of Sculpture, Ljubljana</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-full md:w-1/4 font-bold pl-4">1991-1993</div>
                <div className="w-full md:w-3/4 pl-4">
                  <h3 className="font-semibold">Specialization</h3>
                  <p className="text-gray-600">Academy of Fine Arts and Design, Ljubljana</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4 italic">
                "Now this is the language of sculpture, the one that whispers to us in its silent voice and touches our hearts."
              </p>
              <p className="text-gray-600 mb-4 italic">
                Jiři Kočica
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}