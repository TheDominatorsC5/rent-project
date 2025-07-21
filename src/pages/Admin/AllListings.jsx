import React from "react";
import { useEffect, useState } from "react";

import { useAdminData } from "../../context/AdminDataContext";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";
import useSWR from "swr";
import { apiClient } from "../../api/client";


export default function AllListings() {
//   const {data, isLoading, error} = useSWR("/api/rent/property/all" ,apiClient);
//   console.log('data:', data)

  const [listings, setListings] = useState([])
  useEffect(() => {
    apiClient.get('/api/rent/property/all')
    .then((res) => {
        setListings(res.data);
        console.log('res', res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }, []);

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
                {listings.length>0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map((listing) => (
                            <div
                                key={listing.id}
                                className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition flex justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {listing.propertyTitle}
                                    </h3>
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
                                <img
                                    src={listing.images[0] || "/placeholder.jpg"}
                                    alt="Apartment thumbnail"
                                    className="w-20 h-20 object-cover rounded"
                                />
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
