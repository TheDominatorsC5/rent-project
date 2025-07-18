import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCard from "../components/Dashboards/SummaryCard";
import { CheckCircle, FileText, Eye, MessageCircle, Plus } from "lucide-react";

export default function OwnerDashboard() {
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "Modern Downtown Apartment",
            address: "123 Main Street, Downtown",
            status: "Active",
            date: "Jan 15, 2025",
            price: "$2,500/month",
            views: 47,
        },
        {
            id: 2,
            title: "Luxury Penthouse Suite",
            address: "456 Oak Avenue, Uptown",
            status: "Active",
            date: "Feb 3, 2025",
            price: "$4,200/month",
            views: 89,
        },
        {
            id: 3,
            title: "Cozy Studio Loft",
            address: "789 Pine Street, Arts District",
            status: "Under Review",
            date: "Mar 1, 2025",
            price: "$1,800/month",
            views: 0,
        },
    ]);

    const [activities, setActivities] = useState([
        {
            id: 1,
            message: `Listing "Modern Downtown Apartment" received 3 new inquiries`,
            time: "2 hours ago",
        },
        {
            id: 2,
            message: `Update request for "Luxury Penthouse Suite" was approved`,
            time: "1 day ago",
        },
        {
            id: 3,
            message: `New listing "Cozy Studio Loft" submitted for review`,
            time: "3 days ago",
        },
    ]);

    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto p-4 space-y-6">

                <div>
                    <h1 className="text-2xl font-bold">Owner Dashboard</h1>
                    <p className="text-gray-600">Manage your property listings and verification status</p>
                </div>

                <div className="bg-white border rounded-lg shadow-sm p-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-green-500" />
                        <div>
                            <p className="font-medium">Verification Status</p>
                            <p className="text-sm text-gray-500">Verified Owner</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 text-right">
                        <p>Verified on</p>
                        <p className="font-medium">March 15, 2025</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <SummaryCard title="Active Listings" count={3} icon={<FileText className="text-blue-500" />} />
                    <SummaryCard title="Total Views" count={1247} icon={<Eye className="text-gray-700" />} />
                    <SummaryCard title="Inquiries" count={28} icon={<MessageCircle className="text-indigo-500" />} />
                </div>

                <div className="bg-white border rounded-lg shadow-sm">
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-semibold text-lg">Your Property Listings</h3>
                        <button className="flex items-center gap-1 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                            <Plus size={16} /> Request New Listing
                        </button>
                    </div>
                    <div className="divide-y">
                        {listings.map((listing) => (
                            <div key={listing.id} className="flex justify-between items-start gap-4 p-4">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                                        Image
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{listing.title}</h4>
                                        <p className="text-sm text-gray-500">{listing.address}</p>
                                        <div className="text-sm text-gray-600 flex flex-wrap gap-2 mt-1">
                                            <span className="font-medium">{listing.status}</span>
                                            <span className="text-gray-400">•</span>
                                            <span>Listed: {listing.date}</span>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button className="text-sm text-gray-600 border px-2 py-1 rounded hover:bg-gray-50">📝 Request Update</button>
                                            <button className="text-sm text-gray-600 border px-2 py-1 rounded hover:bg-gray-50">👁️ View Listing</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right min-w-[120px]">
                                    <p className="font-medium">{listing.price}</p>
                                    <p className="text-sm text-gray-500">{listing.views} views</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white border rounded-lg shadow-sm p-4">
                    <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
                    <hr />
                    <ul className="mt-3 space-y-2 text-sm">
                        {activities.map((activity) => (
                            <li key={activity.id} className="text-gray-700 flex justify-between">
                                <span>{activity.message}</span>
                                <span className="text-gray-400">{activity.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>
            <Footer />
        </>
    );
}
