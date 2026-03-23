"use client";

import Link from "next/link";
import Image from "next/image";
import { Rating } from "@siamf/rating";

type Product = {
  toy: string;
  title: string;
  rating: number;
  mainImage: string;
  images: string[];
  description: string;
  price: string;
  size: string;
  material: string;
  availability: boolean;
  crafting: string;
  features: string;
  collections: string[];
};

export default function CardProduct({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
      {products.map((product, index) => (
        <Link
          href={`/products/${product.toy}`}
          key={index}
          className="hover:scale-115 transition-all duration-500"
        >
          <div className="bg-white border-2 border-white rounded-3xl overflow-hidden">
            <div className="bg-[#F5E4DC] rounded-t-3xl">
              <Image
                src={product.mainImage}
                alt={product.title}
                width={300}
                height={200}
                className="w-full object-contain"
              />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">{product.title}</p>
              <Rating value={product.rating} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">{product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
