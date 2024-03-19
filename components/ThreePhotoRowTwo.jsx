import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import { useRouter } from "next/router";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const ThreePhotoRowTwo = ({
  photoOne,
  photoTwo,
  photoThree,
  textOne,
  textTwo,
  textThree,
  captionOne,
  captionTwo,
  captionThree,
  backgroundColor,
  optionalHead,
  textColor,
  showBorder = true,
  boldFont = true,
  isTextWhite = false, // New prop for conditional text color
  linkUrlOne = "",
  linkUrlTwo = "",
  linkUrlThree = "",
}) => {
  // Helper function to render photo or text block and optional caption
  const renderContent = (
    photo,
    text,
    caption,
    linkUrl,
    isFirstContent = true
  ) => {
    const borderClass = showBorder
      ? "border-2 py-12 px-28 border-yellow-900"
      : "";
    const textClassBase = `text-center  ${boldFont ? "font-bold" : ""} ${
      isFirstContent ? "text-xl" : "text-xl"
    } ${isTextWhite ? "text-white" : ""}`; // Modify here to include conditional text color

    return (
      <>
        <div
          className={`flex flex-col h-300 w-300 items-center justify-center mb-10 ${borderClass}`}
        >
          {photo && <Image src={photo} alt="" width={500} height={500} />}
          {text && <p className={textClassBase}>{text}</p>}
        </div>
        {caption && (
          <p
            className={`mt-2 text-center ${boldFont ? "font-bold" : ""} ${
              isFirstContent ? "text-xl" : "text-xl"
            } ${isTextWhite ? "text-white" : ""}`} // Also here
          >
            {caption}
          </p>
        )}
      </>
    );
  };

  return (
    <div
      style={{ backgroundColor }}
      className={`flex flex-col justify-center items-evenly gap-4 pt-12`}
    >
      <div className="lg:flex lg:flex-col justify-center items-center">
        <div className={lora.className}>
          <h1
            style={{ color: textColor }}
            className={`text-6xl brown-text ${boldFont ? "font-bold" : ""} ${
              isTextWhite ? "text-white" : ""
            }`} // And here
          >
            {optionalHead}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
        {linkUrlOne ? (
          <Link href={linkUrlOne}>
            {renderContent(photoOne, textOne, captionOne, linkUrlOne, true)}
          </Link>
        ) : (
          renderContent(photoOne, textOne, captionOne, linkUrlOne, true)
        )}
        {linkUrlTwo ? (
          <Link href={linkUrlTwo}>
            {renderContent(photoTwo, textTwo, captionTwo, linkUrlTwo)}
          </Link>
        ) : (
          renderContent(photoTwo, textTwo, captionTwo, linkUrlTwo)
        )}
        {linkUrlThree ? (
          <Link href={linkUrlThree}>
            {renderContent(photoThree, textThree, captionThree, linkUrlThree)}
          </Link>
        ) : (
          renderContent(photoThree, textThree, captionThree, linkUrlThree)
        )}
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
