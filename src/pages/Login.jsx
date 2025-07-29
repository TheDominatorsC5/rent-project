
import { Link } from 'react-router';
import SubmitButton from '../components/SubmitButton';
import { apiClient } from '../api/client';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import RememberMeCheckbox from '../components/Checkbox';
import { FaHouseUser } from 'react-icons/fa';

export default function Login() {

    const navigate = useNavigate();

    const [isValidCredentials, setValidCredentials] = useState(true)

    const loginUser = async (data) => {
        try {
            const response = await apiClient.post("/api/rent/signin", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.data.success) {
                localStorage.setItem("ACCESS_TOKEN", response.data.token)
                localStorage.setItem("username", response.data.username);
                setValidCredentials(true);
                localStorage.setItem("role", response.data.role)
                if (response.data.role == "landlord") {
                    navigate("/owner-dashboard");
                }
                else if (response.data.role == "admin") {
                    navigate("/admin");
                }
                else {
                    navigate("/");
                }
            } else {
                setValidCredentials(false);
            }

        } catch (error) {
            setValidCredentials(false);
        }
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

            <section className="bg-lightgray text-deepgray relative h-[100vh] flex md:items-center justify-around bg-cover bg-center bg-no-repeat">
                <div className='relative z-10 w-full py-4'>
                    <div className="md:flex items-center justify-center gap-8">
                        <div className="mx-4 md:w-2/5 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-xl p-8">
                            <div className='flex flex-col items-center space-y-2 mb-2'>
                                {/* Logo */}
                                <div className='flex justify-around items-center text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                                    <div className="flex gap-5">
                                        <Link to="/" className="text-xl font-bold flex items-center gap-2"><FaHouseUser size={30} className="text-primary" />
                                            <span className="bg-gradient-to-r from-[#5b92f2] to-primary bg-clip-text text-transparent"> MeFieConnect</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='mb-3 text-center'>
                                    {/* <h1 className='text-black font-bold text-xl'>Log In</h1> */}
                                    <p className='text-black'>Welcome back! Please sign in to your account.</p>
                                </div>
                            </div>
                            <form action={loginUser}>
                                <label htmlFor="" class="block font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    required
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="e.g., yawkesse369@gmail.com"
                                />
                                <label htmlFor="" class="block font-medium mb-2 mt-3">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    required
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="**********"
                                />
                                <div style={{ display: !isValidCredentials ? 'flex' : 'none' }} className='mt-[5px]'>
                                    <p style={{
                                        fontSize: '14px',
                                        fontStyle: 'italic',
                                        color: 'maroon',
                                        letterSpacing: '2px'
                                    }} className='italics'>invalid credentials</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <RememberMeCheckbox />
                                    <button className='bg-gradient-to-r from-[#5b92f2] to-primary bg-clip-text text-transparent hover:text-[#29492f]'><a href="">Forgot Password?</a></button>
                                </div>

                                <SubmitButton
                                    className="bg-[#2980B9] w-full mb-3 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"
                                    title={"Login"} />

                                <div className="flex items-center">
                                    <div className="flex-grow border-t border-gray-500"></div>
                                    <span className="mx-2 font-semibold">Don't have an account?</span>
                                    <div className="flex-grow border-t border-gray-500"></div>
                                </div>
                                <Link to={"/signup"} className="flex justify-center border-white/10 bg-gradient-to-r from-[#5b92f2] to-primary bg-clip-text text-transparent hover:text-primary font-semibold mt-2">Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}