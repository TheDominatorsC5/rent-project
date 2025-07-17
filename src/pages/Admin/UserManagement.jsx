import React from "react";
import { useAdminData } from "../../context/AdminDataContext";

const UserManagement = () => {
    const { users } = useAdminData();

    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul className="space-y-4">
                    {users.map((user) => (
                        <li key={user.id} className="border p-4 rounded shadow">
                            <h3 className="font-bold">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.role}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserManagement;
