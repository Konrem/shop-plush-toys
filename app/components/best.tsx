"use client";

import toys from "../content/toys";
import CardsProduct from "./cardsProduct";

export default function Best() {
  const bestProducts = toys.sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <>
      <div className="container px-2 mx-auto">
        <CardsProduct products={bestProducts} />
      </div>
    </>
  );
}
