import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";


const PVFill = ()=>{
    return (
        <div className="bridalone">
        <div>
          <div className=" spacebg text-6xl text-white flex justify-center items-center">
            <div>
              <h1 className="text-8xl text-white fancy-font">Preferred Vendors</h1>
            </div>
            <div className={lora.className}></div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-yellow-950 pink-box py-12 ">
          <div>
            <Image src="/hslighthouse.jpg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col px-10">
            <div className="text-6xl ">
              <h1 className={playfair.className}>Decorating</h1>
            </div>
            <div className={lora.className}>
            <ul>
                  <li> Ever After Decorating</li>
                  <li>1210 Ludington Street</li>
                  <li>Escanaba, MI 49829</li>
                  <li>
                    Amanda Castor 906-420-0226 everafterdecorating@hotmail.com
                  </li>
                </ul>
                <ul>
                  <li> Final Touches</li>
                  <li>15 South 10th Street</li>
                  <li>Gladstone, MI 49837</li>
                  <li>
                  Shelly Claycomb 906-420-4571
shelly@finaltouchesdesigns.com
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one  py-12 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="text-6xl  ">
                <h1 className={playfair.className}>Floral
  </h1>
              </div>
              <div className={lora.className}>
              <ul>
                  <li> CountrySide Acres Floral</li>
                  <li>Suzanna Inman 630-253-8125</li>
                  <li>countrysideacres@gmail.com</li>
                </ul>
                <ul>
                  <li> Ever After Decorating</li>
                  <li>1210 Ludington Street</li>
                  <li>Escanaba, MI 49829</li>
                  <li>
                    Amanda Castor 906-420-0226 everafterdecorating@hotmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/sunsrise.jpg" width={800} height={600} />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-yellow-950 py-12 pink-box px-4">
          <div>
            <Image src="/hswf.jpg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl ">
              <h1 className={playfair.className}>Event Rental</h1>
            </div>
            <div className={lora.className}>
            <ul>
                  <li>Martins Tents & More</li>
                  <li>Bark River, MI 49807</li>
                  <li>Laticiia Martin  906-420-1499
</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one py-12 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="text-6xl  ">
                <h1 className={playfair.className}>Photography
  </h1>
              </div>
              <div className={lora.className}>
              <ul>
                  <li> Aspen Leigh Photos</li>
                  <li>Marquette, MI </li>
                  <li>aspenleighphotos.com</li>
                </ul>
                <ul>
                  <li>Pinky Photo Booth</li>
                  <li>Escanaba, MI 49829 </li>
                  <li>Lisa Black 906-280-3511</li>
                </ul>
                <ul>
                  <li>Orange Cat Media</li>
                  <li>Gladstone, MI </li>
                  <li>Jason Hamre 623-340-2998</li>
                  <li>orangecatmedia.co</li>
                </ul>
                <ul>
                  <li>Portage Point Productions</li>
                  <li>Escanaba, MI 49829</li>
                  <li>Tyler 906-241-0868</li>
                  <li>portagepointproductions.com</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/sunsrise.jpg" width={800} height={600} />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 text-yellow-950 py-12 pink-box px-4">
          <div>
            <Image src="/hswf.jpg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl ">
              <h1 className={playfair.className}>Beauty</h1>
            </div>
            <div className={lora.className}>
            <ul>
                  <li> Serenity Salon</li>
                  <li>205 S. 10th St</li>
                  <li>Escanaba, MI 49829</li>
                  <li>Misha Gagne 906-789-9557</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one  py-12 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="text-6xl  ">
                <h1 className={playfair.className}>DJ
  </h1>
              </div>
              <div className={lora.className}>
              <ul>
                  <li> Morning Star Karaoke & DJ</li>
                  <li>Gladstone, MI 49837</li>
                  <li>Noah 248-727-3457</li>
                </ul>
                <ul>
                  <li> AMP'D UP ENTERTAINMENT</li>
                  <li>Escanaba, MI</li>
                  <li>Justin Wyckoff 906-280-8017</li>
                  <li>ampdupentertainment.net</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/sunsrise.jpg" width={800} height={600} />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 text-yellow-950 py-12 pink-box px-4">
          <div>
            <Image src="/hswf.jpg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl ">
              <h1 className={playfair.className}>Men's Attire</h1>
            </div>
            <div className={lora.className}>
            <ul>
                  <li> Youngs </li>
                  <li>1119 Ludington Street</li>
                  <li>Escanaba, MI 49829</li>
                  <li>906-786-2526</li>
                </ul>

            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one py-12 px-4">
            <div className="flex justify-center items-center flex-col">
              <div className="text-6xl  ">
                <h1 className={playfair.className}>Catering
  </h1>
              </div>
              <div className={lora.className}>
              <ul>
                  <li> Wiles Food Service</li>
                  <li>Escanaba, MI 49829</li>
                  <li>Matt Wiles 906-408-3185</li>
                  <li>wilesfoodservices.com</li>
                </ul>
                <ul>
                  <li>Elmers County Market</li>
                  <li>412 N. Lincoln Rd</li>
                  <li>Escanaba, MI 49829</li>
                  <li>906-789-0151</li>
                </ul>
                <ul>
                  <li> Thai'd UP</li>
                  <li>1835 3rd Ave N</li>
                  <li>Escanaba, MI</li>
                  <li>906-553-7425</li>
                </ul>
                <ul>
                  <li> Applewood Eatery and Espresso Bar</li>
                  <li>1307 Ludington St</li>
                  <li>906-786-6477</li>
                  <li>applewoodeatery@gmail.com</li>
                </ul>
              </div>
            </div>
            <div>
              <Image src="/sunsrise.jpg" width={800} height={600} />
            </div>
          </div>
      </div>
    )
}
export default PVFill;