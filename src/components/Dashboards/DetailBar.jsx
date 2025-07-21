export default function DetailBar() {
    return (
        <>
        <div className="bg-[#2C3E50] text-[#F9F9F9] p-4 w-full flex justify-between sticky top-0">
            <h1 className="text-xs md:text-sm lg:text-xl font-bold">Admin Dashboard</h1>
            <h1 className="text-sm md:text-xl lg:text-2xl font-bold">MefieConnect</h1>
            <div className="text-xs md:text-sm lg:text-xl">
                <span>Not</span><span>User</span><span>Name</span>
            </div>
        </div>
        </>
    )
}