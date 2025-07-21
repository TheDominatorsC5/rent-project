import { Link } from "react-router";
import SubmitButton from "../../components/SubmitButton";
import { apiClient } from "../../api/client";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [isValidCredentials, setValidCredentials] = useState(true)

    const adminLogin = async (data) => {
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
                if (response.data.role = "admin") {
                    navigate("/admin");
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
            if (localStorage.getItem("role") === "admin") {
                navigate("/admin");
            } 
        }
    }, [navigate]);

    return (
        <>

            <section className="bg-lightgray text-deepgray relative h-[100vh] flex items-center justify-around bg-cover bg-center bg-no-repeat">
                <div className='relative z-10 w-full'>
                    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full">
                        <div className="w-2/5 bg-white backdrop-blur-md border border-white/90 rounded-xl shadow-xl p-8">
                            <div className='mb-3 text-center'>
                                <h1 className='mb-4 text-black font-bold text-2xl text-left'>Admin Login</h1>
                            </div>
                            <form action={adminLogin}>
                                <label htmlFor="" class="block font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm"
                                    placeholder="e.g., yawkesse369@gmail.com"
                                />
                                <label htmlFor="" class="block font-medium mb-2 mt-3">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id=""
                                    class="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-[#29492f] focus:border-green-700 sm:text-sm mb-6"
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
                                

                                <SubmitButton
                                    className="bg-gradient-to-r from-[#5b92f2] to-primary w-full mb-3 text-white hover:bg-[#29492f] transition duration-300 block px-8 py-2 border rounded-md font-semibold"
                                    title={"Login"} />

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}