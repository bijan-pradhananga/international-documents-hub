"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { toggleMobileMenu, setActiveSection } from "@/lib/features/ui/uiSlice"
import { useEffect } from "react"

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const dispatch = useAppDispatch()
  const { mobileMenuOpen, activeSection } = useAppSelector((state) => state.ui)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.name.toLowerCase())
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              dispatch(setActiveSection(section))
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, dispatch])

  const handleNavClick = (section: string, href: string) => {
    dispatch(setActiveSection(section.toLowerCase()))
    if (mobileMenuOpen) {
      dispatch(toggleMobileMenu())
    }

    // Smooth scroll to section
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors"
                onClick={() => (window.location.href = "tel:+977015927859")}
              >
                <Phone className="h-3 w-3" />
                <span>+977-01-5927859, +977-9823597859</span>
              </div>
              <div
                className="hidden md:flex items-center gap-1 cursor-pointer hover:text-blue-200 transition-colors"
                onClick={() => (window.location.href = "mailto:internationaldocshub@gmail.com")}
              >
                <Mail className="h-3 w-3" />
                <span>internationaldocshub@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Sankhamul Marga, Kathmandu-10, Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 leading-4">
            <Image
              src="/logo.png"
              alt="International Documents Hub"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none ${
                  activeSection === item.name.toLowerCase()
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white btn-hover focus:outline-none"
              onClick={() => handleNavClick("Contact", "#contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={() => dispatch(toggleMobileMenu())}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="focus:outline-none">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Image
                    src="/logo.png"
                    alt="International Documents Hub"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                  />
                </div>

                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name, item.href)}
                    className={`text-lg font-medium transition-colors hover:text-blue-600 py-2 text-left focus:outline-none ${
                      activeSection === item.name.toLowerCase()
                        ? "text-blue-600 border-l-4 border-blue-600 pl-4"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-hover focus:outline-none"
                    onClick={() => handleNavClick("Contact", "#contact")}
                  >
                    Get Quote
                  </Button>
                </div>

                {/* Contact info in mobile menu */}
                <div className="pt-4 space-y-3 text-sm text-gray-600">
                  <div
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => (window.location.href = "tel:+977015927859")}
                  >
                    <Phone className="h-4 w-4" />
                    <span>+977-01-5927859</span>
                  </div>
                  <div
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors"
                    onClick={() => (window.location.href = "mailto:internationaldocshub@gmail.com")}
                  >
                    <Mail className="h-4 w-4" />
                    <span>internationaldocshub@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sankhamul Marga, Kathmandu-10, Nepal</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
