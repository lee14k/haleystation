import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import { useRouter } from "next/router";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// Define the List component outside the renderContent function
const List = ({ list }) => {
  if (!Array.isArray(list) || list.length === 0) {
    // If 'list' is not an array or it's empty, don't render anything
    return null;
  }

  return (
    <ul className="list-disc list-inside">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

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
  listItems = [], // This is now used only in the first box
}) => {
  // Helper function to render photo or text block, optional caption, and potentially a list
  const renderContent = (
    photo,
    text,
    caption,
    linkUrl,
    list = [], // Default to an empty array if no list is passed
    isFirstContent = false
  ) => {
    const content = (
      <div className={`flex flex-col h-300 w-300 items-center justify-center mb-10 ${showBorder ? "border-2 py-12 px-28 border-yellow-900" : ""}`}>
        {photo && <Image src={photo} alt="" width={500} height={500} />}
        {text && <p className={`text-center ${boldFont ? "font-bold" : ""} ${isFirstContent ? "text-xl" : "text-xl"} ${isTextWhite ? "text-white" : ""}`}>{text}</p>}
        {caption && (
          <p className={`mt-2 text-center ${boldFont ? "font-bold" : ""} ${isFirstContent ? "text-xl" : "text-xl"} ${isTextWhite ? "text-white" : ""}`}>
            {caption}
          </p>
        )}
        {/* Conditionally render the list here, within the bordered area, only if list is provided */}
        {isFirstContent && <List list={list} />}
      </div>
    );

    return linkUrl ? <Link href={linkUrl}>{content}</Link> : content;
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
            }`}
          >
            {optionalHead}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
        {/* Only pass the listItems to the first renderContent call */}
        {renderContent(photoOne, textOne, captionOne, linkUrlOne, listItems, true)}
        {renderContent(photoTwo, textTwo, captionTwo, linkUrlTwo)}
        {renderContent(photoThree, textThree, captionThree, linkUrlThree)}
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
