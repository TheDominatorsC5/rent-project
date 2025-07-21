import { NavLink } from "react-router-dom";
import {
    HomeIcon,
    ClipboardDocumentListIcon,
    ExclamationTriangleIcon,
    ClockIcon,
    UsersIcon,
    Cog6ToothIcon
} from "@heroicons/react/24/outline";

export default function Aside() {
    return (
        <aside className="bg-gray-100 p-3 md:p-4 h-[calc(100vh-64px)] sticky top-13.5 md:top-16 text-lg transition-all duration-300
                         w-16 md:w-52 overflow-hidden hover:w-52 group">
            <nav className="flex flex-col gap-3">
                <NavItem to="/admin" label="Overview" icon={<HomeIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />} end />
                <NavItem to="/admin/listings" label="All Listings" icon={<ClipboardDocumentListIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />} />
                <NavItem to="/admin/flagged" label="Flagged Posts" icon={<ExclamationTriangleIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />} />
                <NavItem to="/admin/pending" label="Pending Reviews" icon={<ClockIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />} />
                <NavItem to="/admin/users" label="User Management" icon={<UsersIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />} />
                {/* Static "Settings" Option */}
                <div
                    className="flex items-center gap-2 px-2 py-2 rounded hover:bg-blue-100 transition-colors text-gray-700 cursor-pointer mt-2"
                >
                    <Cog6ToothIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                    <span className="hidden md:inline group-hover:inline">Settings</span>
                </div>
            </nav>
        </aside>
    );
}

function NavItem({ to, label, icon, end = false }) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-2 rounded hover:bg-blue-100 transition-colors
                 ${isActive ? "bg-blue-200 font-semibold text-blue-800" : "text-gray-700"}`
            }
        >
            {icon}
            <span className="hidden md:inline group-hover:inline">{label}</span>
        </NavLink>
    );
}