import React from "react";
import { useAdminData } from "../../context/AdminDataContext";

const PendingReviews = () => {
    const { pendingReviews } = useAdminData();

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
            {pendingReviews.length === 0 ? (
                <p>No pending listings.</p>
            ) : (
                <ul className="space-y-4">
                    {pendingReviews.map((listing) => (
                        <li key={listing.id} className="border p-4 rounded shadow">
                            <h3 className="font-bold">{listing.title}</h3>
                            <p>{listing.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PendingReviews;
