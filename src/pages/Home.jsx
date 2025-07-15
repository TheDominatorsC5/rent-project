import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    ArrowRight,
    Play,
    Home as HomeIcon,
    Users,
    Shield,
    Search,
    MapPin,
    Calendar,
    User, // Keep User for Get Started Section
    Building2, // Keep Building2 for Get Started Section
} from "lucide-react"; // These are used for your existing sections AND new 'Get Started' section
import HomeProductCard from "../components/HomeProductCard";
import { FaSearch, FaPlus } from 'react-icons/fa'; // Keeping these for the hero buttons as per previous instruction
import HeroVideo from "../assets/videos/hero-video.mp4"
import DreamHomeVideo from "../assets/videos/dreamhome-video.mp4"
import HeroImage from "../assets/images/hero-image.jpg"

export default function HomePage() {
    const products = [
        {
            icon: HomeIcon,
            title: "Premium Listings",
            description:
                "Showcase your property with professional photos and detailed descriptions to attract quality tenants.",
            features: [
                "Professional photography service",
                "Virtual tour integration",
                "Detailed property descriptions",
                "Multiple listing platforms",
                "Priority placement in search",
            ],
            price: "$49",
            isPopular: true,
        },
        {
            icon: Users,
            title: "Tenant Screening",
            description:
                "Comprehensive background checks and tenant verification to ensure reliable renters for your property.",
            features: [
                "Credit score verification",
                "Employment history check",
                "Previous landlord references",
                "Criminal background check",
                "Income verification",
            ],
            price: "$29",
        },
        {
            icon: Shield,
            title: "Property Protection",
            description:
                "Comprehensive insurance and legal protection for your rental property and peace of mind.",
            features: [
                "Damage protection coverage",
                "Legal document templates",
                "Eviction protection service",
                "24/7 emergency support",
                "Liability insurance coverage",
            ],
            price: "$39",
        },
    ];

    const features = [
        {
            icon: Search,
            title: "Smart Matching",
            description:
                "AI-powered tenant matching that connects you with the perfect renters for your property.",
        },
        {
            icon: MapPin,
            title: "Location Analytics",
            description:
                "Detailed neighborhood insights and market data to optimize your rental pricing strategy.",
        },
        {
            icon: Calendar,
            title: "Automated Management",
            description:
                "Streamline rent collection, maintenance requests, and tenant communication in one platform.",
        },
    ];

    // Define data for Featured Listings, matching ProductCardProps
    const featuredListingsData = [
        {
            image: 'https://via.placeholder.com/400x250/34495e/ecf0f1?text=Modern+Downtown+Apartment', // Replace with your image path
            price: '$2,400', // Just the number, ProductCard adds "/month"
            title: 'Modern Downtown Apartment',
            location: 'Downtown, City Center',
            beds: '2 bed, 2 bath', // Combine beds and baths if ProductCard expects one string
            size: '1200', // Just the number, ProductCard adds "sq ft"
            verified: true,
        },
        {
            image: 'https://via.placeholder.com/400x250/2c3e50/ecf0f1?text=Cozy+Suburban+House',
            price: '$1,800',
            title: 'Cozy Suburban House',
            location: 'Suburban District, West Side',
            beds: '3 bed, 2 bath',
            size: '1800',
            verified: true,
        },
        {
            image: 'https://via.placeholder.com/400x250/1a2a3a/ecf0f1?text=Studio+Apartment',
            price: '$1,200',
            title: 'Studio Apartment',
            location: 'Arts District, East Side',
            beds: 'Studio, 1 bath',
            size: '650',
            verified: true,
        },
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-700 font-[outfit]">
                {/* Hero Section - FIXED */}
                <section className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-center py-10 px-4 md:py-20 md:px-10 gap-12 flex-wrap min-h-[600px]">
                    {/* Video Background */}
                    {/* Ensure your video files are in the 'public/videos/' folder */}
                    <video
                        autoPlay // Automatically plays the video
                        loop     // Loops the video
                        muted    // Mutes the video (crucial for autoplay and good UX)
                        playsInline // Recommended for mobile to play inline
                        className="absolute inset-0 w-full h-full object-cover z-0" // Full cover, behind everything
                    >
                        {/* Provide paths to your optimized video files */}
                        <source src={HeroVideo} type="video/mp4" />
                        {/* <source src="/videos/apartment-hero.webm" type="video/webm" /> */}
                        {/* Your browser does not support the video tag. */}
                    </video>
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-0"></div>

                    {/* Content Wrapper for Text and Buttons */}
                    <div className="relative z-20 max-w-xl text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-violet-900 bg-clip-text text-transparent block mb-6 leading-tight">
                            Find Your Perfect
                            <span className="bg-gradient-to-r from-blue-800 to-purple-900 bg-clip-text text-transparent block">
                                Rental Home
                            </span>
                        </h1>
                        <p className="text-xl text-white font-bold mb-8 leading-relaxed">
                            Discover amazing rental properties and connect with trusted landlords. From cozy apartments to spacious houses, find your next home with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 font-medium text-white px-6 py-3 rounded-lg text-lg cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
                                <FaSearch className="mr-2" /> Search Rentals
                            </button>
                            <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 font-medium text-white px-6 py-3 rounded-lg text-lg cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
                                <FaPlus className="mr-2" /> List Your Property
                            </button>
                        </div>
                    </div>

                    {/* Hero Image Placeholder - Ensure it's part of the flex container */}
                    <div className="relative z-10 w-full max-w-[500px] h-[350px] rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-lg flex-shrink-0 inset-0 bg-black/60
           ">
                        {/* Using a darker background and border for the placeholder to fit the overall dark theme */}

                        <img src={HeroImage} alt="Modern Apartment" className="w-full h-full object-center rounded-lg" />
                    </div>
                </section>
                {/* --- END: Hero Section --- */}

                {/* Get Started Today Section (Embedded with Tailwind) */}
                <section className="py-20 bg-gray-800/50">
                    <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Get Started Today
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Join thousands of satisfied tenants and property owners
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Card for Tenants */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full sm:w-96 shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition-all duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-5">
                                <User className="text-white h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">For Tenants</h3>
                            <p className="text-base text-gray-400 mb-6 leading-relaxed">
                                Browse verified listings, schedule viewings, and apply online with our secure platform.
                            </p>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 w-full rounded-lg text-lg transition-all duration-300 ">
                                Start Searching
                            </button>
                        </div>

                        {/* Card for Property Owners */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 w-full sm:w-96 shadow-lg flex flex-col items-center text-center hover:bg-gray-700 transition-all duration-300">
                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-5">
                                <Building2 className="text-white h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">For Property Owners</h3>
                            <p className="text-base text-gray-400 mb-6 leading-relaxed">
                                List your properties, screen tenants, and manage rentals all in one place.
                            </p>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 w-full rounded-lg text-lg transition-all duration-300">
                                List Property
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- START: Featured Listings Section (Using your ProductCard) --- */}
                <section className="py-20 bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Featured Listings
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Discover our most popular rental properties
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {featuredListingsData.map((listing, index) => (
                                <HomeProductCard
                                    key={index}
                                    image={listing.image}
                                    price={listing.price}
                                    title={listing.title}
                                    location={listing.location}
                                    beds={listing.beds}
                                    size={listing.size}
                                    verified={listing.verified}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-12 flex items-center justify-center">
                            <button className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-8 rounded-lg text-lg bg-gradient-to-r from-blue-500 to-purple-600 font-medium  cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
                                View All Listings
                            </button>
                        </div>
                    </div>
                </section>
                {/* --- END: Featured Listings Section --- */}



                {/* CTA Section with Video Background */}
                <section className="relative py-20 overflow-hidden">
                    {/* Video Background */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    >
                        <source src={DreamHomeVideo} type="video/mp4" />
                        {/* You can add a WebM source for better compatibility if you have one */}
                        {/* <source src="/assets/videos/cta-video.webm" type="video/webm" /> */}
                        Your browser does not support the video tag.
                    </video>

                    {/* Dark Overlay for Video */}
                    <div className="absolute inset-0 bg-black/60 z-[1]"></div>

                    {/* Content Wrapper */}
                    <div className="relative z-[2] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Find Your Dream Home?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Join thousands of renters and landlords who trust MeFieConnect for their housing needs.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center mx-auto group">
                            Start Searching Today
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </section>
                {/* Features Section */}
                <section className="py-20 bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent "> MefieConnect</span>?
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                The most trusted platform for finding and managing rental properties, built for modern renters and landlords.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-300">
                                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-4">
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}