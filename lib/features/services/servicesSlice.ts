import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Service {
  id: string
  title: string
  description: string
  category: "visa" | "documents" | "travel" | "other"
  featured: boolean
}

interface ServicesState {
  services: Service[]
  selectedCategory: string
  searchQuery: string
}

const initialState: ServicesState = {
  services: [
    {
      id: "1",
      title: "VFS & Embassy Appointments",
      description: "Professional visa appointment booking services for all embassies",
      category: "visa",
      featured: true,
    },
    {
      id: "2",
      title: "PCC Apostille for All Countries",
      description: "Police clearance certificate apostille services worldwide",
      category: "documents",
      featured: true,
    },
    {
      id: "3",
      title: "International & Domestic Air Tickets",
      description: "Flight booking and reservation services at competitive rates",
      category: "travel",
      featured: true,
    },
    {
      id: "4",
      title: "NID Form Filling",
      description: "National ID form completion assistance with expert guidance",
      category: "documents",
      featured: false,
    },
    {
      id: "5",
      title: "E-Passport Form Filling",
      description: "Electronic passport application support and processing",
      category: "documents",
      featured: false,
    },
    {
      id: "6",
      title: "Online Personal PAN Form Filling",
      description: "PAN card application assistance with online processing",
      category: "documents",
      featured: false,
    },
    {
      id: "7",
      title: "Translation Services",
      description: "Professional document translation (Any Language to Any Language)",
      category: "documents",
      featured: true,
    },
    {
      id: "8",
      title: "Itinerary / Dummy Tickets",
      description: "Travel itinerary and dummy ticket services for visa applications",
      category: "travel",
      featured: false,
    },
    {
      id: "9",
      title: "Europass CV & Standard CV Preparation",
      description: "Professional CV preparation services for international applications",
      category: "other",
      featured: false,
    },
    {
      id: "10",
      title: "NOC (No Objection Certificate for Students)",
      description: "Student NOC processing for educational purposes abroad",
      category: "documents",
      featured: false,
    },
    {
      id: "11",
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for international trips",
      category: "travel",
      featured: false,
    },
    {
      id: "12",
      title: "Shram - Labor Approval",
      description: "Labor approval and work permit processing services",
      category: "visa",
      featured: false,
    },
    {
      id: "13",
      title: "Bus Tickets (Domestic & India)",
      description: "Bus ticket booking services for domestic and India routes",
      category: "travel",
      featured: false,
    },
    {
      id: "14",
      title: "Lok Sewa Form Filling",
      description: "Public service commission form filling assistance",
      category: "documents",
      featured: false,
    },
    {
      id: "15",
      title: "Vaccine QR Form Filling",
      description: "COVID-19 vaccine certificate and QR code processing",
      category: "documents",
      featured: false,
    },
    {
      id: "16",
      title: "Driving License Form Filling",
      description: "Driving license application form completion services",
      category: "documents",
      featured: false,
    },
    {
      id: "17",
      title: "Nepali Typing",
      description: "Professional Nepali language typing and document preparation",
      category: "other",
      featured: false,
    },
    {
      id: "18",
      title: "Hello Verification for Latvia",
      description: "Latvia visa application verification and processing",
      category: "visa",
      featured: false,
    },
    {
      id: "19",
      title: "Serbia Online Visa via E-Consular",
      description: "Serbia visa application through online e-consular system",
      category: "visa",
      featured: false,
    },
    {
      id: "20",
      title: "Romania Visa Appointment Application (Online)",
      description: "Online Romania visa appointment booking and application",
      category: "visa",
      featured: false,
    },
    {
      id: "21",
      title: "BLS Online Visa Appointment",
      description: "BLS visa appointment booking and processing services",
      category: "visa",
      featured: false,
    },
    {
      id: "22",
      title: "Poland Working Visa Registration (Appointment Booking)",
      description: "Poland work visa registration and appointment booking",
      category: "visa",
      featured: false,
    },
    {
      id: "23",
      title: "International Driving Permit",
      description: "International driving permit application and processing services",
      category: "documents",
      featured: false,
    },
  ],
  selectedCategory: "all",
  searchQuery: "",
}

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    toggleServiceFeatured: (state, action: PayloadAction<string>) => {
      const service = state.services.find((s) => s.id === action.payload)
      if (service) {
        service.featured = !service.featured
      }
    },
  },
})

export const { setSelectedCategory, setSearchQuery, toggleServiceFeatured } = servicesSlice.actions
export default servicesSlice.reducer
