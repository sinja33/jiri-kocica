"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function WorkPage() {
  const [visibleCount, setVisibleCount] = useState(10)

  const collections = [
    {
      id: "exhibition-1",
      title: "Being",
      year: "2023",
      location: "Ljubljana",
      shortDescription: "Exhibition and event at the gallery Hest",
      image: "./Biti1.jpg"
    },
    {
      id: "exhibition-2",
      title: "DNA heritage",
      year: "2022",
      location: "Izola",
      shortDescription: "Exhibition and event at the gallery Insula",
      image: "./Insula_drugasoba.jpg"
    },
    {
      id: "exhibition-3",
      title: "Jure Zadnikar and Jiři Kočica",
      year: "2022",
      location: "Ljubljana",
      shortDescription: "Exhibition and event in the studio at Trubarjeva cesta 23",
      image: "./jure_jiri3.jpg"
    },
    {
      id: "exhibition-4",
      title: "Izvirnik (Source of Origin)",
      year: "2018",
      location: "Ljubljana",
      shortDescription: "The release of the book (novel) \"Izvirnik\" (Source or Origin) and the nomination for the Kresnik Award",
      image: "./izvirnik.jpg"
    },
    {
      id: "exhibition-5",
      title: "Artside the box",
      year: "2016",
      location: "Vienna",
      shortDescription: "Sculpture installation and event",
      image: "./artsidethebox2.jpg"
    },
    {
      id: "exhibition-6",
      title: "Open studio",
      year: "2015",
      location: "Ljubljana",
      shortDescription: "Month of the open studio",
      image: "./odprtiatelje1.jpg"
    },
    {
      id: "exhibition-7",
      title: "Heritage",
      year: "2014",
      location: "Nova Gorica",
      shortDescription: "",
      image: "./NGprerokinje.jpg"
    },
    {
      id: "exhibition-8",
      title: "Heritage at the city entrance",
      year: "2014",
      location: "Ljubljana, Cankarjev dom",
      shortDescription: "Presentation of the First Participatory Public Sculpture in Slovenia at the main Slovenian cultural center",
      image: "./CD.jpg"
    },
    {
      id: "exhibition-9",
      title: "Contemporary sculpture installation",
      year: "2013",
      location: "Vienna",
      shortDescription: "Sculpture installation at Gallery Schleifmuehlgasse 12/14",
      image: "./seedkeepers_gel1.jpg"
    },
    {
      id: "exhibition-10",
      title: "Heritage Installation",
      year: "2013",
      location: "Ljubljana",
      shortDescription: "Sculpture installation at the gallery of the Faculty of Economy, Ljubljana University",
      image: "./EF3.jpg"
    },
    {
      id: "exhibition-11",
      title: "Sculpture Installation",
      year: "2013",
      location: "Ljubljana",
      shortDescription: "Sculptural installation at The Pregl Research Centre (part of the Institute for Chemistry Slovenia) - work in progress",
      image: "./signsofscience.jpg"
    },
    {
      id: "exhibition-12",
      title: "Point to the Eye: Drop Into the Horizon",
      year: "2012",
      location: "Maribor",
      shortDescription: "Presentation of the project of nano-portrait and philosophical reconsideration of contemporary art at Vetrinje castle, European Capital of Culture headquarters",
      image: "./nano1.jpg"
    },
    {
      id: "exhibition-13",
      title: "Votive Sculptures",
      year: "2012",
      location: "New York City",
      shortDescription: "Sculptures exhibition at Gallery MC",
      image: "./MCGallery-kip.jpg"
    },
    {
      id: "exhibition-14",
      title: "95 Theses on Art",
      year: "2012",
      location: "New York City",
      shortDescription: "The act of \"art faith\" - fixing 95 Theses on Art on doors of different galleries (BOSI Contemporary Gallery, Lesley Heller Workspace Gallery, Gallery MC)",
      image: "./bosi2www.jpg"
    },
    {
      id: "exhibition-15",
      title: "Embassy Exhibition",
      year: "2012",
      location: "Washington D.C.",
      shortDescription: "Sculpture installation at the gallery space of the Embassy of the Republic of Slovenia",
      image: "./ambasada1.jpg"
    },
    {
      id: "exhibition-16",
      title: "The Socialised Sculpture",
      year: "2011",
      location: "Ljubljana",
      shortDescription: "Sculpture installation at Garden of the United Association of Slovenian Artists Gallery",
      image: "./dsluvrt 025.jpg"
    },
    {
      id: "exhibition-17",
      title: "O...pen / Od...pri",
      year: "2011",
      location: "Ljubljana",
      shortDescription: "Multimedia installation at Equrna Gallery",
      image: "./odpri_vazicarojstvo.jpg"
    },
    {
      id: "exhibition-18",
      title: "Handing over",
      year: "2010/11",
      location: "Grosuplje",
      shortDescription: "Public artwork - sculptural installation at roundabout in Grosuplje",
      image: "./grosupljedetajl.jpg"
    },
    {
      id: "exhibition-19",
      title: "Opening of the Studio",
      year: "2010",
      location: "Ljubljana",
      shortDescription: "Sculptural installation in the new Studio",
      image: "./aetlje3.jpg"
    },
    {
      id: "exhibition-20",
      title: "Addressing the freedom of the other",
      year: "2010",
      location: "Maribor",
      shortDescription: "Sculptural installation at University Library Gallery",
      image: "./vojko-rdecaknjigaw.jpg"
    },
    {
      id: "exhibition-21",
      title: "Mo/nu/ment",
      year: "2009",
      location: "Pohorje forest",
      shortDescription: "Sculptural installation at the Pahernik's forest",
      image: "./znamenje1w.jpg"
    },
    {
      id: "exhibition-22",
      title: "Gift of Being / Horizon",
      year: "2007",
      location: "Rogaška Slatina",
      shortDescription: "Sculptural installation with photography at Gallery Ana",
      image: "./rog_tempelw.jpg"
    },
    {
      id: "exhibition-23",
      title: "Okrožje-Circuit",
      year: "2007",
      location: "Ljubljana",
      shortDescription: "Sculptural installation in co-operation with Polona Maher and Peter Ciuha at Gallery Kresija",
      image: "./kresijaw3.jpg"
    },
    {
      id: "exhibition-24",
      title: "Gift of the Being",
      year: "2006",
      location: "Vienna",
      shortDescription: "Sculptural installation at Gallery of the Slovenian Cultural Centre \"Korotan\"",
      image: "./koro_ikon1.jpg"
    },
    {
      id: "exhibition-25",
      title: "O...pen...",
      year: "2006",
      location: "Škofja Loka",
      shortDescription: "Multimedia installation at Ivan Grohar Gallery",
      image: "./skofjalukna1.jpg"
    },
    {
      id: "exhibition-26",
      title: "To do",
      year: "2006",
      location: "Maribor",
      shortDescription: "Multimedia installation at Media Nox Gallery",
      image: "./kurjenje1.jpg"
    },
    {
      id: "exhibition-27",
      title: "Point of view",
      year: "2005",
      location: "Ljubljana",
      shortDescription: "Sculpture installation with workshops at Gruber Open Air Gallery",
      image: "./gruberosebaw.jpg"
    },
    {
      id: "exhibition-28",
      title: "Fields",
      year: "2004",
      location: "Maribor",
      shortDescription: "Multimedia installation in co-operation with Janez Ferlan at Gallery of the Artists' Society of Maribor",
      image: null
    },
    {
      id: "exhibition-29",
      title: "Stone Sculptures Symposium",
      year: "2004",
      location: "Grosuplje",
      shortDescription: "Co-organizing and participating at the symposium on stone sculptures with workshops for local school teachers",
      image: null
    },
    {
      id: "exhibition-30",
      title: "Albertina Workshop",
      year: "2004",
      location: "Vienna",
      shortDescription: "Lecture and workshop on the ethical impact of art at Albertina Museum",
      image: "./albertina2.jpg"
    },
    {
      id: "exhibition-31",
      title: "Addressing the freedom of the other",
      year: "2004",
      location: "Kostanjevica na Krki",
      shortDescription: "Installation in the former monastery church from 12th century at Božidar Jakac Gallery (with Žiga Okorn)",
      image: "./kostnosilcaw.jpg"
    },
    {
      id: "exhibition-32",
      title: "Celica Youth Hostel",
      year: "2003",
      location: "Ljubljana",
      shortDescription: "Co-creation of conceptual basis and furnishing of former prison cells for the opening of Celica Youth Hostel",
      image: null
    },
    {
      id: "exhibition-33",
      title: "Sculptural Symposium Revival",
      year: "2002",
      location: "Ostrožac na Uni, Bosnia and Herzegovina",
      shortDescription: "Reviving the traditional sculptural symposium, sculpture in bihacit stone at hotel Sedra garden",
      image: null
    },
    {
      id: "exhibition-34",
      title: "Simulaker/Goga Gallery",
      year: "2002",
      location: "Novo Mesto",
      shortDescription: "Sculptural installation at Simulaker/Goga Gallery",
      image: null
    },
    {
      id: "exhibition-35",
      title: "Cornerstone Installation",
      year: "2002",
      location: "Ljubljana",
      shortDescription: "Installation of stone sculpture - the \"cornerstone\" for the opening of reconstruction process at former prison at Metelkova street",
      image: null
    },
    {
      id: "exhibition-36",
      title: "Ethical Insights into Art",
      year: "2001",
      location: "Ljubljana",
      shortDescription: "Exhibition with lectures and book presentation on \"Abuse of Visual Language by Popular Media\" at United Association of Slovenian Artists Gallery",
      image: null
    },
    {
      id: "exhibition-37",
      title: "Unusual pairs",
      year: "2001",
      location: "Celje",
      shortDescription: "Installation and event with painter Irena Potočnik at City Art Salon, selected by curator Nevenka Šivavec",
      image: null
    },
    {
      id: "exhibition-38",
      title: "Holy Spirit Chapel",
      year: "2000",
      location: "Krško",
      shortDescription: "Exhibition with Žiga Okorn at Gallery in the former chapel of the \"Holy Spirit\" and founding society for revival of old city center",
      image: null
    },
    {
      id: "exhibition-39",
      title: "Duration of being",
      year: "2000",
      location: "Ljubljana",
      shortDescription: "Sculptural installation and participatory workshop with palm prints in warm beeswax and forest seeds at Equrna Gallery",
      image: null
    },
    {
      id: "exhibition-40",
      title: "Family Photos Project",
      year: "2000",
      location: "Škofja Loka",
      shortDescription: "Projection of family photographs and casting of small wax sculptures at Ivan Grohar Gallery",
      image: null
    },
    {
      id: "exhibition-41",
      title: "Town Gallery Installation",
      year: "1999",
      location: "Slovenj Gradec",
      shortDescription: "Sculptural installation and seminar for students and pupils from different town schools at Town Gallery (with Žiga Okorn)",
      image: null
    },
    {
      id: "exhibition-42",
      title: "Monument, moment and movement",
      year: "1998",
      location: "Ljubljana",
      shortDescription: "Sculptures and artistic event with clay moulds of bombs and projectiles at National Museum of Recent History",
      image: null
    },
    {
      id: "exhibition-43",
      title: "European Month of Culture Workshops",
      year: "1997",
      location: "Ljubljana",
      shortDescription: "Co-organizing participatory workshops for renovation of former prison into youth hostel and gallery",
      image: null
    },
    {
      id: "exhibition-44",
      title: "Fresco in Dark Cell",
      year: "1996",
      location: "Ljubljana",
      shortDescription: "Beginning of painting in fresco technique in the dark cell basement of former prison at Metelkova",
      image: null
    },
    {
      id: "exhibition-45",
      title: "Revolution Square Event",
      year: "1995",
      location: "Ljubljana",
      shortDescription: "Artistic event handing out seeds in clay palm prints and books between the biggest skyscrapers at Revolution square",
      image: null
    },
    {
      id: "exhibition-46",
      title: "Kata-logos",
      year: "1994",
      location: "Ljubljana",
      shortDescription: "Non-gallery process handing out forest seeds and texts about artistic work (co-operation with Vilma Ducman and Vesna Krmelj)",
      image: null
    },
    {
      id: "exhibition-47",
      title: "Sestava Group",
      year: "1993",
      location: "Ljubljana",
      shortDescription: "Exhibition in former military prison cell and co-organizing of Sestava group",
      image: null
    },
    {
      id: "exhibition-48",
      title: "Thirty Trees Event",
      year: "1993",
      location: "Maribor",
      shortDescription: "Event handing out thirty trees to visitors at opening, leaving gallery empty for two weeks",
      image: null
    },
    {
      id: "exhibition-49",
      title: "West - Vest",
      year: "1992",
      location: "Ljubljana",
      shortDescription: "Artistic answer to West award commission by tobacco industry for \"unconventional artists\" - conscience (vest) theme",
      image: null
    },
    {
      id: "exhibition-50",
      title: "Exhibition of Robba's Fountain",
      year: "1992",
      location: "Ljubljana",
      shortDescription: "Re-exhibition of baroque Robba's fountain in city center with conservation awareness campaign",
      image: null
    },
    {
      id: "exhibition-51",
      title: "Historical Park Mapping",
      year: "1991",
      location: "Rogaška Slatina",
      shortDescription: "Mapping ground plan for new hotel and establishing Society against wild urbanization of historical park",
      image: null
    },
    {
      id: "exhibition-52",
      title: "Rihard Jakopič Gallery",
      year: "1991",
      location: "Ljubljana",
      shortDescription: "Installation at former Rihard Jakopič Gallery, historically important space for independent intellectuals",
      image: null
    },
    {
      id: "exhibition-53",
      title: "Site-specific Sculptures",
      year: "1991",
      location: "Ljubljana",
      shortDescription: "Installation and round table about site-specific sculptures at National Gallery of Modern Art (with Žiga Okorn)",
      image: null
    },
    {
      id: "exhibition-54",
      title: "Tivoli Park Installation",
      year: "1991",
      location: "Ljubljana",
      shortDescription: "Installation on the fish pond in Tivoli park (with painter Žiga Okorn)",
      image: null
    },
    {
      id: "exhibition-55",
      title: "Dance Studio Exhibition",
      year: "1990",
      location: "Maribor",
      shortDescription: "Exhibition in the Dance studio",
      image: null
    },
    {
      id: "exhibition-56",
      title: "Paintings",
      year: "1988",
      location: "Ljubljana",
      shortDescription: "Paintings exhibition at Gallery KUD France Prešeren",
      image: null
    },
    {
      id: "exhibition-57",
      title: "Sculptures of Paper and Wire",
      year: "1987",
      location: "Kranj",
      shortDescription: "Sculptures of Paper and Wire at Gallery Prešernova hiša",
      image: null
    },
    {
      id: "exhibition-58",
      title: "Drawings and Painted Letters",
      year: "1984",
      location: "Gorizia, Italy",
      shortDescription: "Drawings and Painted Letters at Gallery Il Torchio",
      image: null
    }
  ]

  const visibleCollections = collections.slice(0, visibleCount)
  const hasMore = visibleCount < collections.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, collections.length))
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exhibitions</h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Explore Jiři Kocica's various exhibitions.
          </p>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Static Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full hidden md:block"></div>

            {/* Timeline Items */}
            {visibleCollections.map((collection, index) => (
              <motion.div 
                key={collection.id} 
                className="relative -mb-8 md:-mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>

                {/* Content Container */}
                <div className={`md:flex md:items-center ${
                  collection.image 
                    ? (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')
                    : 'md:justify-center'
                }`}>
                  
                  {/* Content Card */}
                  <motion.div 
                    className={`w-full ${
                      collection.image 
                        ? `md:w-6/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`
                        : 'md:w-10/12'
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <div className="bg-white p-8 rounded-lg shadow-lg border">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">{collection.title}</h2>
                        <div>
                          <span className="text-lg font-medium text-gray-500">{collection.location},</span>&nbsp;
                          <span className="text-lg font-medium text-gray-500">{collection.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{collection.shortDescription}</p>
                      
                      {/* Image inside the card - only show if image exists */}
                      {collection.image && (
                        <div className="w-full mt-8">
                          <div className="w-64 h-64 overflow-hidden rounded mx-auto">
                            <img
                              src={collection.image}
                              alt={`${collection.title} image`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <Button variant="outline" className="mt-6">
                          View Collection
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile-only year indicator */}
                  <div className="md:hidden absolute top-0 left-0 bg-black text-white px-3 py-1 rounded-br-lg">
                    {collection.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div 
              className="text-center mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button onClick={loadMore} variant="outline" size="lg">
                Show More Exhibitions
              </Button>
            </motion.div>
          )}

          {/* Commission Section */}
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Commission a Custom Piece</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in commissioning a custom sculpture for your space? Jiri Kocica creates bespoke pieces for
              private collectors, public spaces, and architectural projects.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/contact">Inquire About Commissions</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}