import RentListingCard from "../components/RentListingCard";
import { Search } from "lucide-react";

export default function RentListing() {

    return (
        <>
            <div className="w-[94%] my-10 mx-auto">
                <h1 className="font-medium text-4xl">Rental Listings</h1>
                <p className="text-xl font-semibold mt-4">Find your perfect rental property</p>

                <div className="overflow-hidden w-full rounded-xl border-[#a7b3b4] border-1 shadow-sm bg-white mt-10 p-6">
                    <form action="" className="flex flex-row justify-around">
                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium">Location</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter city or area"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-[#7F8C8D] text-lg font-semibold rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium">Price Range</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Any Price"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-[#7F8C8D] text-lg font-semibold rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium">Room Type</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Any Room"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-black text-lg font-semibold rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="" className="font-medium">Listing Type</label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="All Listings"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-black text-lg font-semibold rounded-lg mt-2" />
                        </div>

                        <div className="flex flex-col">
                            {/* <Search /> */}
                            <button
                                type="submit"
                                className="bg-black text-white text-lg py-1 px-4 w-45 mt-8 rounded-lg font-semibold"
                            >Search</button>
                        </div>

                    </form>
                </div>


                <div className="flex flex-row justify-between mt-10">
                    <p className="text-lg font-medium">Showing 1-12</p>
                    <form action="">
                        <label htmlFor="" className="font-medium">Sort By:</label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Price: Low-High"
                            className="w-45 py-1 px-4 border-[#7F8C8D] border text-black text-lg font-semibold rounded-lg ml-4" />
                    </form>

                </div>

            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p gap-8 justify-between w-full mx-auto">
                    {[1, 2, 3, 4, 5, 6,].map(n => <RentListingCard key={n} />)}
                </div>

            </div>

        </>
    );
}