import Image from "next/image";
import React from "react";
import Link from "next/link";
import Tribal from "@/public/offer-card.avif";
export default function OfferCard() {
  return (
   <Link href="/offer" > <div className="offer-card w-full h-40 rounded-lg  relative">
      <div className="offer-card__image w-full  ">
        <Image
          src={Tribal}
          alt="tribal brew coffee"
          layout="fill"
          objectFit="cover"
          className="opacity-60 rounded-lg"
        />
      </div>
      <div className="offer-card__content p-2  bottom-24 left-0 w-full h-16  rounded-b-lg">
        <div className="offer-card__content__text absolute ">
          <h1 className="text-lg font-bold">TRIBAL BREW COFFEE</h1>
          <p className="text-xs">Available</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center p-0">
          <p className=" rounded-md p-1 text-sm">BEL Road, Bangalore</p>
          <p className=" rounded-md p-1 text-lg font-bold px-8">300</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
