import { MapPin, Check } from "lucide-react";
import { useNavigate } from "react-router";

export default function RentListingCard({ property }) {
    const navigate = useNavigate();
    const navigationHandler = () => {
        navigate('/rent-listing-detail', { state: { property: property } });
    }

    return (
        <div className="overflow-hidden w-full sm:max-w-sm rounded-lg shadow-sm bg-white hover:shadow-lg mx-auto mt-10 font-[outfit]">
            <img
                src={property.images[0]}
                alt="Room Image"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="bg-white w-[90%] mx-auto my-4">
                <div className="flex justify-between flex-col sm:flex-row sm:items-center gap-2">
                    <h2 className="text-base sm:text-lg md:text-xl font-medium text-black">
                        {property.propertyTitle}
                    </h2>
                    <p className="flex items-center text-black text-sm sm:text-base">
                        <Check className="mr-2 bg-[#32cc72] rounded-full stroke-white size-5 p-1" />
                        Owner
                    </p>
                </div>

                <p className="text-black font-normal text-sm sm:text-base md:text-lg mt-2">
                    {property.propertyType}
                </p>

                <div className="flex mt-2 text-[#7F8C8D] font-semibold items-center gap-1">
                    <MapPin />
                    <p className="text-sm sm:text-base md:text-lg">{property.city}</p>
                </div>

                <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
                    <span className="text-base sm:text-lg md:text-2xl font-medium text-black">
                        ₵{property.monthlyPrice}/month
                    </span>

                    <button
                        onClick={navigationHandler}
                        className="bg-[#2980B9] font-semibold text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#1F618D] transition-colors w-full"
                    >
                        View Details
                    </button>
                </div>
            
        </div>
</div >


    );
}