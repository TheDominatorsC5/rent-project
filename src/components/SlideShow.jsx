import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, ArrowLeft, ArrowRight, Heart, } from "lucide-react";

// const images = [
//     "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?q=80&w=854&auto=format&fit=crop",
//     "https://plus.unsplash.com/premium_photo-1670359039064-1b85cdf8a589?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1661107259637-4e1c55462428?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1734543932046-1494a324dddf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1722858815002-415ca432d056?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1675615949585-36aaf4cb778d?q=80&w=406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

export default function SlideShow({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    const handleClose = () => {
        navigate(-1);
    };

    // Prevent background scroll on mobile fullscreen
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
    <div className="fixed inset-0 z-50 bg-black overflow-y-auto">
      <div className="relative max-w-[1200px] mx-auto min-h-screen flex flex-col sm:flex-none sm:min-h-0">

        {/* Mobile / Small */}
        <div className="sm:hidden flex flex-col">
          <div className="flex justify-between items-center p-4">

            <Heart className="stroke-white size-8 p-2 ml-4 rounded-full hover:bg-red-600 cursor-pointer" />

            <p className="text-white">{currentIndex + 1} / {images.length}</p>

            <button onClick={handleClose} className="text-white p-2 hover:bg-red-600 rounded">
              <X className="stroke-white" />
            </button>
            
          </div>

          <div className="flex items-center justify-between px-4">
            <ArrowLeft onClick={goPrev} className="hidden stroke-white size-8 p-2 rounded-full hover:bg-zinc-600 cursor-pointer" />
            <img src={images[currentIndex]} alt="" className="max-h-[60vh] object-contain mx-2" />
            <ArrowRight onClick={goNext} className="hidden stroke-white size-8 p-2 rounded-full hover:bg-zinc-600 cursor-pointer" />
          </div>

          <div className="flex justify-center items-center overflow-x-auto space-x-1 p-4">
            {images.map((img, idx) => (
              <img
                key={idx} 
                src={img} 
                alt=""
                onClick={() => goToImage(idx)}
                className={`w-16 h-14 object-cover rounded cursor-pointer border-2 ${
                  idx === currentIndex ? "border-red-500" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden sm:block px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <Heart className="stroke-white size-10 p-2 ml-2 rounded-full hover:bg-red-600 cursor-pointer" />
            <p className="text-white text-lg">{currentIndex + 1} / {images.length}</p>
            <button onClick={handleClose} className="text-white px-3 py-1 hover:bg-red-600 rounded flex items-center">
              <X className="stroke-white size-6" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-8">
            <ArrowLeft onClick={goPrev} className="stroke-white size-10 p-2 rounded-full hover:bg-zinc-600 cursor-pointer" />
            <img src={images[currentIndex]} alt="" className="max-h-[70vh] object-contain mx-4 flex-grow" />
            <ArrowRight onClick={goNext} className="stroke-white size-10 p-2 rounded-full hover:bg-zinc-600 cursor-pointer" />
          </div>

          <div className="flex justify-center items-center overflow-x-auto space-x-4">
            {images.map((img, idx) => (
              <img
                key={idx} src={img} alt=""
                onClick={() => goToImage(idx)}
                className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${
                  idx === currentIndex ? "border-red-500" : "border-transparent opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
