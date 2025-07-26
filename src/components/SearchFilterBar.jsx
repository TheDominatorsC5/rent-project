import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchFilterBar({setDisplayData, displayData}) {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [bedrooms, setBedrooms] = useState('');

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handlePropertyType = (e) => {
        setBedrooms(e.target.value);
    }

    const filterProperty = async () => {
        const results = displayData.filter(property => {
            let locationStr = location.trim().toString()
            let PLocationStr = property.city.trim().toString();
            let typeStr = bedrooms.trim().toString()
            let PTypeStr = property.bedrooms.trim().toString();
            let priceStr = price.trim().toString()
            let monthlyPriceStr = property.monthlyPrice.trim().toString();

            if (PLocationStr === locationStr || monthlyPriceStr === priceStr || PTypeStr === typeStr) {
                return property;
            }
        });

        if (results.length === 0) {
            alert("Sorry, no such property is available or check your caps lock");
        }
        else {
            setDisplayData(results);
        }
    }

    return (
        <div>
            <div className="overflow-hidden w-full rounded-xl border-[#a7b3b4] border-1 shadow-sm bg-white mt-10 p-4">
                    <div
                        className="flex flex-row justify-around">

                        <div className="flex flex-col w-[20%]">
                            <label className="" htmlFor="location">Location</label>
                            <input type="text"
                                name="location"
                                id="location"
                                placeholder="Enter city or area"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" 
                                onChange={handleLocation}
                            />
                        </div>

                        <div className="flex flex-col w-[20%]">
                            <label className="" htmlFor="price">Price</label>
                            <input type="text"
                                name="location"
                                id="location"
                                placeholder="Enter city or area"
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" 
                                onChange={handlePrice}
                            />
                        </div>

                        <div className="flex flex-col w-[20%]">
                            <label className="" htmlFor="roomType">Room Type</label>
                            <input
                            onChange={handlePropertyType} 
                            className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2" 
                            placeholder="Bedrooms"
                            type="number"
                            name="roomType"
                            id="roomType" />

                            {/* <select name="roomType" id="roomType" onChange={handlePropertyType}
                                className="py-2 px-4 border-[#7F8C8D] border text-medium font-normal rounded-lg mt-2"
                            >
                                <option selected disabled className="text-[#7F8C8D]">Any Type</option>
                                <option value="studio">Studio</option>
                                <option value="1 bedroom">1 Bedroom</option>
                                <option value="2 bedroom">2 Bedroom</option>
                                <option value="3 bedroom">3 Bedroom</option>
                                <option value="3 bedroom">4 Bedroom</option>
                            </select> */}
                        </div>


                        <div className="flex flex-col items-end w-[15%]">
                            <button onClick={filterProperty}
                                className="flex items-center justify-center bg-black font-medium text-white py-2 px-10 mt-7 rounded-lg text-medium cursor-pointer hover:bg-zinc-600 shadow-md">
                                <Search className="mr-2" /> Search
                            </button>
                        </div>

                    </div>
                </div>

                <div className="flex flex-row justify-between mt-10">
                    <p className="text-lg font-medium">Showing 1-12</p>

                    {/* <form action="">
                        <div className="flex flex-row">
                            <label className="font-medium mt-1" htmlFor="sort by">Sort By:</label>
                            <select name="sor by" id="sort"
                                className="w-45 py-1 px-4 border-[#7F8C8D] border text-lg font-normal rounded-lg ml-4">
                                <option value="">Low to High</option>
                                <option value="">High to Low</option>
                                <option value="">Newest First</option>
                                <option value="">Most Relevant</option>
                            </select>
                        </div>
                    </form> */}

                </div>
        </div>
    );
}