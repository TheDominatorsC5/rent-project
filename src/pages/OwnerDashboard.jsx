import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SummaryCard from "../components/Dashboards/SummaryCard";
import { CheckCircle, FileText, Eye, MessageCircle, Plus, SquarePenIcon, TrashIcon, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useSWR, {mutate} from "swr";
import { apiFetcher } from "../api/client";
import { useNavigate } from "react-router";
import { apiClient } from "../api/client";

export default function OwnerDashboard() {
    const { data, isLoading, error } = useSWR("/api/rent/property/landlord/properties", apiFetcher);
    console.log('listing:', data)

    const navigate = useNavigate();
    const navigationHandler = (property) => {
        navigate('/rent-listing-detail', {state: {property: property}});
    }

    const updateHandler = (property) => {
        navigate('/update-listing-form', {state: {property: property}})
    }

    const handleRemove = (id) => {
        apiClient.delete(`/api/rent/property/delete/${id}`)
        .then((res) => {
            if (res.data.success) {
                mutate("/api/rent/property/landlord/properties");
            }
        })
        .catch((error) => {
            console.log('error:', error);
            
        })
        
        
    };

    // const [listings, setListings] = useState([
    //     {
    //         id: 1,
    //         title: "Modern Downtown Apartment",
    //         address: "123 Main Street, Downtown",
    //         status: "Active",
    //         date: "Jan 15, 2025",
    //         price: "$2,500/month",
    //         views: 47,
    //     },
    //     {
    //         id: 2,
    //         title: "Luxury Penthouse Suite",
    //         address: "456 Oak Avenue, Uptown",
    //         status: "Active",
    //         date: "Feb 3, 2025",
    //         price: "$4,200/month",
    //         views: 89,
    //     },
    //     {
    //         id: 3,
    //         title: "Cozy Studio Loft",
    //         address: "789 Pine Street, Arts District",
    //         status: "Under Review",
    //         date: "Mar 1, 2025",
    //         price: "$1,800/month",
    //         views: 0,
    //     },
    // ]);

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

                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Owner Dashboard</h1>
                        <p className="text-gray-600">Manage your property listings and verification status</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        {/* <span className="text-xl text-gray-500"><User /></span>
                        <p>User Name</p> */}
                        <Link to="/rent-listings" className="text-blue-600 underline flex"><span><ChevronLeft/></span><span>Back to Properties</span></Link>
                    </div>
                </div>

                <div className="border border-[#7F8C8D] rounded-lg shadow-sm p-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-[#27AE60]" />
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
                    <SummaryCard title="Active Listings" count={data?.length} icon={<FileText className="text-blue-500 bg-gray-200 p-1 rounded-sm size-8 border border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                    <SummaryCard title="Total Views" count={1247} icon={<Eye className="text-gray-700 bg-gray-200 p-1 rounded-sm size-8 border border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                    <SummaryCard title="Inquiries" count={28} icon={<MessageCircle className="text-blue-500 bg-gray-200 p-1 rounded-sm size-8 border border-[#7F8C8D] hover:bg-[#2980B9]" />} />
                </div>

                <div className="bg-white border rounded-lg shadow-sm border-[#7F8C8D]">
                    <div className="flex justify-between items-center p-4 border-b border-[#7F8C8D]">
                        <h3 className="font-semibold text-lg">Your Property Listings</h3>
                        <Link to="/owner-listing-form">
                            <button className="flex items-center gap-1 text-sm text-white px-3 py-2 rounded bg-[#2980B9] hover:bg-[#1F618D]">
                                <Plus size={18} /> Add New Listing
                            </button>
                        </Link>
                    </div>
                    <div className="divide-y">
                        {data?.map((listing) => (
                            <div key={listing.id} className="md:flex md:justify-between items-start gap-4 p-4 border-[#7F8C8D]">
                                <div className="flex gap-4 mb-2">
                                    <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                                        <img src={listing.images[0]} alt="" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{listing.propertyTitle}</h4>
                                        <p className="text-sm text-gray-500">{listing.streetAddress}</p>
                                        <div className="text-sm text-gray-600 flex flex-wrap gap-2 mt-1">
                                            <span className="font-medium"><span className="mr-2">Status:</span><span  style={{color: listing.status=='approved'?'green' : listing.status=='rejected'?'red' : 'blue'}}>{listing.status}</span></span>
                                            <span className="text-gray-400">•</span>
                                            <span>Listed: {'01/01/2025'}</span>
                                        </div>
                                        <div className="flex gap-2 mt-2">
                                            <button onClick={() => {updateHandler(listing)}} className="text-sm text-white bg-[#2980B9] hover:bg-[#1F618D] px-3 py-1 rounded flex gap-2 items-center"><SquarePenIcon size={16} className="" /> Update Listing</button>

                                            <button onClick={() => {navigationHandler(listing)}} className="text-sm text-white bg-[#2980B9] hover:bg-[#1F618D] px-3 py-1 rounded flex gap-2 items-center"><Eye size={16} className="" /> View Listing</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right min-w-[120px]">
                                    <p className="font-medium"><span className="text-sm font-light">Ghc</span>{listing.monthlyPrice}</p>
                                    <p className="text-sm text-gray-500 mb-6">{listing.leaseTerm}</p>
                                    <button onClick={() => handleRemove(listing.id)}>{<TrashIcon className="text-gray-500 hover:text-[#E74C3C] hover:border-[#E74C3C] bg-gray-100 p-1 rounded-sm size-8 border-2 border-[#7F8C8D]" />}</button>
                                </div>
                            </div>
                        ))}
                        <div style={{display: data === undefined || data.length===0 ? 'flex':'none',}} className="h-[200px] justify-center items-center" >
                            <h3 className="text-2xl font-bold ">No Available Listing</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-4 border border-[#7F8C8D]">
                    <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
                    <hr className="border-[#7F8C8D]" />
                    <ul className="mt-3 space-y-2 text-xs md:text-sm">
                        {activities.map((activity) => (
                            <li key={activity.id} className="text-gray-700 flex justify-between gap-2">
                                <span className="max-sm:w-[16rem] md:w-[32rem]">{activity.message}</span>
                                <span className="text-gray-400 ">{activity.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </main>
            <Footer />
        </>
    );
}
