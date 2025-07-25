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
                className="w-full h-54 sm:h-62 md:h-70 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="bg-white w-[90%] mx-auto my-4">
                <div className="flex justify-between">
                    <h2 className="text-lg md:text-xl font-medium text-black">{property.propertyTitle}</h2>
                    <p className="flex items-center  text-black p-1  text-lg">
                        <Check className="mr-3 bg-[#32cc72] rounded-full stroke-white size-5 p-1" /> Owner
                    </p>



                </div>
                <p className="text-black font-normal text-sm md:text-lg mt-2">
                    {property.propertyType}
                </p>
                <div className="flex mt-2 text-[#7F8C8D] font-semibold">
                    <MapPin className="" />
                    <p className="text-sm md:text-lg">{property.city}</p>
                </div>


                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg md:text-2xl font-medium text-black">₵{property.monthlyPrice}/month</span>

                    {/* <Link to="/rent-listing-detail"> */}
                    <button onClick={navigationHandler} className="bg-[#2980B9] font-semibold text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-[#1F618D] transition-colors">
                        View Details
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>

    );
}