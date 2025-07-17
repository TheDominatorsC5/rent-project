import React from "react";
import { useAdminData } from "../../context/AdminDataContext";

const AllListings = () => {
  const { listings } = useAdminData();

  return (
    <div>
      <h2>All Listings ({listings?.length ?? 0})</h2>
      {listings?.length ? (
        <ul>
          {listings.map((listing) => (
            <li key={listing.id}>
              {listing.title} - GHS {listing.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No listings available.</p>
      )}
    </div>
  );
};

export default AllListings;
