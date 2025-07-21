import RentListingCard from "../components/RentListingCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";

export default function RentListing() {

    return (
        <>
            <Navbar />
            <div className="w-[90%] my-10 mx-auto">
                <h1 className="font-medium text-4xl">Rental Listings</h1>
                <p className="text-xl font-semibold mt-4">Find your perfect rental property</p>

                <div className="overflow-hidden w-full rounded-xl border-[#a7b3b4] border-1 shadow-sm bg-white mt-10 p-4">
                    <form action="" className="flex flex-row justify-around">

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="location">Location</label>
                            <input type="text" 
                            name="location" 
                            id="location" 
                            placeholder="Enter city or area" 
                            className="py-1 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="price">Price Range</label>
                            <select name="price" id="price"
                                className="py-1 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">Any Price</option>
                                <option value="price">Ghc500-Ghc1000</option>
                                <option value="price">Ghc1000-Ghc2000</option>
                                <option value="price">Ghc2000-Ghc3000</option>
                                <option value="price">Ghc3000+</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="type">Room Type</label>
                            <select name="type" id="type"
                                className="py-1 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">Any Type</option>
                                <option value="studio">Studio</option>
                                <option value="1 bedroom">1 Bedroom</option>
                                <option value="2 bedroom">2 Bedroom</option>
                                <option value="3 bedroom">3+ Bedroom</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="type">Listing Type</label>
                            <select name="type" id="type"
                                className="py-1 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">All Listings</option>
                                <option value="">Direct from Landlord</option>
                                <option value="">Verified only</option>
                                <option value="all">All</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <button
                                className="flex items-center justify-center bg-black font-medium text-white py-2 mt-7 rounded-lg text-medium cursor-pointer hover:bg-zinc-600 shadow-md">
                                <Search className="mr-2" /> Search
                            </button>
                        </div>

                    </form>
                </div>


                <div className="flex flex-row justify-between mt-10">
                    <p className="text-lg font-medium">Showing 1-12</p>

                    <form action="">
                        <div className="flex flex-row">
                            <label className="font-medium mt-1" htmlFor="sort by">Sort By:</label>
                            <select name="sor by" id="sort"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-lg font-normal rounded-lg ml-4">
                                <option value="">Low to High</option>
                                <option value="">High to Low</option>
                                <option value="">Newest First</option>
                                <option value="">Most Relevant</option>
                            </select>
                        </div>
                    </form>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p gap-8 justify-between w-full mx-auto">
                    {[1, 2, 3, 4, 5, 6,].map(n => <RentListingCard key={n} />)}
                </div>

            </div>

            <div className="h-[20vh]"></div>

            <Footer />

        </>
    );
}