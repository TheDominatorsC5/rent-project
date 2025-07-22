import { Search } from "lucide-react";

export default function SearchFilterBar() {
    return (
        <div>
            <div className="overflow-hidden w-full rounded-xl border-[#a7b3b4] border-1 shadow-sm bg-white mt-10 p-4">
                    <form
                        className="flex flex-row justify-around">

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="location">Location</label>
                            <input type="text"
                                name="location"
                                id="location"
                                placeholder="Enter city or area"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="price">Price Range</label>
                            <select name="price" id="price"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">Any Price</option>
                                <option value="price">Ghc500-Ghc1000</option>
                                <option value="price">Ghc1000-Ghc2000</option>
                                <option value="price">Ghc2000-Ghc3000</option>
                                <option value="price">Ghc3000+</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="roomType">Room Type</label>
                            <select name="roomType" id="roomType"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">Any Type</option>
                                <option value="studio">Studio</option>
                                <option value="1 bedroom">1 Bedroom</option>
                                <option value="2 bedroom">2 Bedroom</option>
                                <option value="3 bedroom">3+ Bedroom</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-[15%]">
                            <label className="" htmlFor="listingType">Listing Type</label>
                            <select name="listingType" id="listingType"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2">
                                <option selected disabled className="text-[#7F8C8D]">All Listings</option>
                                <option value="direct">Direct from Landlord</option>
                                <option value="verified">Verified only</option>
                                <option value="all">All</option>
                            </select>
                        </div>

                        <div className="flex flex-col items-end w-[15%]">
                            <button
                                type="submit"
                                className="flex items-center justify-center bg-black font-medium text-white py-2 px-6 mt-7 rounded-lg text-medium cursor-pointer hover:bg-zinc-600 shadow-md">
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
        </div>
    );
}