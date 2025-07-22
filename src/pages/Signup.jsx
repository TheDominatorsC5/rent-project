import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { HousePlus, UserSearch } from 'lucide-react';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react"
import { FaHouseUser } from 'react-icons/fa';

export default function SignUp() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('propertySeeker')

    const signUp = async (data) => {
        const error = formValidation(data);
        if (error) {
            alert(error);
            return;
        }
        try {
            const response = await apiClient.post(`/api/rent/signup${userType === 'propertyOwner' ? '/landlord' : '/renter'}`, data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.data.success) {
                navigate(userType === 'propertyOwner' ? '/login' : '/');
            } else {
                alert(response.data.message || 'An error occurred during sign up.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message || 'An error occurred during sign up.');
            } else {
                alert('An unexpected error occurred. Please try again later.');
            }
            // console.error('Sign up error:', error);
        }
    }

    const formValidation = (data) => {
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');
        const email = data.get('email');

        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (password !== confirmPassword) {
            return 'Passwords do not match';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Invalid email format';
        }
        return null;
    }

    useEffect(() => {
        if (localStorage.getItem("ACCESS_TOKEN")) {
            if (localStorage.getItem("role") === "landlord") {
                navigate("/owner-dashboard");
            } else {
                navigate("/");
            }
        }
    }, [navigate]);

    return (
        <>
            <section className="bg-lightgray text-deepgray flex items-center justify-center relative min-h-[100vh] bg-cover bg-center bg-no-repeat">
                <div className='relative z-10 w-full py-4'>
                    <div className="md:flex items-center justify-center gap-8">
                        <div className="mx-4 md:w-2/5 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-xl p-8">
                            {/* Logo */}
                            <div className='mb-8 flex justify-around items-center text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                                <div className="flex gap-5">
                                    <Link to="/" className="text-xl font-bold flex items-center gap-2"><FaHouseUser size={30} className="text-primary" />
                                        <span className="bg-gradient-to-r from-[#5b92f2] to-primary bg-clip-text text-transparent"> MeFieConnect</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full flex flex-row justify-around mb-2">
                                <div className="flex flex-col items-center">
                                    <span role='button' onClick={() => setUserType('propertySeeker')} className={`border py-2 px-6 rounded-md shadow-sm ${userType === 'propertySeeker' ? 'bg-[#2980B9] text-white' : ''} hover:bg-[#29492f] transition duration-300`}>
                                        <UserSearch />
                                    </span>
                                    <p className="font-semibold">Property Seeker</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span role='button' onClick={() => setUserType('propertyOwner')} className={`border border-gray-500 py-2 px-6 rounded-md ${userType === 'propertyOwner' ? 'bg-[#2980B9] text-white' : ''} hover:bg-[#29492f] transition duration-300 hover:text-white`}>
                                        <HousePlus />
                                    </span>
                                    <p className="font-semibold">Property Owner</p>
                                </div>

                            </div>

                            <hr className='text-primary my-4' />

                            <form action={signUp}>
                                <div className='mt-4'>
                                    <div className='flex gap-4'>

                                        <div className='w-full'>
                                            <label class="block font-medium mb-3">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id=""
                                                required
                                                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                                placeholder="e.g., Felix"
                                            />
                                        </div>

                                        <div className='w-full'>
                                            <label class="block font-medium mb-3">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id=""
                                                required
                                                class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                                placeholder="e.g., Kofi"
                                            />
                                        </div>
                                    </div>

                                    <label class="block mt-2  font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id=""
                                        required
                                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="e.g., kwame232@gmail.com"
                                    />

                                    <label class="block mt-2 font-medium mb-2">Phone no</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        id=""
                                        required
                                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="e.g., +233 24 123 4567"
                                    />

                                    <label class="block mt-2  font-medium mb-2">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id=""
                                        required
                                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="**********"
                                    />

                                    <label class="block mt-2  font-medium mb-3">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id=""
                                        required
                                        class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                        placeholder="**********"
                                    />
                                </div>
                                <SubmitButton
                                    className="text-sm bg-[#2980B9] text-white hover:bg-[#29492f] transition duration-300 w-full my-4 block py-2 border rounded-md font-semibold"
                                    title={"Sign Up"} />

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Already have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/login"} className="flex justify-center border-white/10 bg-gradient-to-r from-[#5b92f2] to-primary bg-clip-text text-transparent hover:text-[#29492f] font-semibold mt-2">Login</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}