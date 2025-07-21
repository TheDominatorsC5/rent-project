import { Link } from "react-router-dom";

export default function PreviewSection({ title, items }) {
    return (
        <div className="mb-6 bg-white border border-[#7F8C8D] rounded">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="bg-white shadow p-4 rounded space-y-2">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className="border-b pb-2 last:border-b-0">
                            <p className="font-medium">{item.propertyTitle || item.title}</p>
                            <p className="text-sm text-gray-600">{item.description || item.reason || 'No description available'}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No items to display.</p>
                )}
            </div>
            <Link to="#" className="text-blue-500 hover:underline text-sm mt-2 inline-block">View All</Link>
        </div>
    );
}