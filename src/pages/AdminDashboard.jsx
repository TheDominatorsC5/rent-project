import { useState } from "react";

export default function AdminDashboard() {

    const [isOpen, setIsOpen] = useState(null);
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "Green Valley View",
            owner: "John Smith",
            category: "Apartment",
            submitted: "Jan 15, 2025",
            status: "Pending",
        },
        {
            id: 2,
            title: "Ocean Breeze Flat",
            owner: "Ama Boateng",
            category: "Studio",
            submitted: "Feb 2, 2025",
            status: "Approved",
        },
        // Add more dynamically
    ]);

    const handleToggle = (id) => {
        setIsOpen(isOpen === id ? null : id); // Toggle dropdown per row
    };

    const handleSelect = (action, id) => {
        alert(`You selected "${action}" for listing ID ${id}`);
        setIsOpen(null);
    };

    return (
        <>
            <div>
                <p>Mefie</p>
                <p>Admin Dashboard</p>
                <span>👤</span>
                <p>Admin Name</p>
            </div>

            <div>
                <span>
                    <p>Total Listings</p>
                    <p>2,654</p>
                </span>
                <span>📃</span>
            </div>
            <div>
                <span>
                    <p>Pending Reviews</p>
                    <p>47</p>
                </span>
                <span>🕒</span>
            </div>
            <div>
                <span>
                    <p>Flagged Posts</p>
                    <p>23</p>
                </span>
                <span>🚩</span>
            </div>
            <div>
                <span>
                    <p>Active Users</p>
                    <p>3,432</p>
                </span>
                <span>👥</span>
            </div>

            <div>
                <p>Quick Actions</p>

                <span><span>+</span> Create New Listing</span>
                <span><span>👤</span> Add New User</span>
                <span><span>⏬</span> Export Data</span>
            </div>

            <div>
                <p>Pending Verification Request</p>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2">Property Title</th>
                            <th className="p-2">Owner</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Submitted</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listings.map((listing) => (
                            <tr key={listing.id} className="border-t">
                                <td className="p-2">{listing.title}</td>
                                <td className="p-2">{listing.owner}</td>
                                <td className="p-2">{listing.category}</td>
                                <td className="p-2">{listing.submitted}</td>
                                <td className="p-2">{listing.status}</td>
                                <td className="p-2 relative">
                                    <button
                                        onClick={() => handleToggle(listing.id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        Select Action
                                    </button>

                                    {isOpen === listing.id && (
                                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                                            <button
                                                onClick={() => handleSelect("Review", listing.id)}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Review
                                            </button>
                                            <button
                                                onClick={() => handleSelect("Approve", listing.id)}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleSelect("Reject", listing.id)}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}