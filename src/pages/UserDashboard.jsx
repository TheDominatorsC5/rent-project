// // import useSWR from "swr";
// // import axios from "axios";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // SWR fetcher
// // const fetcher = (url) => axios.get(url).then((res) => res.data);

// export default function UserDashboard() {
//     //   const { data: savedListings = [] } = useSWR("/api/saved-listings", fetcher);
//     //   const { data: searchAlerts = [] } = useSWR("/api/search-alerts", fetcher);
//     //   const { data: recentActivities = [] } = useSWR("/api/recent-activity", fetcher);

//     // Temporary fallback mock data
//     const [savedListings, setSavedListings] = useState([

//         { id: 1, title: "Mock Apartment", price: 2500 },
//         { id: 2, title: "Luxury Studio", price: 1800 },
//     ]);

//     const handleRemove = (id) => {
//         const updatedListings = savedListings.filter((listing) => listing.id !== id);
//         setSavedListings(updatedListings);
//     };


//     const searchAlerts = [
//         { query: "Downtown Apartments", matches: 3 },
//     ];

//     const recentActivities = [
//         { activity: "Saved new listings", time: "3 hours ago" },
//     ];

//     return (
//         <>
//         <Navbar />
//             <div>
//                 <p>Mefie</p>
//                 <p>Saved Listings</p>
//                 <span>👤</span>
//                 <p>User Name</p>
//             </div>

//             <p>Dashboard</p>
//             <p>
//                 Welcome back <span>User Name</span>! Here's what's happening with your
//                 saved listings.
//             </p>

//             {/* Saved Listings Count */}
//             <div className="flex">
//                 <span>
//                     <p>Saved listings</p>
//                     <p>{savedListings.length}</p>
//                 </span>
//                 <span>❤️</span>
//             </div>

//             {/* Saved Listings Table */}
//             <table className="w-full">
//                 <thead>
//                     <tr>
//                         <th>Saved Listings</th>
//                         <th>View All</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {savedListings.map((listing) => (
//                         <tr key={listing.id}>
//                             <td>
//                                 <div className="flex items-start gap-4">
//                                     <img
//                                         src={listing.image || "/placeholder.jpg"}
//                                         alt="Apartment thumbnail"
//                                         className="w-20 h-20 object-cover"
//                                     />
//                                     <div>
//                                         <h4 className="font-semibold">{listing.title}</h4>
//                                         <p>{listing.location}</p>
//                                         <p>
//                                             {listing.rooms} bed • {listing.bath} bath{" "}
//                                             <span className="font-bold">${listing.price}/month</span>
//                                         </p>
//                                     </div>
//                                 </div>
//                             </td>
//                             <td className="text-right">
//                                 <span className="flex justify-end gap-2">
//                                     <a href={`/listings/${listing.id}`}>❤️</a>
//                                     <button onClick={() => handleRemove(listing.id)}><a href="">🗑️</a></button>
//                                     <a href={`/listings/${listing.id}`}>⏩</a>
//                                 </span>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Search Alert Section */}
//             <div>
//                 <p>Search alert</p>
//                 <hr />
//                 {searchAlerts.slice(0, 2).map((alert) => (
//                     <span key={alert.id}>
//                         <p>{alert.keyword}</p>
//                         <p>
//                             {alert.priceRange} • {alert.bedrooms}+ bedrooms
//                         </p>
//                         <p>{alert.newMatches} new matches</p>
//                     </span>
//                 ))}
//             </div>

//             {/* Recent Activity Section */}
//             <div>
//                 <p>Recent Activity</p>
//                 <hr />
//                 {recentActivities.map((activity) => (
//                     <span key={activity.id}>
//                         <p>{activity.message}</p>
//                         <p>{activity.timeAgo}</p>
//                     </span>
//                 ))}
//             </div>
//             <Footer />
//         </>
//     );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCard from "../components/Dashboards/SummaryCard";
import { HeartIcon, EyeIcon, SearchIcon } from "lucide-react";

export default function UserDashboard() {
    const [savedListings, setSavedListings] = useState([
        { id: 1, title: "Mock Apartment", location: "123 Main Street", rooms: 2, bath: 2, price: 2500 },
        { id: 2, title: "Luxury Studio", location: "456 Oak Avenue", rooms: 1, bath: 1, price: 1800 },
    ]);

    const handleRemove = (id) => {
        const updatedListings = savedListings.filter((listing) => listing.id !== id);
        setSavedListings(updatedListings);
    };

    const searchAlerts = [
        { id: 1, keyword: "Downtown Apartments", priceRange: "$2000 - $3000", bedrooms: 2, newMatches: 3 },
    ];

    const recentActivities = [
        { id: 1, message: "Saved new listing", timeAgo: "3 hours ago" },
    ];

    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto p-4 space-y-6">

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Mefie</p>
                        <h2 className="text-2xl font-bold">Saved Listings</h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xl">👤</span>
                        <p>User Name</p>
                    </div>
                </div>

                <div>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <p className="text-gray-600">
                        Welcome back <span className="font-medium">User Name</span>! Here's what's happening with your saved listings.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <SummaryCard title="Saved Listings" count={savedListings.length} icon={<HeartIcon className="text-red-500" />} />
                    <SummaryCard title="Recent Views" count={12} icon={<EyeIcon className="text-blue-500" />} />
                    <SummaryCard title="Active Searches" count={3} icon={<SearchIcon className="text-green-500" />} />
                </div>

                <div className="bg-white border rounded shadow-sm">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-semibold">Saved Listings</h3>
                        <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
                    </div>
                    <div className="divide-y">
                        {savedListings.map((listing) => (
                            <div key={listing.id} className="flex items-start p-4 gap-4">
                                <img
                                    src={listing.image || "/placeholder.jpg"}
                                    alt="Apartment thumbnail"
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                    <h4 className="font-semibold">{listing.title}</h4>
                                    <p className="text-sm text-gray-500">{listing.location}</p>
                                    <p className="text-sm">{listing.rooms} bed • {listing.bath} bath • <span className="font-bold">${listing.price}/month</span></p>
                                </div>
                                <div className="flex gap-2 text-xl">
                                    <a href={`/listings/${listing.id}`}>❤️</a>
                                    <button onClick={() => handleRemove(listing.id)}>🗑️</button>
                                    <a href={`/listings/${listing.id}`}>⏩</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border rounded shadow-sm p-4 space-y-4">
                    <h3 className="font-semibold">Search Alerts</h3>
                    <hr />
                    {searchAlerts.map((alert) => (
                        <div key={alert.id} className="space-y-1">
                            <p className="font-medium">{alert.keyword}</p>
                            <p className="text-sm text-gray-500">{alert.priceRange} • {alert.bedrooms}+ bedrooms</p>
                            <p className="text-sm text-green-600">{alert.newMatches} new matches</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white border rounded shadow-sm p-4 space-y-4">
                    <h3 className="font-semibold">Recent Activity</h3>
                    <hr />
                    {recentActivities.map((activity) => (
                        <div key={activity.id} className="space-y-1">
                            <p>{activity.message}</p>
                            <p className="text-sm text-gray-500">{activity.timeAgo}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
