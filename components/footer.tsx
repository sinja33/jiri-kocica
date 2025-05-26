import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-bold text-xl mb-2">Jiři Kočica</div>
            <p className="text-gray-400">Contemporary Sculpture Artist</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
              Gallery
            </Link>
            <Link href="/exhibitions" className="text-gray-400 hover:text-white transition-colors">
              Exhibitions
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jiři Kočica. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
