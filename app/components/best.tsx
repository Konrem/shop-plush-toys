"use client";
import Image from "next/image";
import { Rating } from "@siamf/rating";

export default function Best() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 px-4">
          <div className="bg-white border-4 border-white rounded-3xl overflow-hidden">
            <div className="bg-[#F5E4DC] rounded-t-3xl">
              <Image src="/toy1.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4.5} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">25$</p>
            </div>
          </div>
          <div className="bg-white border-4 border-white rounded-3xl overflow-hidden">
            <div className="bg-[#F5E4DC] rounded-t-3xl">
              <Image src="/toy2.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4.8} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">30$</p>
            </div>
          </div>
          <div className="bg-white border-4 border-white rounded-3xl overflow-hidden">
            <div className="bg-[#F5E4DC] rounded-t-3xl">
              <Image src="/toy1.png" alt="Logo" width={300} height={300} />
            </div>
            <div className="flex justify-center flex-col items-center mt-4">
              <p className="text-base font-medium py-1">Fantasy Friends</p>
              <Rating value={4.3} readOnly={true} size={16} />
              <p className="text-base font-semibold py-1">25$</p>
            </div>
          </div>
          <div className="bg-white border-4 border-white rounded-3xl overflow-hidden">
            <div className="bg-[#F5E4DC] rounded-t-3xl">
              <Image src="/toy2.png" alt="Logo" width={300} height={300} />
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
