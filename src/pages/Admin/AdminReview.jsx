// import { useLocation } from "react-router";
// import { apiClient } from "../../api/client";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function AdminReview() {

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const listing = {
        propertyTitle: "Modern Downtown Apartment",
        propertyType: "Apartment",
        description: "Spacious and bright apartment with downtown views.",
        address: "123 Main Street",
        city: "Downtown",
        state: "New York",
        country: "USA",
        bedrooms: 2,
        bathrooms: 2,
        squareFeet: 1200,
        yearBuilt: 2015,
        parkingSpaces: 1,
        petPolicy: "Allowed",
        rent: "$2,500",
        deposit: "$1,000",
        leaseTerm: "01/01/2025 - 12/31/2025",
        amenities: [
            "Air Conditioning",
            "Dishwasher",
            "Washer/Dryer",
            "Pool",
            "Gym",
            "Balcony",
            "Wifi",
            "Generator"
        ],
        photos: ["placeholder.jpg",
            "placeholder2.jpg",
            "placeholder3.jpg",
        ]
    };



    return (
        <>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={listing.photos.map((src) => ({ src }))}
                index={photoIndex}
                plugins={[Zoom]}
            />

            <DetailBar />
            <div className="flex">
                <Aside />

                <section className="max-w-4xl mx-auto p-8 bg-white shadow rounded-md">
                    <h1 className="text-2xl font-semibold mb-6">Review Property Listing</h1>
                    {/* Basic Information */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Basic Information</h2>
                        <p><strong>Title:</strong> {listing.propertyTitle}</p>
                        <p><strong>Type:</strong> {listing.propertyType}</p>
                        <p><strong>Description:</strong> {listing.description}</p>
                    </div>
                    {/* Location */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Location</h2>
                        <p><strong>Address:</strong> {listing.address}</p>
                        <p><strong>City:</strong> {listing.city}</p>
                        <p><strong>State/Region:</strong> {listing.state}</p>
                        <p><strong>Country:</strong> {listing.country}</p>
                    </div>
                    {/* Property Details */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Property Details</h2>
                        <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
                        <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
                        <p><strong>Square Feet:</strong> {listing.squareFeet}</p>
                        <p><strong>Year Built:</strong> {listing.yearBuilt}</p>
                        <p><strong>Parking Spaces:</strong> {listing.parkingSpaces}</p>
                        <p><strong>Pet Policy:</strong> {listing.petPolicy}</p>
                    </div>
                    {/* Pricing & Terms */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Pricing & Terms</h2>
                        <p><strong>Monthly Rent:</strong> {listing.rent}</p>
                        <p><strong>Security Deposit:</strong> {listing.deposit}</p>
                        <p><strong>Lease Term:</strong> {listing.leaseTerm}</p>
                    </div>
                    {/* Amenities */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Amenities</h2>
                        <ul className="list-disc list-inside">
                            {listing.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    {/* Property Photos */}
                    <div className="mb-6">
                        <h2 className="text-xl font-medium mb-2">Property Photos</h2>
                        <div className="flex flex-wrap gap-4">
                            {listing.photos.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`Property ${idx + 1}`}
                                    className="w-32 h-32 object-cover rounded cursor-pointer"
                                    onClick={() => {
                                        setPhotoIndex(idx);
                                        setOpen(true);
                                    }}
                                />
                            ))}

                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-end">
                        <button className="bg-[#2ECC71] text-white px-4 py-2 rounded hover:bg-green-700">Approve</button>
                        <button className="bg-[#E74C3C] text-white px-4 py-2 rounded hover:bg-red-700">Reject</button>
                    </div>
                </section>
            </div>
        </>
    );
}



//     const location = useLocation();
//     const listing = location.state.data;

//     async function approve() {
//         console.log('approved')
//         const response = await apiClient.post("/api/rent/property/review", {status: 'approved'}, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
//             },
//             params: listing.id
//         });
//     }

//     async function reject() {
//          console.log('rejrct')
//         const response = await apiClient.post("/api/rent/property/review", {status: 'rejected'}, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
//             },
//             params: listing.id
//         });
//     }

//     return (
//         <>
//         <section>
//             <h1 className="text2xl">Review</h1>
//             <div className="flex flex-row justify-between px-[15px]">
//                 <h3>{listing.propertyTitle}</h3>
//             </div>
//             <div>
//                 <button onClick={approve} >Approve</button>
//                 <button onClick={reject} >Reject</button>
//             </div>
//         </section>
//         </>
