import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Exhibitions - Jiri Kocica",
  description: "View past, current, and upcoming exhibitions featuring the sculptural works of Jiri Kocica.",
}

export default function ExhibitionsPage() {
  // Sample exhibitions data
  const upcomingExhibitions = [
    {
      title: "Future Forms: Contemporary Sculpture",
      date: "September 15 - November 20, 2025",
      location: "Museum of Modern Art, Vienna",
      description: "A group exhibition exploring innovative approaches to sculptural form in contemporary practice.",
    },
  ]

  const currentExhibitions = [
    {
      title: "Material Dialogues",
      date: "March 10 - June 30, 2025",
      location: "Gallery of Modern Art, Prague",
      description:
        "Solo exhibition featuring Kocica's latest series exploring the dialogue between contrasting materials.",
    },
  ]

  const pastExhibitions = [
    {
      title: "Form & Void",
      date: "October 5 - December 15, 2024",
      location: "Contemporary Arts Museum, Berlin",
      description: "A major solo exhibition presenting Kocica's investigations into positive and negative space.",
    },
    {
      title: "Sculptural Perspectives",
      date: "May 12 - August 30, 2024",
      location: "International Arts Center, Vienna",
      description: "Group exhibition featuring leading contemporary sculptors from across Europe.",
    },
    {
      title: "Material Transformations",
      date: "January 20 - April 10, 2024",
      location: "National Gallery, Prague",
      description:
        "Exhibition exploring how contemporary artists transform everyday materials into extraordinary forms.",
    },
    {
      title: "Spatial Interventions",
      date: "September 8 - November 25, 2023",
      location: "Modern Art Gallery, Berlin",
      description: "Solo exhibition featuring site-specific installations that engage with architectural space.",
    },
    {
      title: "New Directions in Sculpture",
      date: "March 15 - June 20, 2023",
      location: "European Center for Contemporary Art, Paris",
      description: "Group exhibition showcasing innovative approaches to three-dimensional art.",
    },
  ]

  const ExhibitionCard = ({ exhibition, type }) => (
    <div
      className={`p-6 rounded-lg mb-6 ${type === "upcoming" ? "bg-gray-50" : type === "current" ? "bg-gray-100" : "bg-white border border-gray-200"}`}
    >
      <h3 className="text-xl font-semibold mb-2">{exhibition.title}</h3>
      <p className="text-gray-600 mb-1">{exhibition.date}</p>
      <p className="font-medium mb-3">{exhibition.location}</p>
      <p className="text-gray-600">{exhibition.description}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exhibitions</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore past, current, and upcoming exhibitions featuring the work of Jiri Kocica.
          </p>

          {upcomingExhibitions.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Upcoming Exhibitions</h2>
              {upcomingExhibitions.map((exhibition, index) => (
                <ExhibitionCard key={index} exhibition={exhibition} type="upcoming" />
              ))}
            </div>
          )}

          {currentExhibitions.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Current Exhibitions</h2>
              {currentExhibitions.map((exhibition, index) => (
                <ExhibitionCard key={index} exhibition={exhibition} type="current" />
              ))}
            </div>
          )}

          <div>
            <h2 className="text-3xl font-bold mb-6">Past Exhibitions</h2>
            {pastExhibitions.map((exhibition, index) => (
              <ExhibitionCard key={index} exhibition={exhibition} type="past" />
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Exhibition Inquiries</h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              For inquiries regarding exhibition opportunities, gallery representation, or institutional collaborations,
              please get in touch through the contact form.
            </p>
            <div className="text-center">
              <Button asChild>
                <a href="/contact">Contact for Exhibitions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
