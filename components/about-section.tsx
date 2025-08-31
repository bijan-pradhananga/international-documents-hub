export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About International Documents Hub</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted partner for all international document services and travel requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Story</h3>
            <p className="text-slate-600 mb-4">
              International Documents Hub has been serving clients with professional document services for years,
              specializing in visa applications, embassy appointments, and various international documentation needs.
              Based in Kathmandu, Nepal, we understand the complexities of international travel and documentation
              requirements.
            </p>
            <p className="text-slate-600 mb-6">
              Our experienced team is dedicated to making your document processing journey smooth and hassle-free,
              whether you're applying for visas, getting documents apostilled, or need assistance with various form
              filling services.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-medium">Expert Team</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-medium">Fast Processing</span>
              </div>
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-medium">Reliable Service</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-business-person-with-passport-and-doc.png"
              alt="Professional document services"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Quality Assurance</h4>
            <p className="text-slate-600">
              We ensure all documents are processed with utmost accuracy and attention to detail.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Timely Delivery</h4>
            <p className="text-slate-600">
              We understand the importance of deadlines and ensure timely completion of all services.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Customer Support</h4>
            <p className="text-slate-600">
              Our dedicated team provides personalized support throughout your document processing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
