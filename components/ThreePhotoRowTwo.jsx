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
  isTextWhite = false,
  linkUrlOne = "",
  linkUrlTwo = "",
  linkUrlThree = "",
  listItems = [], // New prop for optional list
}) => {
  // Helper function to render photo or text block and optional caption

  const renderListItems = (items) => {
    return items.map((item, index) => {
      if (item.type === "text") {
        return (
          <p key={index} className="text-center">
            {item.content}
          </p>
        );
      } else if (item.type === "image") {
        return (
          <div key={index} className="flex justify-center">
            <Image
              src={item.content.src}
              alt={item.content.alt}
              width={item.content.width}
              height={item.content.height}
            />
          </div>
        );
      }
    });
  };
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
        <div className="fancy-font">
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
        {listItems.length > 0 && (
          <div className="my-8">{renderListItems(listItems)}</div>
        )}

        {linkUrlTwo ? (
          <Link href={linkUrlTwo}>
            {renderContent(photoTwo, textTwo, captionTwo, linkUrlTwo)}
          </Link>
        ) : (
          renderContent(photoTwo, textTwo, captionTwo, linkUrlTwo)
        )}
        {listItems.length > 0 && (
          <div className="my-8">{renderListItems(listItems)}</div>
        )}

        {linkUrlThree ? (
          <Link href={linkUrlThree}>
            {renderContent(photoThree, textThree, captionThree, linkUrlThree)}
          </Link>
        ) : (
          renderContent(photoThree, textThree, captionThree, linkUrlThree)
        )}
        {listItems.length > 0 && (
          <div className="my-8">{renderListItems(listItems)}</div>
        )}
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
