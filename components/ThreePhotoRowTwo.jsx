import Link from "next/link";
import Image from "next/image";
const ThreePhotoRowTwo = ({
  photoOne,
  photoTwo,
  photoThree,
  textOne,
  textTwo,
  textThree,
  backgroundColor,
  optionalHead,
}) => {
  // Helper function to render photo or text block
  const renderContent = (photo, text1, text2, text3) => {
    if (photo) {
      return <Image src={photo} height={300} width={300} className="rounded" />;
    }
    return (
      <div
        className={`flex flex-col h-300 w-300 items-center justify-center items-center mb-10 ${
          text1 || text2 || text3
            ? "border-2 py-12 px-28 border-yellow-900	"
            : ""
        }`}
      >
        {text1 && <p className="text-center text-xl">{text1}</p>}
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
      <h1>{optionalHead}</h1>
      <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
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
