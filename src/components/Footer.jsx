import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { FaHouseUser } from "react-icons/fa";


export default function Footer() {
    return (
        <>
            <footer className="bg-[#2C3E50] text-white font-[outfit]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className='flex justify-around items-center text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mr-50 sm:mr-8 lg:mr-27'>
                                <div className="flex gap-5">
                                    <Link to="/" className=" text-xl font-bold flex items-center gap-2"><FaHouseUser size={30} className="text-white" />
                                        <span className="text-[#2980B9]"> MeFieConnect</span>
                                    </Link>
                                </div>
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                Connecting quality tenants with trusted landlords through our innovative rental platform. Find your perfect home today.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-[#1F618D] transition-colors">
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-white hover:text-[#1F618D]transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-white hover:text-[#1F618D] transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-white hover:text-[#1F618D] transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#F9F9F9] bg-clip-text transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Browse Properties
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        List Your Property
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        For Owners
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#F9F9F9] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Services</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Apartments
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Houses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Vacation Rentals
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Property Management
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                        Tenant Screening
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-[#F9F9F9] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Contact Info</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-4 w-4 text-[#2980B9]" />
                                    <span className="text-[#2980B9] text-sm">
                                        1234 Housing Street, Rent City, RC 12345
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-4 w-4 text-[#2980B9]" />
                                    <span className="text-[#2980B9] text-sm">
                                        +233 (54839) 32123-RENT
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-4 w-4 text-[#2980B9]" />
                                    <span className="text-[#2980B9] text-sm">
                                        mefieconnect@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-white text-sm">
                            © 2024 MefieConnect. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white hover:text-[#1F618D] transition-colors text-sm">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}






