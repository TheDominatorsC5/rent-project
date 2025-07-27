import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    MapPin, CarFront, WavesLadder, ShieldCheck, MessageSquare, Cable,
    Star, User, Check, Images, Heart, Snowflake, ChevronLeft, Dumbbell, WifiHigh,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ make sure it's from react-router-dom
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { apiClient, apiFetcher } from "../api/client";

export default function RentListingDetails() {
    const location = useLocation();
    const property = location.state.property;

    const navigate = useNavigate();
    const navigationHandler = () => {
        navigate("/listing-gallery", { state: { images: property.images } }
        );
    }

    const userNavigationHandler = async () => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        if (token === null) {
            navigate("/login");
            return;
        }

        const res = await apiClient.post(`/api/rent/property/favorite/${property.id}`);
        if (res.data.success) {
            navigate("/user-dashboard");
        }
    }

    const ownerNavigationHandler = () => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        if (token === null) {
            navigate("/login");
        }
        else {
            navigate("/owner-contact");
        }

    }

    return (
        <>
            <Navbar />

            <div>
                <div className="w-[90%] max-w-[1200px] mx-auto my-6 font-[outfit]">
                    {/* Breadcrumb */}
                    <Link to={"/rent-listings"}>
                        <button className="flex items-center text-sm sm:text-base md:text-xl text-[#7F8C8D] hover:text-black cursor-pointer">
                            <ChevronLeft className="mr-2 size-10" /> All Listings
                        </button>
                    </Link>


                    {/* Gallery */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 sm:my-10 relative">
                        <img
                            src={property.images[0]}
                            alt="Main Property Image"
                            className="col-span-2 row-span-2 object-cover rounded w-full h-[50vh] sm:h-[75vh]"
                        />
                        <img
                            src={property.images[1]}
                            alt="Kitchen"
                            className="object-cover rounded w-full h-40 sm:h-52"
                        />
                        <img
                            src={property.images[2]}
                            alt="Living Room"
                            className="object-cover rounded w-full h-40 sm:h-52"
                        />
                        <img
                            src={property.images[3]}
                            alt="Bedroom"
                            className="object-cover rounded w-full h-40 sm:h-52"
                        />
                        <img
                            src={property.images[4]}
                            alt="Bathroom"
                            className="object-cover rounded w-full h-40 sm:h-52"
                        />

                        {/* View all photos button */}
                        {/* <Link to="/listing-gallery"> */}
                        <button onClick={navigationHandler}
                            className="absolute bottom-4 right-4 bg-zinc-50 text-sm font-medium px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-100 flex items-center shadow-md">
                            <Images className="mr-2" /> Show all photos
                        </button>
                        {/* </Link> */}
                    </div>
                </div>

                <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 font-[outfit]">

                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
                                {property.propertyTitle}
                            </h1>

                            <div className="flex flex-row gap-4">
                                <button onClick={userNavigationHandler}>
                                    <Heart className="border border-zinc-300 fill-zinc-200 bg-white size-10 rounded-xl p-2 hover:fill-red-600 stroke-0" />
                                </button>

                            </div>

                        </div>

                        {/* Location & verification */}
                        <div className="flex flex-wrap items-center gap-18 mt-3 text-[#7F8C8D] font-medium">
                            <p className="flex items-center"><MapPin className="mr-1" />{property.city}</p>
                            <p className="flex items-center  text-black p-1  text-lg">
                                <Check className="mr-3 bg-[#32cc72] rounded-full stroke-white size-5 p-1" /> Owner
                            </p>
                        </div>

                        <div className="flex justify-around bg-zinc-100 rounded-lg py-4 px-4 sm:px-10 my-6 text-center font-semibold">
                            <p><span className="text-2xl">{property.bedrooms}</span><br />Bedrooms</p>
                            <p><span className="text-2xl">{property.bathrooms}</span><br />Bedrooms</p>
                            <p><span className="text-2xl">{property.squareFeet}</span><br />Sq ft</p>
                        </div>

                        <h2 className="text-xl font-semibold mt-4">Description</h2>
                        <p className="text-sm sm:text-base text-[#7F8C8D] mt-2">
                            {property.description}
                        </p>

                        <h3 className="text-xl font-semibold mt-6">Amenities</h3>
                        <div className="flex flex-wrap gap-6 mt-3 text-[#7F8C8D] font-medium">
                            {/* <p className="flex items-center"><CarFront className="mr-2" /> Parking</p>
                        <p className="flex items-center"><WavesLadder className="mr-2" /> Pool</p>
                        <p className="flex items-center"><ShieldCheck className="mr-2" /> Security</p> */}
                            {
                                property.amenities?.map(amenity => (<p className="flex items-center">{amenity == "Parking" ? <CarFront className="mr-2" /> : amenity == "Pool" ? <WavesLadder className="mr-2" /> : amenity == "Security" ? <ShieldCheck className="mr-2" /> : amenity == "Wifi" ? <WifiHigh className="mr-2" /> : amenity == "Generator" ? <Cable className="mr-2" /> : amenity == "Air Conditioning" ? <Snowflake className="mr-2" /> : amenity == "Gym" ? <Dumbbell className="mr-2" /> : ""} {amenity}</p>))
                            }
                        </div>
                    </div>

                    {/* Right card section */}
                    <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-md p-6 mb-20">
                        <h4 className="text-xl md:text-2xl font-bold text-black">₵{property.monthlyPrice}/month</h4>
                        <p className="text-[#7F8C8D] text-sm mt-1">{property.leaseTerm}</p>

                        {/* Owner info */}
                        <p className="text-lg mt-5 font-medium">Property Owner</p>
                        <div className="flex items-center gap-4 mt-3">
                            <User className="rounded-full border-2 bg-black stroke-white size-14 p-2" />
                            <div>
                                <p className="text-base font-medium">{property.landlordFullname}</p>
                                <p className="text-sm text-[#7F8C8D]">Landlord</p>
                                <p className="flex items-center text-sm text-[#7F8C8D]"><Star className="size-4 mr-1" /> 4.8 (24 Reviews)</p>
                            </div>
                        </div>

                        {/* <Link to="/owner-dashboard"> */}
                        <button onClick={ownerNavigationHandler}
                            className="w-full mt-3 flex items-center justify-center bg-[#2980B9] text-white py-2 rounded-lg hover:bg-[#1F618D] transition font-medium text-lg md:px-6 md:text-sm md:w-60">
                            <MessageSquare className="mr-2" /> Contact Property Owner
                        </button>
                        {/* </Link> */}


                        {/* Safety tips */}
                        <div className="mt-6 border-t pt-4 text-sm text-[#7F8C8D]">
                            <p className="font-medium text-black mb-2">Safety Tips</p>
                            <ul className="list-disc ml-5 space-y-1">
                                <li>Meet at public places</li>
                                <li>Verify property ownership</li>
                                <li>Never send money in advance</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}
