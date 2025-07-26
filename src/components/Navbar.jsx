import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, CirclePower, } from 'lucide-react';
import { Link, useLocation } from 'react-router'; // Fix: use 'react-router-dom' not 'react-router'
import { FaHouseUser } from "react-icons/fa";
import { useNavigate } from 'react-router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [userrole, setUserRole] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const isActive = (path) => location.pathname === path;


    useEffect(() => {
        if (localStorage.getItem("ACCESS_TOKEN")) {
            setIsAuthenticated(true);
        }
        const storedUserRole = localStorage.getItem('role');
        if (storedUserRole) {
            setUserRole(storedUserRole);
        }

        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setUsername(storedUser);
        }
    }, []);

    const logout = () => {
        localStorage.clear()
        setIsAuthenticated(false);
        setUserRole('');
        setUsername('');
        navigate("/");
    }

    const navigateHandler = () => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const role = localStorage.getItem("role");

        if (!token) {
            navigate('/login');
            console.log('no token, signin')
            return;
        }

        if (role !== "landlord") {
            console.log('unauthorized')
            return;
        }

        navigate('/owner-dashboard');
        
    }

    return (
        <nav className="bg-[#2C3E50] font-[outfit] border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className='flex justify-around items-center text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                        <div className="flex gap-5">
                            <Link to="/" className=" text-xl font-bold flex items-center gap-2"><FaHouseUser size={30} className="text-white" />
                                <span className="text-[#2980B9]"> MeFieConnect</span>
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
                                <Link to='/rent-listings'><button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                    Properties
                                    <ChevronDown className="ml-1 h-4 w-4" />
                                </button></Link>
                                {/* <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                                </div> */}
                            </div>
                            <Link to='/owner-dashboard' className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                For Owners
                                </Link>
                            <Link to='/contact' className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block gap-2">
                        {isAuthenticated ? (
                            <>
                                <span className="text-white mr-2">Welcome, {username}</span>

                                <button onClick={() => logout()} className="p-2">
                                    <CirclePower className="inline text-white hover:text-red-500" />
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to='/login'>
                                    <button className=" hover:text-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ">
                                        Sign In
                                    </button>
                                </Link>
                                <Link to='/signup'>
                                    <button className="bg-[#2980B9] hover:bg-[#1F618D] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                        Get Started
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>


                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1F618D] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F9F9F9]">
                        {['/', '/about'].map(path => (
                            <Link
                                key={path}
                                to={path}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(path)
                                    ? 'text-blue-400 bg-gray-700'
                                    : 'text-gray-300 hover:text-white hover:bg-[#1F618D]'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {path === '/' ? 'Home' : 'About'}
                            </Link>
                        ))}
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1F618D] transition-colors">
                            Properties
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1F618D] transition-colors">
                            For Owners
                        </a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1F618D] transition-colors">
                            Contact
                        </a>
                        <button className="w-full text-left bg-[#2980B9] hover:text-[#1F618D] text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-4 gap-2">
                            Sign In
                        </button>
                        <button className="w-full text-left bg-[#2980B9] hover:bg-[#1F618D] text-white px-3 py-2 rounded-md text-base font-medium transition-colors mt-4">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
