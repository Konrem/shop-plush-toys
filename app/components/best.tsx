"use client";
import Image from "next/image";
import { Rating } from "@siamf/rating";

export default function Best() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-12">
          <div className="bg-white p-2 rounded-3xl w-[300px]">
            <div className="bg-[#F7F2EC] rounded-3xl">
              <Image src="/toy.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">30$</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl w-[300px]">
            <div className="bg-[#F7F2EC] rounded-3xl">
              <Image src="/toy.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">30$</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl w-[300px]">
            <div className="bg-[#F7F2EC] rounded-3xl">
              <Image src="/toy.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">30$</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl w-[300px]">
            <div className="bg-[#F7F2EC] rounded-3xl">
              <Image src="/toy.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">30$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
