import React from "react";
import { useEffect, useState } from "react";

import { useAdminData } from "../../context/AdminDataContext";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";
import useSWR from "swr";
import { apiClient, apiFetcher } from "../../api/client";
import { useNavigate } from "react-router";

export default function AllListings() {
    const { data, isLoading, error } = useSWR("/api/rent/property/all", apiFetcher);
    console.log('data:', data)

    const navigate = useNavigate();

    function viewListing(listing) {
        navigate('/admin/all/review', { state: { data: listing } })
    }

    //   const [listings, setListings] = useState([])
    //   useEffect(() => {
    //     apiClient.get('/api/rent/property/all')
    //     .then((res) => {
    //         setListings(res.data);
    //         console.log('res', res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //   }, []);

    return (
        <>
            <DetailBar />
            <div className="flex">
                <Aside />
                <div className="p-6 flex-1">
                    <h2 className="text-2xl font-semibold mb-4">
                        All Listings
                    </h2>
                    {/* {
                    listings.map((listing) => (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <p>123456789</p>
                        </div>
                    ))
                } */}
                    {data?.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data?.map((listing) => (
                                <div
                                    key={listing.id}
                                    className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition flex justify-between"
                                >
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {listing.propertyTitle}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <span className="font-semibold">Type:</span> {listing.propertyType}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <span className="font-semibold">Price:</span> GHS {listing.monthlyPrice}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <span className="font-semibold">Location:</span> {listing.streetAddress}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-semibold">Status:</span> {listing.status}
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <img
                                            src={listing.images[0] || "/placeholder.jpg"}
                                            alt="Apartment thumbnail"
                                            className="w-20 h-20 object-cover rounded"
                                        />

                                        <button onClick={() => {viewListing(listing)}} className="text-sm text-white text text-center bg-[#2980B9] hover:bg-[#1F618D] px-3 py-1 rounded flex gap-2 items-center mx-2">View</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No listings available.</p>
                    )}
                </div>
            </div>
        </>
    );
}
