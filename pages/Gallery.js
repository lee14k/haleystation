import PhotoGallery from "@/components/PhotoGallery";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Gallery = () => {
    return (
        <div>
      <Navbar />
            <div className=" spacebg text-6xl flex justify-center items-center flex-col text-white">
                <h1 className="text-8xl fancy-font ">Gallery</h1>
                <p className="text-2xl mx-24 text-center other-font">
                    Did you celebrate at Haley Station? Tag us on Facebook and Instagram
                    @haley_station- we’d love to see photos of your special day!
                </p>
            </div>
            <PhotoGallery/>
            <Footer/>
        </div>
    )
}
export default Gallery;