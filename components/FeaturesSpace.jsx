import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";

export default function FeaturesSpace() {
  return (
    <div className="green-box ">
      <div className="grid grid-cols-2 text-yellow-950  py-12 px-4">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl text-white">
            <h1 className={playfair.className}>The Space</h1>
          </div>
          <div className={lora.className}>
            <h2>Features</h2>
            <p className="tracking-widest text-white">
              Please call us for 2024 rates. If the venue knows their rates,
              let’s type them here. Are there standard packages/add ons?
            </p>
            <ul>
              <li>
                A white interior with picture frame wall moldings and tons of
                natural light
              </li>
              <li>Large modern black windows with black grids</li>
              <li>Expansive front windows</li>
              <li>Dark moody tall tray ceiling</li>
              <li>11 foot ceilings with accent moldings</li>
              <li>Elegant dimmable chandeliers</li>
              <li>Modern black ceiling fans</li>
              <li>Custom statement doors, black with brass hardware</li>
            </ul>
          </div>
          <button className="ctabutton bridalone brown-text px-8 py-6 text-3xl">
            Book Today!
          </button>
        </div>
      </div>
    </div>
  );
}
