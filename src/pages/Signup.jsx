import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { HousePlus, UserSearch } from 'lucide-react';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useState } from "react"
import PropertyOwner from '../components/Signup/PropertyOwner';
import PropertySeeker from '../components/Signup/PropertySeeker';

export default function SignUp() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('propertySeeker')

    const signUp = async (data) => {
        try {
            const response = await apiClient.post("/signup", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <section className=" bg-[#2A3545] text-slate-800 flex items-center justify-center relative min-h-[100vh] bg-cover bg-center bg-no-repeat">
                <div className='relative z-10 w-full py-4'>
                    <div className="md:flex items-center justify-center gap-8">
                        <div className="mx-4 md:w-2/5 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-xl p-8">
                            <div className="w-full flex flex-row justify-around mb-2">
                                <div className="flex flex-col items-center">
                                    <span role='button' onClick={() => setUserType('propertySeeker')} className={`border py-2 px-6 rounded-md shadow-sm ${userType === 'propertySeeker' ? ' bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''} hover:bg-[#29492f] transition duration-300`}>
                                        <UserSearch />
                                    </span>
                                    <p className="font-semibold">Property Seeker</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <span role='button' onClick={() => setUserType('propertyOwner')} className={`border border-gray-500 py-2 px-6 rounded-md ${userType === 'propertyOwner' ? ' bg-gradient-to-r from-blue-500 to-purple-600 text-white' : ''} hover:bg-[#29492f] transition duration-300 hover:text-white`}>
                                        <HousePlus />
                                    </span>
                                    <p className="font-semibold">Property Owner</p>
                                </div>

                            </div>

                            <hr className='text-green-700 my-4' />

                            <form action={signUp}>
                                {userType === 'propertyOwner' ? (
                                    <PropertyOwner />
                                ) : (
                                    <PropertySeeker />
                                )}
                                <SubmitButton
                                    className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-[#29492f] transition duration-300 w-full my-4 block py-2 border rounded-md font-semibold"
                                    title={"Sign Up"} />

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Already have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/login"} className="flex justify-center border-white/10 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:text-[#29492f] font-semibold mt-2">Login</Link>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}