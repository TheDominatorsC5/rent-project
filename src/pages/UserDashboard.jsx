import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCard from "../components/Dashboards/SummaryCard";
import { HeartIcon, EyeIcon, SearchIcon, Forward, TrashIcon, User } from "lucide-react";

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
                        <h2 className="text-2xl font-bold">User Dashboard</h2>
                        <p className="text-gray-600">
                            Welcome back <span className="font-medium">User Name</span>! Here's what's happening with your saved listings.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-xl text-gray-500"><User /></span>
                        <p>User Name</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <SummaryCard title="Saved Listings" count={savedListings.length} icon={<HeartIcon className="text-red-500 bg-gray-200 p-1 rounded-sm size-8 border-2 border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                    <SummaryCard title="Recent Views" count={12} icon={<EyeIcon className="text-blue-500 bg-gray-200 p-1 rounded-sm size-8 border-2 border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                    <SummaryCard title="Active Searches" count={3} icon={<SearchIcon className="text-green-500 bg-gray-200 p-1 rounded-sm size-8 border-2 border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                </div>

                <div className="md:flex gap-6">
                    <div className="bg-white border rounded shadow-sm md:w-2/3 mb-6 h-full border-[#7F8C8D]">
                        <div className="flex justify-between items-center p-4 border-b border-[#7F8C8D]">
                            <h3 className="font-semibold">Saved Listings</h3>
                            <a href="#" className="text-sm font-medium text-[#2980B9] hover:underline hover:text-[#1F618D]">View All</a>
                        </div>

                        <div className="divide-y">
                            {savedListings.map((listing) => (
                                <div key={listing.id} className="flex items-start p-4 gap-4 border-[#7F8C8D]">
                                    <img
                                        src={listing.image || "/placeholder.jpg"}
                                        alt="Apartment thumbnail"
                                        className="w-20 h-20 object-cover rounded bg-gray-200"
                                    />
                                    <div className="flex-1">
                                        <h4 className="font-semibold">{listing.title}</h4>
                                        <p className="text-sm text-gray-500">{listing.location}</p>
                                        <p className="text-sm">{listing.rooms} bed • {listing.bath} bath • <span className="font-bold">${listing.price}/month</span></p>
                                    </div>
                                    <div className="flex gap-2 text-xl">
                                        <a href={`/listings/${listing.id}`}>{<HeartIcon className="text-gray-500 bg-gray-50 p-1 rounded-sm size-8 border-1 border-[#7F8C8D]" />}</a>
                                        <button onClick={() => handleRemove(listing.id)}>{<TrashIcon className="text-gray-500 hover:text-[#E74C3C] hover:border-[#E74C3C] bg-gray-100 p-1 rounded-sm size-8 border-2 border-[#7F8C8D]" />}</button>
                                        <a href={`/listings/${listing.id}`}>{<Forward className="text-gray-500 hover:text-[#2980B9] bg-gray-100 p-1 rounded-sm size-8 border-2 border-[#7F8C8D] hover:border-[#2980B9]" />}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="bg-white border rounded shadow-sm p-4 space-y-4 mb-6">
                            <h3 className="font-semibold">Search Alerts</h3>
                            <hr />
                            {searchAlerts.map((alert) => (
                                <div key={alert.id} className="space-y-1">
                                    <div className="flex justify-between items-end border px-2 py-3 rounded">
                                        <span>
                                            <p className="font-medium">{alert.keyword}</p>
                                            <p className="text-sm text-gray-500">{alert.priceRange} • {alert.bedrooms}+ bedrooms</p>
                                            <p className="text-sm text-green-600">{alert.newMatches} new matches</p>
                                        </span>
                                        <span>
                                            {/* <img
                                        src={"/placeholder.jpg"}
                                        alt="Apartment thumbnail"
                                        className="w-20 h-20 object-cover rounded bg-gray-200"
                                    /> */}
                                            <Forward className="text-gray-500 hover:text-[#2980B9] bg-gray-100 p-1 rounded-sm size-8 border-2 border-[#7F8C8D] hover:border-[#2980B9]" />
                                        </span>
                                    </div>
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
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
