"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/gallery", label: "Gallery" },
    { href: "/exhibitions", label: "Exhibitions" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="container mx-auto py-6 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl z-10">
        Jiři Kočica
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              isActive(link.href) ? "text-black font-medium" : "text-gray-600"
            } hover:text-black transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden z-10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X /> : <Menu />}
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-0 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl ${
                  isActive(link.href) ? "text-black font-medium" : "text-gray-600"
                } hover:text-black transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
