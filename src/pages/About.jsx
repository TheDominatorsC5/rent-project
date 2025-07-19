import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer" 
import { FaHandshake, FaKey } from "react-icons/fa";
import { HomeIcon, Search, Shield, User, Star, DollarSign, Clock, MessageCircle, Lock } from "lucide-react"; 
import { Link } from "react-router";
import AboutVideo from "../assets/videos/about-video.mp4"


export default function About() {
    return (
        <div className="min-h-screen bg-[#F9F9F9] font-[outfit]">
            <Navbar />
            {/* Hero Section with Image Overlay */}
            <section className="relative overflow-hidden h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center">
                <img src="https://i.pinimg.com/1200x/91/68/4a/91684aac641ca687ca509b4b4c4b4e69.jpg" alt="Modern Apartment in Kasoa, Central Region, Ghana" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/75 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        About
                        <span className="text-[#2980B9]"> MeFieConnect</span>
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                        We're on a mission to revolutionize the rental experience by connecting property owners directly with tenants, eliminating middlemen and creating transparent, affordable rental experience for everyone through our innovative platform.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#333333] mb-6 leading-relaxed">
                We believe that finding and renting a home should be simple, transparent, and affordable. Traditional rental platforms often involve multiple intermediaries, hidden fees, and complex processes that benefit everyone except the people who matter most - property owners and tenants.
              </p>
              <p className="text-lg text-[#333333] leading-relaxed">
                MeFieConnect eliminates these barriers by creating a direct connection between property owners and potential tenants, ensuring fair pricing, transparent communication, and a streamlined rental experience.
              </p>
              <div className="flex flex-row gap-6 mt-5 text-[#333333]">
              <div>
                <FaHandshake size={70} className="text-[#2980B9] " />
              </div>
              <div className="mt-3">
                <h3>
                    Direct Connections
                </h3>
                <h5 className="text-sm">
                    No middlemen, no hidden fees
                </h5>
              </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" 
                alt="Modern apartment building"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

       {/* How DirectRent Works Section - NEWLY ADDED */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
              How <span className="text-[#2980B9]"> MeFieConnect</span> Works
            </h2>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              Our platform simplifies the rental process with a straightforward, three-step approach that benefits both property owners and tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: List Your Property */}
            <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">1. List Your Property</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Property owners create detailed listings with photos, descriptions, and rental terms. Our verification process ensures all listings are legitimate and accurate.
              </p>
            </div>

            {/* Step 2: Search & Connect */}
            <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">2. Search & Connect</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Tenants browse verified listings, filter by preferences, and connect directly with property owners through our secure messaging system.
              </p>
            </div>

            {/* Step 3: Secure & Move In */}
            <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <FaKey className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">3. Secure & Move In</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Complete the rental process with our secure documentation tools, digital lease signing, and transparent payment processing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End How DirectRent Works Section */}

      {/* Trust Through Verification Section - NEWLY ADDED */}
      <section className="py-20 bg-[#F9F9F9]"> {/* Used bg-gray-900 for a slight contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
              Trust Through Verification
            </h2>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              Safety and authenticity are paramount. Our comprehensive verification process ensures that every listing and user on our platform is legitimate, creating a secure environment for all parties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Verification Point 1: Property Verification */}
            <div className="text-center md:text-left p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#2980B9] rounded-full mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg text-[#333333]">Property Verification</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed">
                All properties are verified through document checks and ownership confirmation.
              </p>
            </div>

            {/* Verification Point 2: Identity Verification */}
            <div className="text-center md:text-left p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#2980B9] rounded-full mr-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg text-[#333333]">Identity Verification</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed">
                Both owners and tenants undergo identity verification for added security.
              </p>
            </div>

            {/* Verification Point 3: Review System */}
            <div className="text-center md:text-left p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#2980B9] rounded-full mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg text-[#333333]">Review System</h3>
              </div>
              <p className="text-[#333333] text-sm leading-relaxed">
                Transparent review system helps build trust within our community.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Trust Through Verification Section */}

        {/* Why Choose DirectRent Section - NEWLY ADDED */}
      <section className="py-20 bg-[#F9F9F9]"> {/* Matches the first section's background for consistency */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
              Why Choose <span className="text-[#2980B9]"> MeFieConnect</span>
            </h2>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              We're revolutionizing the rental market by putting control back in the hands of property owners and tenants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Benefit 1: No Hidden Fees */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">No Hidden Fees</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Transparent pricing with no surprise charges or commission fees.
              </p>
            </div>

            {/* Benefit 2: Faster Process */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">Faster Process</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Streamlined rental process without unnecessary delays.
              </p>
            </div>

            {/* Benefit 3: Direct Communication */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">Direct Communication</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Speak directly with property owners for better understanding.
              </p>
            </div>

            {/* Benefit 4: Secure Platform */}
            <div className="text-center p-6 rounded-xl hover:bg-gray-750 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#2980B9] rounded-full mx-auto mb-6">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg text-[#333333] mb-3">Secure Platform</h3>
              <p className="text-[#333333] text-sm leading-relaxed">
                Bank-level security for all transactions and communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose DirectRent Section */}

       {/* DirectRent by the Numbers Section - NEWLY ADDED */}
      <section className="py-20 bg-[F9F9F9]"> {/* Use bg-gray-900 for contrast */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4">
              <span className="text-[#2980B9]"> MeFieConnect</span> by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1: Verified Properties */}
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-[#2ECC71] mb-2">15,000+</p>
              <p className="text-sm text-[#333333]">Verified Properties</p>
            </div>

            {/* Stat 2: Happy Tenants */}
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-[#2ECC71] mb-2">50,000+</p>
              <p className="text-sm text-[#333333]">Happy Tenants</p>
            </div>

            {/* Stat 3: Satisfaction Rate */}
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-[#2ECC71] mb-2">98%</p>
              <p className="text-sm text-[#333333]">Satisfaction Rate</p>
            </div>

            {/* Stat 4: Saved in Fees */}
            <div className="text-center p-6">
              <p className="text-3xl font-bold text-[#2ECC71] mb-2">$2M+</p>
              <p className="text-sm text-[#333333]">Saved in Fees</p>
            </div>
          </div>
        </div>
      </section>
      {/* End DirectRent by the Numbers Section */}

      {/* Ready to Experience Direct Rentals Section with Video Overlay - NEWLY ADDED */}
      <section className="relative py-20 bg-[#F9F9F9] overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for mobile autoplay
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={AboutVideo} type="video/mp4" /> {/* Replace with your video path */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay */}

        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Ready to Experience <span className="text-[#2980B9]"> MeFieConnect</span>?
          </h2>
          <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of property owners and tenants who have discovered a better way to rent. Start your journey with DirectRent today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2980B9] hover:bg-[#1F618D] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg">
              List Your Property
            </button>
            <Link to="/properties"><button className="bg-transparent border-2 border-white  hover:bg-[#1F618D] hover:text-white  text-blue-600 font-bold py-3 px-8 rounded-lg text-lg shadow-lg">
              Browse Properties
            </button></Link>
          </div>
        </div>
      </section>
      {/* End Ready to Experience Direct Rentals Section */}

            <Footer />
        </div>
    );
}