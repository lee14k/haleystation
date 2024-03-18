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
  showBorder = true // Default value is true, making border display by default
}) => {
  // Helper function to render photo or text block
  const renderContent = (photo, text1, text2, text3) => {
    if (photo) {
      return <Image src={photo} height={300} width={300} className="rounded" />;
    }
    // Conditional class to apply border based on showBorder prop
    const borderClass = showBorder ? "border-2 py-12 px-28 border-yellow-900" : "";
    return (
      <div
        className={`flex flex-col h-300 w-300 items-center justify-center mb-10 ${borderClass}`}
      >
        {text1 && <p className="text-center text-2xl">{text1}</p>}
        {text2 && <p className="text-center text-xl">{text2}</p>}
        {text3 && <p className="text-center text-xl">{text3}</p>}
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
          <h1 style={{ textColor }} className={`text-6xl text-${textColor}`} >{optionalHead}</h1>
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
        <div className="text-8xl flex flex-col justify-center items-center font-bold ">
          {renderContent(photoOne, textOne)}
        </div>
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
          {renderContent(photoTwo, textTwo)}
        </div>
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
          {renderContent(photoThree, textThree)}
        </div>
      </div>
    </div>
  );
};

export default ThreePhotoRowTwo;
