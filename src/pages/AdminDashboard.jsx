import React from "react";
import { useAdminData } from "../context/AdminDataContext";
import Aside from "../components/Dashboards/Aside";
import DetailBar from "../components/Dashboards/DetailBar";
import SummaryCard from "../components/Dashboards/SummaryCard";
import {
    ClipboardDocumentListIcon,
    ExclamationTriangleIcon,
    ClockIcon,
    UsersIcon,
    ArrowUpTrayIcon,
    UserPlusIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";

export default function AdminDashboard() {
    const {
        allListings,
        pendingReviews,
        flaggedPosts,
        users,
    } = useAdminData();

    const Card = ({ title, value }) => (
        <div className="bg-white shadow rounded p-4">
            <h2 className="text-sm text-gray-500">{title}</h2>
            <p className="text-xl font-semibold">{value}</p>
        </div>
    );

    const PreviewSection = ({ title, items }) => (
        <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <ul className="bg-white shadow rounded p-4 space-y-2">
                {items.map((item) => (
                    <li key={item.id} className="border-b pb-2">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <DetailBar />
            <div className="flex">
                <Aside />

                <main className="flex-1 p-6">

                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <SummaryCard 
                        title="Total Listings" 
                        count={allListings.length} 
                        icon={<ClipboardDocumentListIcon className="w-6 h-6 text-blue-500" />}/>
                        <SummaryCard 
                        title="Pending Reviews" 
                        count={pendingReviews.length}
                        icon={<ClockIcon className="w-6 h-6 text-blue-500" />}/>
                        <SummaryCard 
                        title="Flagged Posts" 
                        count={flaggedPosts.length}
                        icon={<ExclamationTriangleIcon className="w-6 h-6 text-blue-500" />}/>
                        <SummaryCard 
                        title="Active Users" 
                        count={users.length}
                        icon={<UsersIcon className="w-6 h-6 text-blue-500" />}/>
                    </div>

                    <div className="gap-4 mt-4 border rounded p-4 flex items-center justify-between shadow-sm mb-4">
                        <button className="border p-2 rounded flex items-center gap-1 w-full h-16">
                            <PlusIcon className="w-5 h-5" /> 
                            Create New Listing</button>

                        <button className="border p-2 rounded flex items-center gap-1 w-full h-16">
                            <UserPlusIcon className="w-5 h-5" /> 
                            Add New User
                            </button>

                        <button className="border p-2 rounded flex items-center gap-1 w-full h-16">
                            <ArrowUpTrayIcon className="w-5 h-5" />
                            Export Data
                        </button>
                    </div>


                    {/* Previews */}
                    <PreviewSection title="Pending Verification Requests" items={allListings.slice(0, 3)} />
                    <PreviewSection title="Flagged Posts" items={flaggedPosts.slice(0, 3)} />
                </main>
            </div>
        </>
    );
}