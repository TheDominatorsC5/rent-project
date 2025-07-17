// import useSWR from "swr";
// import axios from "axios";
import { useState } from "react";

// SWR fetcher
// const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function UserDashboard() {
    //   const { data: savedListings = [] } = useSWR("/api/saved-listings", fetcher);
    //   const { data: searchAlerts = [] } = useSWR("/api/search-alerts", fetcher);
    //   const { data: recentActivities = [] } = useSWR("/api/recent-activity", fetcher);

    // Temporary fallback mock data
    const [savedListings, setSavedListings] = useState([

        { id: 1, title: "Mock Apartment", price: 2500 },
        { id: 2, title: "Luxury Studio", price: 1800 },
    ]);

    const handleRemove = (id) => {
        const updatedListings = savedListings.filter((listing) => listing.id !== id);
        setSavedListings(updatedListings);
    };


    const searchAlerts = [
        { query: "Downtown Apartments", matches: 3 },
    ];

    const recentActivities = [
        { activity: "Saved new listings", time: "3 hours ago" },
    ];

    return (
        <>
            <div>
                <p>Mefie</p>
                <p>Saved Listings</p>
                <span>👤</span>
                <p>User Name</p>
            </div>

            <p>Dashboard</p>
            <p>
                Welcome back <span>User Name</span>! Here's what's happening with your
                saved listings.
            </p>

            {/* Saved Listings Count */}
            <div className="flex">
                <span>
                    <p>Saved listings</p>
                    <p>{savedListings.length}</p>
                </span>
                <span>❤️</span>
            </div>

            {/* Saved Listings Table */}
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Saved Listings</th>
                        <th>View All</th>
                    </tr>
                </thead>

                <tbody>
                    {savedListings.map((listing) => (
                        <tr key={listing.id}>
                            <td>
                                <div className="flex items-start gap-4">
                                    <img
                                        src={listing.image || "/placeholder.jpg"}
                                        alt="Apartment thumbnail"
                                        className="w-20 h-20 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{listing.title}</h4>
                                        <p>{listing.location}</p>
                                        <p>
                                            {listing.rooms} bed • {listing.bath} bath{" "}
                                            <span className="font-bold">${listing.price}/month</span>
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="text-right">
                                <span className="flex justify-end gap-2">
                                    <a href={`/listings/${listing.id}`}>❤️</a>
                                    <button onClick={() => handleRemove(listing.id)}><a href="">🗑️</a></button>
                                    <a href={`/listings/${listing.id}`}>⏩</a>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Search Alert Section */}
            <div>
                <p>Search alert</p>
                <hr />
                {searchAlerts.slice(0, 2).map((alert) => (
                    <span key={alert.id}>
                        <p>{alert.keyword}</p>
                        <p>
                            {alert.priceRange} • {alert.bedrooms}+ bedrooms
                        </p>
                        <p>{alert.newMatches} new matches</p>
                    </span>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div>
                <p>Recent Activity</p>
                <hr />
                {recentActivities.map((activity) => (
                    <span key={activity.id}>
                        <p>{activity.message}</p>
                        <p>{activity.timeAgo}</p>
                    </span>
                ))}
            </div>
        </>
    );
}
