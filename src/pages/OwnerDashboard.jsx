import { useState } from "react";

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
            title: "Cozy Studio Loft",
            address: "45 Accra High Rd",
            status: "Pending",
            date: "Mar 10, 2025",
            price: "$1,200/month",
            views: 31,
        },
    ]);

    const [activities, setActivities] = useState([
        {
            id: 1,
            message: `Listing "Modern Downtown Apartment" received 3 new inquiries`,
            time: "3 hours ago",
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
            <div>
                <p>Mefie</p>
                <p>Saved Listings</p>
                <span>👤</span>
                <p>User Name</p>
            </div>

            <p>Dashboard</p>
            <p>Manage your property listings and verification status</p>

            <div className="w-full flex">
                <div className="flex">
                    <span>✅</span>
                    <span>
                        <p>Verification Status</p>
                        <p>Verified owner</p>
                    </span>
                </div>

                <div>
                    <p>Verified on</p>
                    <p>March 30, 2025</p>
                </div>
            </div>

            <div>
                <div>
                    <span>📃</span>
                    <span>
                        <p>Active Listings</p>
                        <p>3</p>
                    </span>
                </div>

                <div></div>
                <div></div>
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>Your Property Listings</th>
                        <th>
                            <span><span>+</span> Request New Listing</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {listings.map((listing) => (
                        <tr key={listing.id}>
                            <td>
                                <div>
                                    <img src="" alt="" />
                                    <span>
                                        <h4>{listing.title}</h4>
                                        <p>{listing.address}</p>
                                        <span className="flex gap-2">
                                            <p>{listing.status}</p>
                                            <p>Listed: {listing.date}</p>
                                        </span>
                                    </span>
                                </div>
                                <span className="flex gap-2 mt-2">
                                    <button>📝 Request Update</button>
                                    <button>👁️ View Listing</button>
                                </span>
                            </td>
                            <td>
                                <p>{listing.price}</p>
                                <p>{listing.views} views</p>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>


            <div>
                <h3>Recent Activities</h3>
                <hr />
                <ul>
                    {activities.map((activity) => (
                        <li key={activity.id}>
                            {activity.message} <span>{activity.time}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
}