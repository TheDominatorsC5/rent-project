import React from "react";
import { useAdminData } from "../context/AdminDataContext";
import Aside from "../components/Dashboards/Aside";

const AdminDashboard = () => {
    const {
        allListings,
        pendingReviews,
        flaggedPosts,
        users,
    } = useAdminData();

    return (
        <div className="flex">
            <Aside />

            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <Card title="Total Listings" value={allListings.length} />
                    <Card title="Pending Reviews" value={pendingReviews.length} />
                    <Card title="Flagged Posts" value={flaggedPosts.length} />
                    <Card title="Active Users" value={users.length} />
                </div>

                {/* Previews */}
                <PreviewSection title="Approved Listings Preview" items={allListings.slice(0, 3)} />
                <PreviewSection title="Flagged Posts Preview" items={flaggedPosts.slice(0, 3)} />
            </main>
        </div>
    );
};

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

export default AdminDashboard;


// // import useSWR from "swr";
// // import axios from "axios";
// import { useState } from "react";
// import Aside from "../components/Aside";

// // const fetcher = (url) => axios.get(url).then((res) => res.data);

// export default function AdminDashboard() {
//   // const { data: allListings = [] } = useSWR("/api/listings", fetcher);
//   // const { data: pending = [] } = useSWR("/api/pending", fetcher);
//   // const { data: flagged = [] } = useSWR("/api/flagged", fetcher);
//   // const { data: users = [] } = useSWR("/api/users", fetcher);

//   const [isOpen, setIsOpen] = useState(null);

//   // MOCK DATA UNTIL BACKEND IS READY
//   const allListings = [
//     { id: 1, title: "Ocean Breeze Flat", status: "Approved" },
//     { id: 2, title: "Downtown Office", status: "Approved" },
//   ];
//   const pending = [
//     {
//       id: 3,
//       title: "Green Valley Restaurant",
//       owner: "John Smith",
//       category: "Restaurant",
//       submitted: "Jan 15, 2025",
//       status: "Pending",
//     },
//     {
//       id: 4,
//       title: "Tech Solutions Inc",
//       owner: "Sarah Johnson",
//       category: "Technology",
//       submitted: "Jan 14, 2025",
//       status: "Pending",
//     },
//   ];
//   const flagged = [
//     { id: 5, title: "Downtown Coffee Shop", reason: "Fake listing" },
//   ];
//   const users = [
//     { id: 1, name: "User 1" },
//     { id: 2, name: "User 2" },
//   ];

//   const handleToggle = (id) => {
//     setIsOpen(isOpen === id ? null : id);
//   };

//   const handleSelect = (action, id) => {
//     alert(`Action "${action}" selected for ID ${id}`);
//     setIsOpen(null);
//   };

//   return (
//     <div className="flex">
//       <Aside />

//       <main className="flex-1 p-6 space-y-6">
//         {/* Top Metrics */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           <SummaryCard title="Total Listings" count={allListings.length} icon="📃" />
//           <SummaryCard title="Pending Reviews" count={pending.length} icon="⏱️" />
//           <SummaryCard title="Flagged Posts" count={flagged.length} icon="🚩" />
//           <SummaryCard title="Active Users" count={users.length} icon="👥" />
//         </div>

//         {/* Quick Actions */}
//         <div className="flex gap-4 mt-4">
//           <button className="border p-2 rounded flex items-center gap-1">➕ Create New Listing</button>
//           <button className="border p-2 rounded flex items-center gap-1">👤 Add New User</button>
//           <button className="border p-2 rounded flex items-center gap-1">⏬ Export Data</button>
//         </div>

//         {/* Pending Verification Requests */}
//         <div>
//           <div className="flex justify-between items-center">
//             <h3 className="font-bold text-lg">Pending Verification Requests</h3>
//             <a href="/admin/pending" className="text-blue-600 text-sm">View All</a>
//           </div>
//           <table className="w-full mt-2 border-collapse">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2">Business Name</th>
//                 <th className="p-2">Owner</th>
//                 <th className="p-2">Category</th>
//                 <th className="p-2">Submitted</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pending.map((item) => (
//                 <tr key={item.id} className="border-t">
//                   <td className="p-2">{item.title}</td>
//                   <td className="p-2">{item.owner}</td>
//                   <td className="p-2">{item.category}</td>
//                   <td className="p-2">{item.submitted}</td>
//                   <td className="p-2">{item.status}</td>
//                   <td className="p-2 relative">
//                     <button
//                       onClick={() => handleToggle(item.id)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       Select Action
//                     </button>

//                     {isOpen === item.id && (
//                       <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
//                         <button
//                           onClick={() => handleSelect("Review", item.id)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           Review
//                         </button>
//                         <button
//                           onClick={() => handleSelect("Approve", item.id)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => handleSelect("Reject", item.id)}
//                           className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           Reject
//                         </button>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Flagged Post Preview */}
//         <div className="mt-6">
//           <h3 className="font-bold text-lg mb-2">Flagged Posts</h3>
//           {flagged.slice(0, 2).map((post) => (
//             <div key={post.id} className="border p-3 rounded mb-2 bg-gray-50">
//               <h4 className="font-semibold">{post.title}</h4>
//               <p className="text-sm text-red-600">Reason: {post.reason}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
