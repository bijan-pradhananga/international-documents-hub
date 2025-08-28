"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { setSelectedCategory, setSearchQuery } from "@/lib/features/services/servicesSlice"
import { setLoading } from "@/lib/features/ui/uiSlice"
import {
  FileText,
  Plane,
  Shield,
  Users,
  Search,
  CheckCircle,
  Car,
  GraduationCap,
  Briefcase,
  Languages,
  X,
} from "lucide-react"
import { useState, useEffect, useMemo } from "react"

const categoryIcons = {
  visa: Shield,
  documents: FileText,
  travel: Plane,
  other: Users,
}

const categories = [
  { id: "all", name: "All Services", count: 22 },
  { id: "visa", name: "Visa Services", count: 7 },
  { id: "documents", name: "Documents", count: 9 },
  { id: "travel", name: "Travel", count: 4 },
  { id: "other", name: "Other Services", count: 2 },
]

const getServiceIcon = (title: string) => {
  if (title.toLowerCase().includes("visa") || title.toLowerCase().includes("embassy")) return Shield
  if (title.toLowerCase().includes("ticket") || title.toLowerCase().includes("travel")) return Plane
  if (title.toLowerCase().includes("translation") || title.toLowerCase().includes("typing")) return Languages
  if (title.toLowerCase().includes("cv") || title.toLowerCase().includes("education")) return GraduationCap
  if (title.toLowerCase().includes("license") || title.toLowerCase().includes("driving")) return Car
  if (title.toLowerCase().includes("labor") || title.toLowerCase().includes("work")) return Briefcase
  return FileText
}

export function ServicesSection() {
  const dispatch = useAppDispatch()
  const { services, selectedCategory, searchQuery } = useAppSelector((state) => state.services)
  const { isLoading } = useAppSelector((state) => state.ui)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true)
      const timer = setTimeout(() => {
        setIsSearching(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [searchQuery])

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [services, selectedCategory, searchQuery])

  const featuredServices = services.filter((service) => service.featured)

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setLoading(true))
    dispatch(setSelectedCategory(categoryId))
    setTimeout(() => dispatch(setLoading(false)), 300)
  }

  const clearSearch = () => {
    dispatch(setSearchQuery(""))
  }

  const handleServiceInquiry = (serviceTitle: string) => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })

      setTimeout(() => {
        const serviceInput = document.getElementById("service") as HTMLInputElement
        if (serviceInput) {
          serviceInput.value = serviceTitle
          serviceInput.focus()
        }
      }, 500)
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 mb-4">Our Services</Badge>
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 text-balance">
            Comprehensive Document & Travel Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            From visa applications to document processing, we provide end-to-end solutions for all your international
            travel and documentation needs.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Services</h3>
          <div className="grid-responsive-4">
            {featuredServices.map((service) => {
              const IconComponent = getServiceIcon(service.title)
              return (
                <Card
                  key={service.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white group hover:scale-105 card-hover cursor-pointer"
                  onClick={() => handleServiceInquiry(service.title)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{service.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-scale-in">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="pl-10 pr-10 bg-white border-gray-200 focus-ring"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              {isSearching && (
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <LoadingSpinner size="sm" />
                </div>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`btn-hover focus-ring ${
                    selectedCategory === category.id
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                  disabled={isLoading}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner size="lg" />
            <span className="ml-3 text-gray-600">Loading services...</span>
          </div>
        )}

        {/* All Services Grid */}
        {!isLoading && (
          <div className="grid-responsive-3 animate-fade-in">
            {filteredServices.map((service) => {
              const IconComponent = getServiceIcon(service.title)
              const categoryColor = {
                visa: "bg-red-100 text-red-700",
                documents: "bg-blue-100 text-blue-700",
                travel: "bg-green-100 text-green-700",
                other: "bg-purple-100 text-purple-700",
              }[service.category]

              return (
                <Card
                  key={service.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white group card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="h-6 w-6 text-gray-600 group-hover:text-white" />
                    </div>
                    <Badge className={`${categoryColor} text-xs`}>{service.category}</Badge>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">{service.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span>Available</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 btn-hover focus-ring"
                      onClick={() => handleServiceInquiry(service.title)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredServices.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                dispatch(setSearchQuery(""))
                dispatch(setSelectedCategory("all"))
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white btn-hover focus-ring"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center animate-scale-in">
          <Card className="p-8 bg-blue-600 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't see the service you need? We offer customized solutions for unique requirements. Contact us to
              discuss your specific needs.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 btn-hover focus-ring"
              onClick={() => handleServiceInquiry("Custom Solution")}
            >
              Contact Us Today
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
