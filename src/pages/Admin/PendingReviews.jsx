// import React from "react";
// import { useAdminData } from "../../context/AdminDataContext";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";
import { useEffect, useState } from "react";
import { apiClient } from "../../api/client";
import { useNavigate } from "react-router";

export default function PendingReviews() {
    const navigate = useNavigate()

    const [listings, setListings] = useState([])
    useEffect(() => {
        apiClient.get('/api/rent/property/all')
            .then((res) => {
                setListings(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    function viewListing(listing) {
        navigate('/admin/review', { state: { data: listing } })
    }

    return (
        <>
            <DetailBar />
            <div className="flex">
                <Aside />

                <div className="p-6 flex-1">
                    <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
                    {listings.length === 0 ? (
                        <p>No pending listings.</p>
                    ) : (
                        <ul className="space-y-4 ">
                            {listings.map((listing) => (
                                <li style={{ display: listing.status == 'pending' ? 'flex' : 'none' }} key={listing.id} className="border p-4 rounded shadow flex justify-between items-baseline-last">
                                    
                                    <div className="md:flex gap-12 w-3/4">
                                    <img
                                        src={listing.images[0] || "/placeholder.jpg"}
                                        alt="Apartment thumbnail"
                                        className="w-20 h-20 object-cover rounded bg-gray-200"
                                    />
                                        <div>
                                            <h3 className="font-bold">{listing.propertyTitle}</h3>
                                            <p>{listing.description}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => { viewListing(listing) }} className="text-sm text-white bg-[#2980B9] hover:bg-[#1F618D] px-3 py-1 rounded flex gap-2 items-center">Review</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
