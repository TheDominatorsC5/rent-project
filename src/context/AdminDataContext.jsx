// src/context/AdminDataContext.jsx
import { createContext, useContext, useState } from "react";

const AdminDataContext = createContext();

export const AdminDataProvider = ({ children }) => {
    const [allListings, setAllListings] = useState([
        { id: 1, title: "Apartment A", status: "approved" },
        { id: 2, title: "Apartment B", status: "approved" },
    ]);

    const [pendingReviews, setPendingReviews] = useState([
        { id: 3, title: "Apartment C", status: "pending" },
    ]);

    const [flaggedPosts, setFlaggedPosts] = useState([
        { id: 4, title: "Apartment D", status: "flagged" },
    ]);

    const [users, setUsers] = useState([
        { id: 1, name: "User A", type: "owner" },
        { id: 2, name: "User B", type: "renter" },
    ]);

    return (
        <AdminDataContext.Provider
            value={{
                allListings,
                setAllListings,
                pendingReviews,
                setPendingReviews,
                flaggedPosts,
                setFlaggedPosts,
                users,
                setUsers,
            }}
        >
            {children}
        </AdminDataContext.Provider>
    );
};

export const useAdminData = () => useContext(AdminDataContext);
