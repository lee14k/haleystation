import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import {BiLogoFacebookCircle, BiLogoInstagram} from "react-icons/bi";

export default function UpcomingEvents () {
    const eventFlyers=[
        {url:'/maker-market.jpg', title:'Makers Market', date:'Saturday, September 14th', time:'6PM', buttonLink:'https://checkout.square.site/merchant/MLBP9FKSKEREJ/checkout/YGW4VYCDOAZTEIBORJQCFBYH?fbclid=IwY2xjawE9BPpleHRuA2FlbQIxMAABHb_BBPWcxeYLhB6FygmQ-RsfG-b_JU_3BeMJRKJzrn1hOfaLArV3kPYpgA_aem_2scjM_slcqS3QPEnxiBOEQ', learnMoreLink:'https://www.facebook.com/events/1546888212889187'},
        {url:'/halloween-gala.jpg', title:'Halloween Gala', date: 'Saturday, October 26th', time:'7PM', buttonLink:'https://checkout.square.site/merchant/MLBP9FKSKEREJ/checkout/I5SZTKCLCFAATJZ4H6ZB4WVV?fbclid=IwY2xjawE9CG1leHRuA2FlbQIxMAABHct2dhsVFSlgljDm2eBF4AufpIIDxZvYfnTyGusTsvb6uJ0_AOxVpjkBbQ_aem_xsCNH_yPloppuNJ3XQu1ig',
            learnMoreLink:'https://www.facebook.com/events/816369864031281'},
        {url:'/mom-prom.jpg',  title: (<><span>Mom <br />Prom</span></>),  date: 'Saturday, November 16th', time:'8PM', buttonLink:'https://checkout.square.site/merchant/MLBP9FKSKEREJ/checkout/FWJF3LGHEYGQG6PMK26WGJ74?fbclid=IwY2xjawE9CF1leHRuA2FlbQIxMAABHb_BBPWcxeYLhB6FygmQ-RsfG-b_JU_3BeMJRKJzrn1hOfaLArV3kPYpgA_aem_2scjM_slcqS3QPEnxiBOEQ',
            learnMoreLink:'https://www.facebook.com/events/2790258611152101'},
    ]
    return (
        <div>
            <Navbar/>
            <div className="  new-space-bg text-white flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-12">
                    <h1 className="text-8xl fancy-font">Upcoming Events</h1>
                    <p className={`text-3xl mx-24 text-center ${lora.className}`}>When we aren't helping local families
                        celebrate their special events, we love hosting our own special events! From evening markets
                        with local artisans and artists, to themed holiday parties and incredible galas benefitting
                        local charities, we love throwing incredible events for our community.</p>
                    <p className={`text-2xl mx-24 text-center ${lora.className}`}> Check out what we have coming up on
                        our social media pages!</p>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center ">
                    <ul className="flex gap-12">
                        <li className="flex">
                            <Link href="https://www.facebook.com/profile.php?id=100090651140892">
                                <BiLogoFacebookCircle className="h-24 w-24 "/>
                            </Link>
                        </li>
                        <li className="flex">
                            <Link href="https://www.instagram.com/haley_station?igsh=MTlqM2p4YmRxaGdmbg==">
                                <BiLogoInstagram className="h-24 w-24"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}