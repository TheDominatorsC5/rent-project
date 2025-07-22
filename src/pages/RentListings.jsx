import RentListingCard from "../components/RentListingCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSWR from "swr"
import { apiFetcher } from "../api/client";
import SearchFilterBar from "../components/SearchFilterBar";

export default function RentListing() {
    const { data, IsLoading, error } = useSWR(`/api/rent/property/all`, apiFetcher);

    return (
        <>
            <Navbar />

            <div className="w-[90%] my-10 mx-auto">

                <h1 className="font-medium text-4xl">Rental Listings</h1>
                <p className="text-xl font-semibold mt-4">Find your perfect rental property</p>

                <SearchFilterBar />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p gap-8 justify-between w-full mx-auto">
                    {data?.map(property => <RentListingCard key={property.id} property={property} />)}
                </div>

            </div>


            <div className="my-16 flex flex-row items-center justify-center">
                <button className="rounded-full border-zinc-300 border-1 py-2 px-5 text-zinc-800 hover:border-black cursor-pointer">Load more
                </button>
            </div>

            <Footer />

        </>
    );
}