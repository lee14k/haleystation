import Link from "next/link";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
export default function HomeThreePic({ images }) {
  return (
    <div className={lora.className}>
    <div className="py-12">
      <div className="gallerycontainer flex justify-center pb-10 bg-white">
        <div className="container  bg-white">
          <div className="gallery bg-white">
            {images.map((item, index) => (
              <Link href={item.page} key={index}>
                <div className="gallery__item-wrapper">
                  <div
                    style={{ backgroundImage: `url(${item.link})` }}
                    className={`gallery__item gallery__item--${index + 1}`}
                  >
                    <figcaption className="gallery__caption text-4xl flex">
                      {item.header}
                    </figcaption>
                  </div>
                  <span className="mobile-caption text-4xl bg-white">
                    {item.header}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
