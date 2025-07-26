import { useLocation } from "react-router";
import { apiClient } from "../../api/client";
import Aside from "../../components/Dashboards/Aside";
import DetailBar from "../../components/Dashboards/DetailBar";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useNavigate } from "react-router";

export default function AdminAllReview() {
    const navigate = useNavigate();
    const location = useLocation();
    const listing = location.state.data;

    const [open, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const photos = listing.images;

    function goBack() {
        navigate(-1)
    }

    return (
        <>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={photos.map((src) => ({ src }))}
                index={photoIndex}
                plugins={[Zoom]}
            />

            <DetailBar />
            <div className="flex">
                <Aside />

                <section className="max-w-4xl mx-auto p-8 bg-white shadow rounded-md">
                    <div className="w-full flex justify-end">
                        <button
                        className="text-blue-600 text-lg underline flex" 
                        onClick={goBack}>Back</button>
                    </div>

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
                        <p><strong>Address:</strong> {listing.streetAddress}</p>
                        <p><strong>City:</strong> {listing.city}</p>
                        <p><strong>State/Region:</strong> {listing.region}</p>
                        <p><strong>GPS Address:</strong> {listing.gpsAddress}</p>
                        <p><strong>Country:</strong> {listing.country}</p>
                    </div>
                    {/* Property Details */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Property Details</h2>
                        <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
                        <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
                        <p><strong>Square Feet:</strong> {listing.squareFeet}</p>
                        <p><strong>Year Built:</strong> {listing.yearBuilt}</p>
                        <p><strong>Parking Spaces:</strong> {listing.parkingSpace}</p>
                        <p><strong>Pet Policy:</strong> {listing.petPolicy}</p>
                    </div>
                    {/* Pricing & Terms */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Pricing & Terms</h2>
                        <p><strong>Monthly Rent:</strong> {listing.monthlyPrice}</p>
                        <p><strong>Security Deposit:</strong> {listing.deposit}</p>
                        <p><strong>Lease Term:</strong> {listing.leaseTerm}</p>
                        <p><strong>Available Date:</strong> {listing.availableDate}</p>
                    </div>
                    {/* Amenities */}
                    <div className="mb-4">
                        <h2 className="text-xl font-medium mb-2">Amenities</h2>
                        <ul className="list-disc list-inside">
                            {listing.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                            <li style={{ display: listing.amenities.length <= 0 ? 'flex' : 'none' }}>None</li>
                        </ul>
                    </div>
                    {/* Property Photos */}
                    <div className="mb-6">
                        <h2 className="text-xl font-medium mb-2">Property Photos</h2>
                        <div className="flex flex-wrap gap-4">
                            {listing.images.map((src, idx) => (
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
                </section>
            </div>
        </>
    );
}