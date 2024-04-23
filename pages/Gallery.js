import PhotoGallery from "@/components/PhotoGallery";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Gallery = () => {
    return (
        <div>
      <Navbar />
            <div className=" spacebg text-6xl flex justify-center items-center">
            <h1 className="text-8xl fancy-font text-white">Gallery</h1>
          </div>
            <PhotoGallery />
            <Footer/>
        </div>
    )
}

export default Gallery;