import React from "react";
import { useAdminData } from "../../context/AdminDataContext";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";


export default function AllListings() {
  const { listings } = useAdminData();

    return (
        <>
        <DetailBar />
        <div className="flex">
            <Aside />
            <div className="p-6 flex-1">
                <h2 className="text-2xl font-semibold mb-4">
                    All Listings ({listings?.length ?? 0})
                </h2>
                {listings?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map((listing) => (
                            <div
                                key={listing.id}
                                className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-bold text-gray-800">
                                    {listing.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-semibold">Price:</span> GHS {listing.price}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    <span className="font-semibold">Location:</span> {listing.location}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-semibold">Owner:</span> {listing.owner}
                                </p>
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
