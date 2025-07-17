import { NavLink } from "react-router";

export default function Aside() {
    return (
        <>
            <aside className="min-w-[200px] bg-gray-100 p-4 h-screen sticky top-0">
                <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
                <nav className="flex flex-col gap-2">
                    <NavLink to="/admin" className="hover:underline">Overview</NavLink>
                    <NavLink to="/admin/listings" className="hover:underline">All Listings</NavLink>
                    <NavLink to="/admin/flagged" className="hover:underline">Flagged Posts</NavLink>
                    <NavLink to="/admin/pending" className="hover:underline">Pending Reviews</NavLink>
                    <NavLink to="/admin/users" className="hover:underline">User Management</NavLink>
                </nav>
            </aside>
        </>
    );
}