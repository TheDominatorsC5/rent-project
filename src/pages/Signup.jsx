import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { BriefcaseBusiness, UserCheck } from 'lucide-react';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useState } from "react"

export default function SignUpUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')

    const signUpUser = async (data) => {
        try {
            const response = await apiClient.post("/signup", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            navigate("/otp", {
                state: { email: response.data.email }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className="bg-[url(./assets/images/africanInspiredPatternSignupScreen.jpg)] bg-[#F9FAFB] text-slate-800 flex items-center justify-center relative h-[100vh] bg-cover bg-center bg-no-repeat">

                <div className='relative z-10 w-full'>
                    <div className="md:flex items-center justify-center gap-8">
                        <div className="mx-4 md:w-2/5 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-xl p-8">
                           <div className='mb-3 text-center'>
                                <h1 className='mb-2 text-black text-xl'>Register</h1>
                                <p>Register as a Property Owner.</p>
                            </div>
                            <form action={signUpUser}>

                                <div className='flex gap-4'>

                                    <div className='w-full'>
                                        <label class="block font-medium mb-3">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id=""
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
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="e.g., kwame232@gmail.com"
                                />

                                <label class="block mt-2  font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />

                                <label class="block mt-2  font-medium mb-3">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id=""
                                    class="block w-full px-3 py-1.5 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />

                                <SubmitButton
                                    className="text-sm bg-green-700 text-white hover:bg-[#29492f] transition duration-300 w-full my-4 block py-2 border rounded-md font-semibold"
                                    title={"Sign Up"} />

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Already have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/login"} className="flex justify-center border-white/10 text-green-700 hover:text-[#29492f] font-semibold mt-2">Login</Link>
                            </form>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}