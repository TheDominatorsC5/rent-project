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
    <div className="bg-[#F9F9F9] font-[outfit] rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col w-[80%] max-w-sm md:max-w-md lg:max-w-lg">
      <div className="bg-gray-300 h-55 sm:h-60 md:h-60 flex items-center justify-center text-[#333333] text-base sm:text-lg font-medium">
        {/* {image || 'Image Placeholder'} */}
        <img className='w-[100%] h-[100%] object-cover' src="https://i.pinimg.com/1200x/03/0b/5c/030b5cfede15f68f8a5f2f20e04dcac6.jpg" alt="" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="text-lg sm:text-xl font-semibold text-[#333333]">{price}/month</div>
          <div className="flex items-center gap-2 text-sm text-[#333333]">
            {verified && <FaCheckCircle className="text-[#2ECC71]" />}
            Verified
          </div>
        </div>

        <div className="text-base font-medium text-[#333333]">{title}</div>

        <div className="flex items-center text-sm text-[#333333] gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

        <div className="flex flex-col sm:flex-row  sm:gap-6 text-sm text-[#333333]">
          <span>{beds}</span>
          <span>{size} sq ft</span>
        </div>

        <button className="mt-3 bg-[#2980B9] hover:bg-[#1F618D] text-white py-2 px-4 rounded-md text-sm font-medium cursor-pointer shadow-md">
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
