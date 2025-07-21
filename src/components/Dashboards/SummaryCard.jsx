export default function SummaryCard({ title, count, icon }) {
    return (
        <>
            <div className="bg-white border border-[#7F8C8D] rounded p-4 flex items-center justify-between shadow-sm">
                <div>
                    <p className="text-gray-500">{title}</p>
                    <p className="text-2xl font-bold">{count}</p>
                </div>
                <div>{icon}</div>
            </div>
        </>
    );
}