import React from 'react';
import { Home as HomeIcon, Search, ArrowLeft, TriangleAlert, Building, Info, LifeBuoy } from 'lucide-react'; // Importing icons from lucide-react
import { useNavigate } from 'react-router'; // For navigation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFoundPage() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page in history
  };

  const handleSearch = () => {
    // You would typically navigate to a search page or open a search modal
    // For now, let's navigate to a dummy search route or the home page
    navigate('/search'); // Assuming you have a /search route
  };

  // Handlers for popular pages links
  const handleBrowseProperties = () => {
    navigate('/rent-listings'); // Assuming you have a /listings route
  };

  const handleAboutUs = () => {
    navigate('/about'); // Assuming you have an /about route
  };

  const handleContactSupport = () => {
    navigate('/contact'); // Assuming you have a /contact route
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#F9F9F9] font-[outfit] text-[#333333] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-lg mx-auto shadow-xl p-8 md:p-12 ">
        <div className="mb-8 ">
          <TriangleAlert className="w-20 h-20 text-[#E74C3C] mx-auto mb-4" /> {/* Attention icon */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#333333] mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] mb-6">Page Not Found</h2>
        </div>

        <p className="text-lg text-[#333333] mb-10 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered an incorrect URL.
        </p>
        
        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={handleGoHome}
            className="flex items-center justify-center bg-[#2980B9] hover:bg-[#1F618D] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md"
          >
            <HomeIcon className="w-6 h-7 mr-2" /> Go Back Home
          </button>
        </div>

        <p className="text-gray-500 text-lg mb-6">- or -</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center py-1.5 px-14 text-md bg-[#2980B9] hover:bg-[#1F618D] text-white rounded-lg font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
          </button>
          <button
            onClick={handleSearch}
            className="flex items-center justify-center py-1.5 px-14 text-md bg-[#2980B9] hover:bg-[#1F618D] text-white rounded-lg font-medium "
          >
            <Search className="w-4 h-4 mr-2" /> Search
          </button>
        </div>
      </div>
      
      
     {/* Popular Pages Section - NEW */}
        <div className="flex flex-col items-center justify-center mt-8 pt-8 border-t border-gray-700 bg-[#F9F9F9] font-[outfit] text-[#333333] p-4"> {/* Added top border for separation */}
          <h3 className="text-xl md:text-2xl font-bold text-[#333333] text-center mb-6">Popular Pages</h3>
          
          <ul className="space-y-4">
            <li>
              <button
                onClick={handleBrowseProperties}
                className=" flex items-center justify-between bg-[#2980B9] hover:bg-[#1F618D] text-white font-light text-lg shadow-md py-1.5 px-19 rounded-lg  group"
              >
                <div className="flex items-center">
                  <Building className="w-5 h-5 mr-3 text-[#F9F9F9]" /> Properties
                </div>
                <ArrowLeft className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform text-[#F9F9F9]" />
              </button>
            </li>
            <li>
              <button
                onClick={handleAboutUs}
                className="w- flex items-center justify-between bg-[#2980B9] hover:bg-[#1F618D] text-white font-light text-lg shadow-md py-1.5 px-20.5 rounded-lg group"
              >
                <div className="flex items-center">
                  <Info className="w-5 h-5 mr-3 text-[#F9F9F9]" /> About Us
                </div>
                <ArrowLeft className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform text-[F9F9F9]" />
              </button>
            </li>
            <li>
              <button
                onClick={handleContactSupport}
                className="w- flex items-center justify-between bg-[#2980B9] hover:bg-[#1F618D] text-white font-light text-lg shadow-md py-1.5 px-13.5 rounded-lg  group"
              >
                <div className="flex items-center ">
                  <LifeBuoy className="w-5 h-5 mr-3 text-[#F9F9F9]" /> Contact Support
                </div>
                <div className='flex gap-6'>
                <ArrowLeft className="w-5 h-5 transform rotate-180 group-hover:translate-x-1 transition-transform text-[F9F9F9]" />
                </div>
              </button>
            </li>
          </ul>
        </div>
        </div>
        
        {/* End Popular Pages Section */}
    <Footer />
    </>
  );
}