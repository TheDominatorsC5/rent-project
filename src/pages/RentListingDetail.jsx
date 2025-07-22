import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    MapPin, CarFront, WavesLadder, ShieldCheck, Phone, MessageSquare,
    Star, UserRound, Check, Images, Heart, Flag,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ make sure it's from react-router-dom
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";

export default function RentListingDetails() {
    const location = useLocation();
    const property = location.state.property;

    const navigate = useNavigate();
    const navigationHandler = () => {
        navigate("/listing-gallery", { state: { images: property.images } }

        );
    }

    return (
        <>
            <Navbar />

            <div className="w-[90%] max-w-[1200px] mx-auto my-6 font-[outfit]">
                {/* Breadcrumb */}
                <p className="text-sm sm:text-base md:text-xl font-semibold">
                    <span className="text-[#7F8C8D]">Home &gt; Listings &gt; </span> Modern 2BR Apartment
                </p>

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
                            <button onClick={navigationHandler}>
                                <Heart className="border border-zinc-300 fill-zinc-200 bg-white size-10 rounded-xl p-2 hover:fill-red-600 stroke-0" />
                            </button>
                            <button onClick={navigationHandler}>
                                <Flag className="border border-zinc-300 fill-zinc-200 bg-white size-10 rounded-xl p-2 hover:fill-red-600 stroke-zinc-300 hover:stroke-red-600" />
                            </button>
                            
                        </div>

                    </div>

                    {/* Location & verification */}
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-[#7F8C8D] font-medium">
                        <p className="flex items-center"><MapPin className="mr-1" />{property.city}</p>
                        <p className="flex items-center bg-[#27AE60] text-white px-3 py-1 rounded-full text-sm">
                            <Check className="mr-1" /> Verified
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
                            property.amenities.map(amenity => (<p className="flex items-center"><WavesLadder className="mr-2" /> {amenity[0]}</p>))
                        }
                    </div>
                </div>

                {/* Right card section */}
                <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-md p-6 mb-20">
                    <h4 className="text-xl md:text-2xl font-bold text-black">₵{property.monthlyPrice}/month</h4>
                    <p className="text-[#7F8C8D] text-sm mt-1">Starting from 6 months</p>

                    {/* Owner info */}
                    <p className="text-lg mt-5 font-medium">Property Owner</p>
                    <div className="flex items-center gap-4 mt-3">
                        <UserRound className="rounded-full border-2 border-zinc-300 size-14 p-2" />
                        <div>
                            <p className="text-base font-medium">{property.landlordFullname}</p>
                            <p className="text-sm text-[#7F8C8D]">Landlord</p>
                            <p className="flex items-center text-sm text-[#7F8C8D]"><Star className="size-4 mr-1" /> 4.8 (24 Reviews)</p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <button className="w-full mt-3 flex items-center justify-center bg-[#2980B9] text-white py-2 rounded-lg hover:bg-[#1F618D] transition">
                        <MessageSquare className="mr-2" /> Send Message
                    </button>

                    <Link to="/owner-dashboard">
                        <button className="w-full mt-3 flex items-center justify-center bg-[#27AE60] text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold text-lg">
                            <Phone className="mr-2" /> Call Now
                        </button>
                    </Link>

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

            <Footer />
        </>
    );
}
