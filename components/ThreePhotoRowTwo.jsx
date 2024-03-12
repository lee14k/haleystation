import Link from "next/link";
import Image from "next/image";
const ThreePhotoRowTwo = ({photoOne, photoTwo, photoThree}) => {
    return (
        <div className="headerbg flex flex-col justify-center items-center gap-4 py-24">
        <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
          <div className="text-4xl flex flex-col justify-center items-center font-bold ">
            <Image src={photoOne} height={300} width={300} className="rounded" />
            <h4>Hand Smoked BBQ</h4>
          </div>
          <div className="text-4xl flex flex-col justify-center items-center font-bold ">
            <Image
              src={photoTwo}
              height={350}
              width={350}
              className="rounded"
            />
            <h4>All Day Breakfast</h4>{" "}
          </div>
          <div className="text-4xl flex flex-col justify-center items-center font-bold ">
            <Image src={photoThree} height={270} width={270} className="rounded" />
            <h4>Lunch & Other Bites</h4>{" "}
          </div>
        </div>
        <Link href='/menu'>
        <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          View Menu
        </button>
        </Link>
      </div>
    );
    }
export default ThreePhotoRowTwo;