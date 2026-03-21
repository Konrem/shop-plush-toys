import Image from "next/image";
import asset from "../content/static";

export default function Banner() {
  const { bannerOffer, bannerDiscount } = asset;
  return (
    <div className="relative">
      <Image
        src="/banner-image.jpg"
        alt=""
        width={1200}
        height={500}
        className="w-full min-h-[500px] max-h-[650px] object-cover -z-1"
      />
      <div className="flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 text-nowrap">
        <div className="hidden sm:block bg-white rounded-l-full pl-4 pr-6 md:pr-10 text-center z-2">
          <p className="text-sm md:text-base p-2 md:p-4 font-medium">
            {bannerOffer}
          </p>
        </div>
        <div className="bg-[#BF8B70] px-4 md:px-8 rounded-full text-center -ml-6 md:-ml-10 z-3">
          <p className="text-sm md:text-base p-2 md:p-4 text-white font-medium">
            {bannerDiscount}
          </p>
        </div>
      </div>
    </div>
  );
}
