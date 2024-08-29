export default function PhotoGallery() {
  const images = [    "new-faq.jpg","/newhsphotot2.jpg", "/newhsphoto3.jpg"];
  const photoRow = [
    "/newhsphoto4-min.jpg",
    "/new-long-line.jpg",
      "/newhsphoto1.jpg",
    "/newhsphoto6-min.jpg",
    "/hsone-min.jpg",
    "/hstwo-min.jpg",
    "/buffet-min.jpg",
      "new-rates.jpg",
      "new-hs-wed.jpg",
      "/newhsphoto5-min.jpg",
      "/new-bar.jpg",
      "/new-gal-hs.jpg",
      "/new-gal-hs2.jpg",
        "/new-gal-hs-3.jpg",
        "/new-gal-hs-4.jpg",

  ];

  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-1">
        {images.map((image, index) => (
          <div key={index} className="w-full ">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 my-10">
        {photoRow.map((image, index) => (
          <div key={index} className="w-full h-72 overflow-hidden">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
