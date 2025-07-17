import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, CarFront, WavesLadder, ShieldCheck, Phone, MessageSquare, MessageCircle, Star, UserRound, Check }
    from "lucide-react";

export default function RentListingDetails() {

    return (
        <>
            <Navbar />
            <div className="w-[90%] h-full my-10 mx-auto">
                <p className="text-xl font-semibold">
                    <span className="text-[#7F8C8D]">Home {">"} Listings {">"}</span> Modern 2BR Apartment</p>

                <div className="grid grid-cols-4 gap-4 my-10 overflow-hidden">
                    {/* <img src="../images/gallery7.jpg" alt="cupcake pic"
                    className="w-full rounded hover:shadow-lg transition-transform duration-300 hover:scale-110" /> */}
                    <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Apple music"
                        className="group relative row-span-2 col-span-2 object-cover rounded transition-transform duration-400 hover:scale-103 cursor-pointer w-full h-[68vh]" />
                    <img src="https://plus.unsplash.com/premium_photo-1744839107720-281b527a37d9?q=80&w=887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="rgb pic"
                        className="w-full h-49 object-cover rounded transition-transform duration-500 cursor-pointer hover:scale-105" />
                    <img src="https://plus.unsplash.com/premium_photo-1675537843194-46ab6529d46b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="locs"
                        className="w-full object-cover rounded transition-transform duration-500 cursor-pointer hover:scale-105" />
                    <img src="https://plus.unsplash.com/premium_photo-1675537856764-a557a0a7b313?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="red baby"
                        className="w-full h-49 rounded object-cover transition-transform duration-500  cursor-pointer hover:scale-105" />
                    <img src="https://plus.unsplash.com/premium_photo-1676968003264-075aae167539?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="red baby"
                        className="w-full rounded object-cover transition-transform duration-500 cursor-pointer hover:scale-105" />
                </div>

            </div>

            <div className="flex flex-row justify-evenly gap-4">
                <div className="h-full w-[55%] mx-auto mb-20">
                    <h1 className="text-4xl font-semibold">Modern 2BR Apartment in <br />Tse Addo</h1>

                    <div className="flex mt-2 text-[#7F8C8D] font-semibold gap-6">
                        <p className="flex flex-row items-center justify-center">
                            <MapPin className="mr-2" /> Tse Addo, Accra </p>
                        <p className="flex flex-row items-center justify-center rounded-full bg-[#27AE60] py-1 px-3 text-white">
                            <Check className="mr-1 p-1" />Verified</p>
                    </div>
                    <div className="flex flex-row justify-around w-full bg-zinc-100 font-semibold rounded-lg py-4 px-10 my-6">
                        <p className="text-center"><span className="text-3xl">2</span><br />Bedrooms</p>
                        <p className="text-center"><span className="text-3xl">2</span><br />Bathrooms</p>
                        <p className="text-center"><span className="text-3xl">850</span><br />Sq ft</p>
                    </div>

                    <h2 className="text-lg md:text-xl font-semibold mt-10">Description</h2>
                    <p className="text-sm md:text-lg text-[#7F8C8D] font-medium mt-4">Beautiful modern apartment located in the heart of downtown Lagos. This spacious 2-bedroom, 2-bathroom unit features high-end finishes, floor-to-ceiling windows, and stunning city views. The open-concept living area is perfect for entertaining, while the master suite offers a private retreat with an en-suite bathroom.</p>

                    <h3 className="text-lg md:text-xl font-semibold mt-10">Amenities</h3>
                    <div className="flex text-lg mt-4 text-[#7F8C8D] font-medium gap-15 mb-10">
                        <p className="flex flex-row items-center justify-center">
                            <CarFront className="mr-2" /> Parking
                        </p>
                        <p className="flex flex-row items-center justify-center">
                            <WavesLadder className="mr-2" /> Pool
                        </p>
                        <p className="flex flex-row items-center justify-center">
                            <ShieldCheck className="mr-2" /> Security
                        </p>
                    </div>

                </div>

                <div className="rounded-lg shadow-lg bg-white h-[75vh] w-[25%] mx-auto py-6 px-8">
                    <h4 className="text-xl md:text-3xl font-medium text-black"> Ghc1,500/month </h4>
                    <p className="text-lg text-[#7F8C8D] font-medium">starting from 6 months</p>
                    <p className="text-lg mt-5 font-medium">Property Owner</p>

                    <div>
                        <div className="flex flex-row items-center gap-5 ">
                            <UserRound className="rounded-full bg-zinc-100 stroke-1 stroke-white size-16 mt-4" />
                            <span className="flex flex-col">
                                <p className="text-lg pt-2 font-medium">Mr. Phillips</p>
                                <p className="text-sm text-[#7F8C8D] font-medium">Landlord</p>
                                <p className="flex flex-row text-sm text-[#7F8C8D] font-medium">
                                    <Star className="size-5 mr-1" /> 4.8 (24 Reviews) </p>
                            </span>

                        </div>

                        <button
                            className="flex items-center justify-center bg-black font-medium text-white px-7 py-3 mt-7 rounded-lg text-lg cursor-pointer hover:bg-zinc-600">
                            <MessageCircle className="mr-2 p-0.5" /> Contact via WhatsApp
                        </button>
                        <button
                            className="flex items-center justify-center border-zinc-300 border-1 bg-white font-medium text-black px-15 py-3 mt-3 rounded-lg text-lg cursor-pointer hover:bg-zinc-100">
                            <MessageSquare className="mr-2" /> Send Message
                        </button>
                        <button
                            className="flex items-center justify-center border-zinc-300 border-1 bg-white font-medium text-black px-20.5 py-3 mt-3 rounded-lg text-lg cursor-pointer hover:bg-zinc-100">
                            <Phone className="mr-2" /> Call Now
                        </button>

                        <div className="rounded-lg border-zinc-300 border-1 shadow-lg bg-white h-37 w-full pl-8 my-16">
                            <p className="text-lg font-medium pt-4">Safety tips</p>
                            <p className="text-sm font-medium pt-1">* Meet at public places</p>
                            <p className="text-sm font-medium pt-1">* Verify property ownership</p>
                            <p className="text-sm font-medium pt-1">* Never send money in advance</p>

                        </div>

                    </div>
                </div>

            </div>


            <Footer />
        </>
    );
}