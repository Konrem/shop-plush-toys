"use client";

import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import toys from "@/app/content/toys";
import CardProduct from "../components/cardsProduct";
import asset from "../content/static";

export default function Products() {
  const products = toys;
  const { titleListToys } = asset;
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mx-auto py-4 flex-auto">
        <h2 className="text-3xl font-bold my-8">{titleListToys}</h2>
        <CardProduct products={products} />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
