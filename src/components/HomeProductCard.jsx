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
    <div className="bg-white font-[outfit] rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col w-[80%] max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-gray-300 h-55 sm:h-60 md:h-60 flex items-center justify-center text-white text-base sm:text-lg font-medium">
        {/* {image || 'Image Placeholder'} */}
        <img className='w-[100%] h-[100%] object-cover' src="https://i.pinimg.com/1200x/03/0b/5c/030b5cfede15f68f8a5f2f20e04dcac6.jpg" alt="" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="text-lg sm:text-xl font-semibold text-gray-800">{price}/month</div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {verified && <FaCheckCircle className="text-green-500" />}
            Verified
          </div>
        </div>

        <div className="text-base font-medium text-gray-700">{title}</div>

        <div className="flex items-center text-sm text-gray-500 gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <div className="flex flex-col sm:flex-row  sm:gap-6 text-sm text-gray-600">
          <span>{beds}</span>
          <span>{size} sq ft</span>
        </div>

        <button className="mt-3 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-sm bg-gradient-to-r from-blue-500 to-purple-600 font-medium  cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
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
  verified: PropTypes.bool,
};
