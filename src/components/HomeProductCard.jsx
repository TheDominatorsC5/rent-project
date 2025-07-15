import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Keep this import!

export default function HomeProductCard({
  image,
  price,
  title,
  location,
  beds,
  size,
  verified = true,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
      <div className="bg-gray-300 h-40 flex items-center justify-center text-white text-lg font-medium">
        {image || 'Image Placeholder'}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="text-xl font-semibold text-gray-800">{price}/month</div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          {verified && <FaCheckCircle className="text-green-500" />}
          Verified
        </div>
        <div className="text-md font-medium text-gray-700">{title}</div>
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <FaMapMarkerAlt />
          {location}
        </div>
        <div className="text-sm text-gray-600">{beds}</div>
        <div className="text-sm text-gray-600">{size} sq ft</div>
        <button className="mt-3 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-sm">
          View Details
        </button>
      </div>
    </div>
  );
}

// ---
// PropTypes for validation and documentation
// ---
HomeProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  beds: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  verified: PropTypes.bool, // Optional, since it has a default value
};