import React from "react";
import { useAdminData } from "../../context/AdminDataContext";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";

export default function FlaggedPosts() {
    const { flaggedPosts } = useAdminData();

    return (
        <>
        <DetailBar />
        <div className="flex">
            <Aside />

            <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold mb-4">Flagged Posts</h2>
                {flaggedPosts.length === 0 ? (
                    <p>No flagged posts.</p>
                ) : (
                    <ul className="space-y-4">
                        {flaggedPosts.map((post) => (
                            <li key={post.id} className="border p-4 rounded shadow">
                                <h3 className="font-bold">{post.title}</h3>
                                <p className="text-sm text-gray-500">Reason: {post.reason}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        </>
    );
}
