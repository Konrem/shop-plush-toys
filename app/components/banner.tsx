import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      <Image
        src="/banner-image.jpg"
        alt="Banner Image"
        width={1200}
        height={500}
        className="w-full min-h-[500px] max-h-[650px] object-cover -z-1"
      />
      <div className="flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 text-nowrap">
        <div className="bg-white rounded-l-full pl-4 pr-10 text-center z-2">
          <p className="text-base p-4 font-medium">
            Пропозиція від виробника
          </p>
        </div>
        <div className="bg-[#BF8B70] px-8 rounded-full text-center -ml-10 z-3">
          <p className="text-base p-4 text-white font-medium">
            Знижка 10% на ведмедів у світлих кольорах!
          </p>
        </div>
      </div>
    </div>
  );
}
