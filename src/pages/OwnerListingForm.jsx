import { useState } from "react";
import { Listbox } from "@headlessui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const propertyTypes = [
    "Apartment",
    "Single Room",
    "Chamber and Hall",
    "Self-Contained",
    "1 Bedroom House",
    "2 Bedroom House",
    "3+ Bedroom House",
    "Duplex",
    "Townhouse",
    "Detached House",
    "Semi-Detached House",
    "Storey Building",
    "Compound House",
    "Guest House",
    "Boys Quarters",
    "Hostel",
    "Studio Apartment",
    "Shared Apartment",
    "Mansion",
    "Penthouse",
    "Office Space",
    "Shop",
    "Warehouse",
    "Storefront",
    "Commercial Building",
];

export default function OwnerListingForm() {
    const [selectedType, setSelectedType] = useState(propertyTypes[0]);
    const [photos, setPhotos] = useState([]);

    return (
        <>
            <Navbar />
            <section className="flex-1 max-w-6xl mx-auto p-4 space-y-6">
                <div className="mb-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Add New Property</h2>
                        <p className="text-gray-600">Fill out the form below to list your property</p>
                    </div>
                    <button className="text-blue-600 underline">Back to Properties</button>
                </div>
                <form className="space-y-8">

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="propertyTitle" className="block font-medium mb-1">Property Title</label>
                                <input type="text" id="propertyTitle" className="border border-gray-300 p-2 rounded w-full" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Property Type</label>
                                <div className="relative">
                                    <Listbox value={selectedType} onChange={setSelectedType}>
                                        <div className="relative">
                                            <Listbox.Button className="w-full border border-gray-300 rounded px-3 py-2 text-left">
                                                {selectedType}
                                            </Listbox.Button>
                                            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-40 overflow-y-auto">
                                                {propertyTypes.map((type, idx) => (
                                                    <Listbox.Option
                                                        key={idx}
                                                        value={type}
                                                        className={({ active }) =>
                                                            `cursor-pointer px-3 py-2 ${active ? "bg-blue-100" : ""}`
                                                        }
                                                    >
                                                        {type}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </div>
                                    </Listbox>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block font-medium mb-1">Description</label>
                            <textarea
                                rows="4"
                                className="w-full border border-gray-300 rounded p-2"
                                placeholder="Describe your property..."
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Location</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium mb-1">Street Address</label>
                                <input type="text" className="w-full border border-gray-300 rounded p-2" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">City</label>
                                <input type="text" className="w-full border border-gray-300 rounded p-2" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">State/Region</label>
                                <input type="text" className="w-full border border-gray-300 rounded p-2" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Country</label>
                                <input type="text" className="w-full border border-gray-300 rounded p-2" value="Ghana" readOnly />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <input className="border p-2 rounded" placeholder="Bedrooms" type="number" />
                            <input className="border p-2 rounded" placeholder="Bathrooms" type="number" />
                            <input className="border p-2 rounded" placeholder="Square Feet" type="number" />
                            <input className="border p-2 rounded" placeholder="Year Built" type="number" />
                            <input className="border p-2 rounded" placeholder="Parking Spaces" type="number" />
                            <input className="border p-2 rounded" placeholder="Pet Policy" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pricing & Terms</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input className="border p-2 rounded" placeholder="Monthly Rent ($)" type="number" />
                            <input className="border p-2 rounded" placeholder="Security Deposit ($)" type="number" />
                            <div>
                                <select className="w-full border p-2 rounded">
                                    <option>Select lease term</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                    <option>Flexible</option>
                                </select>
                            </div>
                            <input className="border p-2 rounded" placeholder="Available Date" type="date" />
                        </div>
                    </div>
                    {/* Photos */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Property Photos</h3>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="border p-2 rounded w-full"
                            onChange={(e) => {
                                const files = Array.from(e.target.files);
                                const validFiles = files.filter(file => file.type.startsWith("image/"));

                                // Append new files to existing photos
                                setPhotos(prev => [...prev, ...validFiles]);
                            }}
                        />

                        {/* Preview */}
                        {photos.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {photos.map((file, index) => {
                                    const objectUrl = URL.createObjectURL(file);
                                    return (
                                        <div key={index} className="relative group">
                                            <img
                                                src={objectUrl}
                                                alt={`preview-${index}`}
                                                className="w-full h-32 object-cover rounded border"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const updatedPhotos = [...photos];
                                                    updatedPhotos.splice(index, 1);
                                                    setPhotos(updatedPhotos);
                                                    URL.revokeObjectURL(objectUrl);
                                                }}
                                                className="absolute top-1 right-1 bg-slate-500 text-white rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center"
                                            >
                                                X
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {["Air Conditioning", "Dishwasher", "Washer/Dryer", "Pool", "Gym", "Balcony", "Wifi", "Generator"].map((amenity, idx) => (
                                <label key={idx} className="flex items-center space-x-2">
                                    <input type="checkbox" />
                                    <span>{amenity}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button type="button" className="bg-gray-200 px-4 py-2 rounded">Save as Draft</button>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Publish Property</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
}
