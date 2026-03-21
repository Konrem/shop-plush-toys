import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import toys from "@/app/content/toys";
import { notFound } from "next/navigation";
import Slider from "./slider";
import asset from "@/app/content/static";

export default async function ToyPage({
  params,
}: {
  params: Promise<{ toy: string }>;
}) {
  const { toy } = await params;

  const product = toys.find((n) => n.toy === toy);

  if (!product) return notFound();

  const imagesGallery = [product.mainImage, ...product.images];

  const warning = asset.warning;
   const characteristics = asset.product;

  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mx-auto mt-8 flex-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Slider images={imagesGallery} />
        </div>
        <div className="m-2">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-base mt-2">
            {product.availability ? (
              <span className="font-bold text-green-500 mr-2">
               {characteristics.isAvailability}
              </span>
            ) : (
              <span className="font-bold text-red-500 mr-2">
                {characteristics.noAvailability}
              </span>
            )}
          </p>
          <p className="text-xl font-bold mt-2">
            <span className="mr-2"> {characteristics.price}</span>
            {product.price}
          </p>
          <p className="text-base mt-2">
            <span className="font-bold mr-2">{characteristics.description}</span>
            {product.description}
          </p>
          <p className="text-base mt-2">
            <span className="font-bold mr-2">{characteristics.size}</span>
            {product.size}
          </p>
          <p className="text-base mt-2">
            <span className="font-bold mr-2">{characteristics.material}</span>
            {product.material}
          </p>
          <p className="text-base mt-2">
            <span className="font-bold mr-2">{characteristics.craftingDate}
            </span>
            {product.crafting}
          </p>
          <p className="text-base mt-2">
            <span className="font-bold mr-2">{characteristics.features}</span>
            {product.features ? product.features : "—"}
          </p>
        </div>
      </div>
      <div className="font-bold text-base text-center whitespace-pre-wrap rounded-3xl bg-white m-4 p-4">
        {warning}
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}