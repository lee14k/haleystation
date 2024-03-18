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
  boldFont = true, // Default value is true, making font boldness optional
  linkUrlOne={},
  linkUrlTwo = "",
  linkUrlThree = "",
}) => {
  const router = useRouter();

  const handleClick = (url) => {
    if (url) {
      router.push(url);
    }
  };
  // Helper function to render photo or text block and optional caption
  // Added isFirstContent parameter to adjust caption size for the first content
  const renderContent = (
    photo,
    text1,
    text2,
    text3,
    caption,
    isFirstContent = false
  ) => {
    // Function to render a possibly linked text element
    const renderTextElement = (text, className, linkUrl) => {
      return <p className={className}>{text}</p>;
    };

    if (photo) {
    } else {
      const borderClass = showBorder
        ? "border-2 py-12 px-28 border-yellow-900"
        : "";
      const textClassBase = `text-center ${boldFont ? "font-bold" : ""}`;

      return (
        <>
          <div
            className={`flex flex-col h-300 w-300 items-center justify-center items-center mb-10 ${borderClass}`}
          >
            {text1 &&
              renderTextElement(text1, `${textClassBase} text-2xl`, linkUrlOne)}
            {text2 &&
              renderTextElement(text2, `${textClassBase} text-xl`, linkUrlTwo)}
            {text3 &&
              renderTextElement(
                text3,
                `${textClassBase} text-xl`,
                linkUrlThree
              )}
          </div>
          {caption && (
            <p
              className={`mt-2 text-center ${boldFont ? "font-bold" : ""} ${
                isFirstContent ? "text-3xl" : "text-xl"
              }`}
            >
              {caption}
            </p>
          )}
        </>
      );
    }
  };

  return (
    <div
      style={{ backgroundColor }}
      className={`headerbg flex flex-col justify-center items-evenly gap-4 pt-12 bg-${backgroundColor}`}
    >
      <div className="lg:flex lg:flex-col justify-center items-center">
        <div className={playfair.className}>
          <h1
            style={{ color: textColor }}
            className={`text-6xl ${
              boldFont ? "font-bold" : ""
            } text-${textColor}`}
          >
            {optionalHead}
          </h1>
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
        <Link href={linkUrlOne}>
                 <div onClick={() => handleClick(linkUrlOne)} className="cursor-pointer">
        <div onClick={() => handleClick(linkUrlOne)} className="cursor-pointer">

            {renderContent(photoOne, textOne, null, null, captionOne, true)}{" "}
            {/* Marked as first content */}
          </div>
          </div>
        </Link>
        <div
          className={`text-4xl flex flex-col justify-center items-center ${
            boldFont ? "font-bold" : ""
          }`}
        >
          {renderContent(photoTwo, textTwo, null, null, captionTwo)}
        </div>
        <div
          className={`text-4xl flex flex-col justify-center items-center ${
            boldFont ? "font-bold" : ""
          }`}
        >
          {renderContent(photoThree, textThree, null, null, captionThree)}
        </div>
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
