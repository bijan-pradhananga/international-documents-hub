"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Clock, Users, CheckCircle, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: FileText,
    title: "Document Processing",
    description: "Expert handling of all visa and travel documents",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your documents are safe with our trusted process",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround times for urgent applications",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Professional guidance throughout the process",
  },
]

const stats = [
  { number: "5000+", label: "Happy Clients" },
  { number: "50+", label: "Countries Served" },
  { number: "99%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" },
]

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>

      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">
                Trusted Document Services Since 2015
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Your Gateway to
                <span className="text-blue-600 block">International Travel</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                Professional visa processing, document services, and travel assistance. We handle the paperwork so you
                can focus on your journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Government Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Secure Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-[500px]">
              <Image
                src="/professional-business-person-with-passport-and-doc.png"
                alt="Professional document consultation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />

              {/* Floating Stats Card - Responsive */}
              <Card className="absolute -bottom-6 -left-4 sm:-left-6 p-5 sm:p-6 bg-white shadow-xl border-0 hidden md:block">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index}>
                      <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Floating Success Badge - Responsive */}
              <Card className="absolute -top-6 -right-4 sm:-right-6 p-4 bg-green-50 border-green-200 hidden md:block">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-green-700">99% Success Rate</div>
                    <div className="text-sm text-green-600">Visa Applications</div>
                  </div>
                </div>
              </Card>

              {/* Mobile Version - Shown only on small screens */}
              <div className="md:hidden mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Card className="p-5 bg-white shadow-xl border-0 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 bg-green-50 border-green-200 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <div className="font-semibold text-green-700">99% Success Rate</div>
                      <div className="text-sm text-green-600">Visa Applications</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-6 scale-105 opacity-20 hidden lg:block"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose International Documents Hub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive document services with professional expertise and personalized support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="p-8 bg-blue-600 text-white border-0">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}