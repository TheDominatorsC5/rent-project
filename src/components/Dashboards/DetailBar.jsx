import { User } from "lucide-react";
import { CirclePower } from "lucide-react";
import { useNavigate } from "react-router";

export default function DetailBar() {
    const userName = localStorage.getItem("username")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")        
    }
    
    return (
        <>
            <div className="bg-[#2C3E50] text-[#F9F9F9] p-4 w-full flex justify-between sticky top-0">
                <h1 className="text-xs md:text-sm lg:text-xl font-bold">Admin Dashboard</h1>
                <h1 className="text-sm md:text-xl lg:text-2xl font-bold">MefieConnect</h1>
                <div className="text-xs md:text-sm lg:text-xl flex gap-4 items-center">
                    <span><User /></span><span>{userName}</span>
                    <button onClick={() => logout()} className="p-2">
                        <CirclePower className="inline text-white hover:text-red-500" />
                    </button>
                </div>
            </div>
        </>
    )
}