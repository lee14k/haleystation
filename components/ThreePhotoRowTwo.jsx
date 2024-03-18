import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

const ThreePhotoRowTwo = ({
  photoOne,
  photoTwo,
  photoThree,
  textOne,
  textTwo,
  textThree,
  backgroundColor,
  optionalHead,
  textColor,
  showBorder = true,
  boldFont = true 
}) => {
  const renderContent = (photo, text1, text2, text3) => {
    if (photo) {
      return <Image src={photo} height={300} width={300} className="rounded" />;
    }
    const borderClass = showBorder ? "border-2 py-12 px-28 border-yellow-900" : "";
    const textClass = `text-center ${boldFont ? "font-bold" : ""}`;
    return (
      <div
        className={`flex flex-col h-300 w-300 items-center justify-center items-center mb-10 ${borderClass}`}
      >
        {text1 && <p className={`${textClass} text-2xl`}>{text1}</p>}
        {text2 && <p className={`${textClass} text-xl`}>{text2}</p>}
        {text3 && <p className={`${textClass} text-xl`}>{text3}</p>}
      </div>
    );
  };

  return (
    <div
      style={{ backgroundColor }}
      className={`headerbg flex flex-col justify-center items-evenly gap-4 pt-12 bg-${backgroundColor}`}
    >
      <div className="lg:flex lg:flex-col justify-center items-center">
        <div className={playfair.className}>
          <h1 style={{ color: textColor }} className={`text-6xl ${boldFont ? "font-bold" : ""} text-${textColor}`}>{optionalHead}</h1>
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
        <div className={`text-8xl flex flex-col justify-center items-center ${boldFont ? "font-bold" : ""}`}>
          {renderContent(photoOne, textOne)}
        </div>
        <div className={`text-4xl flex flex-col justify-center items-center ${boldFont ? "font-bold" : ""}`}>
          {renderContent(photoTwo, textTwo)}
        </div>
        <div className={`text-4xl flex flex-col justify-center items-center ${boldFont ? "font-bold" : ""}`}>
          {renderContent(photoThree, textThree)}
        </div>
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
