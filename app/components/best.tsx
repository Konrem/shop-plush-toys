"use client";

import toys from "../content/toys";
import Link from "next/link";
import CardsProduct from "./cardsProduct";
import asset from "../content/static";

export default function Best() {
  const bestProducts = toys.sort((a, b) => b.rating - a.rating).slice(0, 5);

  const {viewAll} = asset;

  return (
    <>
      <div className="container px-2 mx-auto">
        <CardsProduct products={bestProducts} />
        <div className="w-full flex justify-center mt-8">
          <Link
            href="#"
            className="py-2 px-4 border-2 text-white border-white rounded-full bg-[#BF8B70] shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500"
          >
           {viewAll}
          </Link>
        </div>
      </div>
    </>
  );
}
