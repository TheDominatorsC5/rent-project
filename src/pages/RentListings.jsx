import RentListingCard from "../components/RentListingCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSWR from "swr"
import { apiFetcher } from "../api/client";
import SearchFilterBar from "../components/SearchFilterBar";
import { useEffect, useState } from "react";
import { LiaChevronUpSolid } from "react-icons/lia";

export default function RentListing() {
    const { data, IsLoading, error } = useSWR(`/api/rent/property/all`, apiFetcher);

    const [displayData, setDisplayData] = useState([]);
    const [isShowMore, setShowMore] = useState([]);
    const [totalDisplay, setTotalDisplay] = useState(0);

    useEffect(() => {
        let dataArr = []
        let limit = 12;
        let count = 0;

        if (data?.length < 12) {
            limit = data.length;
        }
        for (let i=0; i<limit; i++) {
            dataArr.push(data[i]);
            count++;
        }

        setTotalDisplay(count);
        setDisplayData(dataArr);
    }, [IsLoading]);

    const loadMore = () => {
        if (totalDisplay < data.length) {
            
            let dataArr = [];
            let count = 0;
            let endIndex = totalDisplay + 12;
            console.log('end index:', endIndex)

            for (let i=0; i < endIndex; i++) {
                dataArr.push(data[i]);
                count++;

                if (count >= data.length) {
                    break;
                }
            }

            setTotalDisplay(count);
            setDisplayData(dataArr);
            // console.log(dataArr)
        }
    }

    return (
        <>
            <Navbar />

            <div className="w-[90%] my-10 mx-auto">

                <h1 className="font-medium text-4xl">Rental Listings</h1>
                <p className="text-xl font-semibold mt-4">Find your perfect rental property</p>

                <SearchFilterBar displayData={data} setDisplayData={setDisplayData} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p gap-8 justify-between w-full mx-auto">
                    {displayData?.map(property => <RentListingCard key={property.id} property={property} />)}
                </div>

            </div>


            <div className="my-16 flex flex-row items-center justify-center">
                <button onClick={loadMore} className="rounded-full border-zinc-300 border-1 py-2 px-5 text-zinc-800 hover:border-black cursor-pointer">Load more
                </button>
            </div>

            <Footer />

        </>
    );
}