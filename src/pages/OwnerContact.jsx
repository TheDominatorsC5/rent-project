import { ChevronLeft, Phone } from "lucide-react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

export default function OwnerContact() {
    const location = useLocation();
    
    const navigate = useNavigate();
    const navigationHandler = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="font-[outfit] w-[90%] mx-auto">
                {/* <Link to={"/rent-listing-detail"}> */}
                    <button onClick={navigationHandler} 
                    className="flex items-center text-sm sm:text-base md:text-lg text-[#7F8C8D] hover:text-black cursor-pointer my-8">
                        <ChevronLeft className="mr-1 size-8" />Back
                    </button>
                {/* </Link> */}

                <h1 className="font-semibold text-5xl mb-8">Get in Touch</h1>
                <div className="flex flex-row justify-between">
                    {/* <h1 className="text-medium font-medium">{property.landlordFullname}</h1> */}
                    <div className="flex flex-col">
                        <h2 className="font-medium text-3xl">Kwaku Manu</h2>
                        <p className="text-lg text-[#7F8C8D]">Landlord</p>
                        <p className="text-xl font-normal mt-4 text-[#7F8C8D]">Typically responds within an hour</p>
                    </div>

                </div>
                <hr className="mt-4 text-[#7F8C8D]" />

                <div className="my-10">
                    <p className="text-lg">Reach <span>Landlord</span> on:</p>
                    <p className="text-2xl font-bold text-[#1F618D] flex items-center mt-2"><Phone className="mr-2" /> +233 505 679 833</p>
                </div>
                


                <div className="my-14 w-full">

                    <form action="" className="">

                        <div className="flex flex-col w-[60%]">
                            <label
                                htmlFor="location"
                                className="font-medium text-xl">Message the Host</label>
                            <textarea
                                name="location"
                                id="location"
                                placeholder="Hi, I need help with..."
                                className="h-54 py-2  px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" >
                            </textarea>

                            <button className="bg-[#2980B9] font-semibold text-white text-sm md:text-lg px-3 md:px-6 py-1.5 md:py-2 rounded-lg hover:bg-[#1F618D] transition-colors mt-4">
                                Send Message
                            </button>

                        </div>

                    </form>
                </div>




            </div >

        </>
    );
}