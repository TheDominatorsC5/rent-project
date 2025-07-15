import React, { useState } from 'react';
import { Menu, X, ChevronDown, } from 'lucide-react';
import { Link, useLocation } from 'react-router'; // Fix: use 'react-router-dom' not 'react-router'
import { FaHouseUser } from "react-icons/fa";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-gray-900 font-[outfit] border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className='flex justify-around items-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                        <div className="flex gap-5">
                            <Link to="/" className=" text-xl font-bold flex items-center gap-2"><FaHouseUser size={30} className="text-white" />
                                MeFieConnect
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['/', '/about'].map(path => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(path)
                                            ? 'text-blue-400 bg-gray-800'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                        }`}
                                >
                                    {path === '/' ? 'Home' : 'About'}
                                </Link>
                            ))}
                            <div className="relative group">
                                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                    Properties
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    <div className="py-1">
                                        {['Apartments', 'Houses', 'Vacation Rentals'].map(item => (
                                            <a
                                                key={item}
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                For Owners
                            </a>
                            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block gap-2">
                        <button className=" hover:text-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ">
                            Sign In
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                        {['/', '/about'].map(path => (
                            <Link
                                key={path}
                                to={path}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(path)
                                        ? 'text-blue-400 bg-gray-700'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {path === '/' ? 'Home' : 'About'}
                            </Link>
                        ))}
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                            Properties
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                            For Owners
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                            Contact
                        </a>
                        <button className="w-full text-left bg-blue-600 hover:text-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-4 gap-2">
                            Sign In
                        </button>
                        <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-4">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
