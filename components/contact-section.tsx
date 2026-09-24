"use client"
import { Card } from "@/components/ui/card"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setLoading } from "@/lib/features/ui/uiSlice"

type ContactDetail = string | { label: string; url: string }

const contactInfo: {
  icon: any
  title: string
  details: ContactDetail[]
  description: string
}[] = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+977-01-5927859", "+977-9823597859", "+977-9828783291", "+977-9817858200"],
    description: "Call us for immediate assistance",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@intdocshub.com"],
    description: "Send us your queries anytime",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: [
      {
        label: "Sankhamul Marga, Kathmandu-10, Nepal",
        url: "https://maps.app.goo.gl/61UfUddpHY7cCqhF7?g_st=ac",
      },
    ],
    description: "Visit our office for in-person consultation",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun - Fri: 10:00 AM - 5:30 PM", "Saturday: Closed"],
    description: "We're here to help during business hours",
  },
]

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const dispatch = useAppDispatch()
  const { isLoading } = useAppSelector((state) => state.ui)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    dispatch(setLoading(true))

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)
      setIsSubmitted(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber.replace(/\s+/g, "")}`
  }

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 mb-4">Contact Us</Badge>
          <h2 className="text-responsive-lg font-bold text-gray-900 mb-6 text-balance">
            Get in Touch with Our Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Ready to start your journey? Contact us today for professional consultation and personalized service
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 border-0 bg-gray-50 hover:bg-gray-100 transition-all duration-300 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => {
                            if (info.title === "Office Location" && typeof detail !== "string" && detail.url && detail.label) {
                              return (
                                <a
                                  key={idx}
                                  href={detail.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-700 font-medium underline hover:text-blue-900 transition-colors"
                                >
                                  {detail.label}
                                </a>
                              )
                            } else {
                              return (
                                <p
                                  key={idx}
                                  className={`text-gray-700 font-medium ${
                                    info.title === "Phone Numbers" || info.title === "Email Address"
                                      ? "cursor-pointer hover:text-blue-600 transition-colors"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    if (info.title === "Phone Numbers") {
                                      handlePhoneCall(detail as string)
                                    } else if (info.title === "Email Address") {
                                      handleEmailClick(detail as string)
                                    }
                                  }}
                                >
                                  {typeof detail === "string" ? detail : (detail.label || "")}
                                </p>
                              )
                            }
                          })}
                        </div>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <Card className="p-6 bg-blue-600 text-white border-0 animate-scale-in">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Quick Contact</h4>
              </div>
              <p className="text-blue-100 mb-4">
                Need immediate assistance? Call us directly or send us a WhatsApp message for faster response.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-white text-blue-600 hover:bg-gray-100 flex-1 btn-hover"
                  onClick={() => handlePhoneCall("+977-9823597859")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 flex-1 bg-transparent btn-hover"
                  onClick={() => window.open(`https://wa.me/9779823597859`, "_blank")}
                >
                  WhatsApp
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="p-8 border-0 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className={`focus-ring ${errors.name ? "border-red-500" : ""}`}
                          required
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className={`focus-ring ${errors.email ? "border-red-500" : ""}`}
                          required
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="focus-ring"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <Input
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          placeholder="e.g., Visa Application, Document Processing"
                          className="focus-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        className={`focus-ring ${errors.message ? "border-red-500" : ""}`}
                        required
                      />
                      {errors.message && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-hover focus-ring"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <LoadingSpinner size="sm" className="mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
