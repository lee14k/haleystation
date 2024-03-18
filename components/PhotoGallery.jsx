export default function PhotoGallery() {
  const images = [
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
  ];
  const photoRow = [
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
    "/stok1.jpg",
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-6xl">Gallery</h1>
     
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-2">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="lg:flex my-10">
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-xl mx-24">Did you celebrate at Haley Station? Tag us on Facebook and Instagram @HaleyStationVenue-- we’d love to see photos of your special day! </p>
    </div>
  );
}
