export default function OwnerContact() {

    return (
        <>
            <div className="font-[outfit] w-[90%] my-10 mx-auto">
                <div className="flex flex-row justify-between">
                    {/* <h1 className="text-medium font-medium">{property.landlordFullname}</h1> */}
                    <div className="flex flex-col">
                        <h1 className="font-medium text-3xl">Kwaku Manu</h1>
                        <p className="text-lg text-[#7F8C8D]">Landlord</p>
                        <p className="text-xl font-normal mt-4">Typically responds within an hour</p>
                    </div>

                </div>

                <div className="my-20 w-[90%] mx-auto">

                    <form action="" className="">

                        <div className="flex flex-col w-[40%] mx-auto">
                            <label
                                htmlFor="location"
                                className="font-semibold text-lg">Message the Host</label>
                            <textarea
                                name="location"
                                id="location"
                                placeholder="Hi Kwaku, I need help with..."
                                className="h-54 py-2  px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" >
                            </textarea>

                            <button className="bg-[#2980B9] font-semibold text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-[#1F618D] transition-colors">
                                View Details
                            </button>

                        </div>

                    </form>
                </div>




            </div >

        </>
    );
}