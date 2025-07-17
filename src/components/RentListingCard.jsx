import { Link } from "react-router";
import { MapPin, Check } from "lucide-react";

export default function RentListingCard() {

    return (
        <div className="overflow-hidden w-full sm:max-w-sm rounded-lg shadow-sm bg-white hover:shadow-lg mx-auto mt-10">
            <img
                src="https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?q=80&w=854&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Room Image"
                className="w-full h-54 sm:h-62 md:h-70 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="bg-white w-[90%] mx-auto my-4">
                <div className="flex justify-between">
                    <h2 className="text-lg md:text-xl font-semibold text-black">Cozy Studio</h2>
                    <p className="flex flex-row items-center justify-center rounded-full bg-[#27AE60] py-1 px-3 text-white">
                        <Check className="mr-1 p-1" /> Verified
                    </p>
                </div>
                <p className="text-black font-semibold text-sm md:text-lg mt-2">
                    Perfect for young professionals
                </p>
                <div className="flex mt-2 text-[#7F8C8D] font-semibold">
                    <MapPin className="" />
                    <p className="text-sm md:text-lg">Achimota</p>
                </div>


                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg md:text-2xl font-medium text-black">Ghc1,500/month</span>

                    <Link to="/rent-listing-detail">
                        <button className="bg-[#2980B9] font-semibold text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-[#1F618D] transition-colors">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}