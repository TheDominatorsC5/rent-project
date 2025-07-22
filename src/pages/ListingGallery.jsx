import SlideShow from "../components/SlideShow";
import { useLocation } from "react-router";

export default function ListingGallery() {
    const location = useLocation();
    const images = location.state.images

    return (
        <>
            <div>
                <SlideShow
                images={images} />
            </div>

        </>
    );
}