import Image from "next/image";

export default function TitleBlock() {
  return (
    <div className="flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
      <div className="bg-white border-2 border-[#BF8B70] px-8 rounded-full text-center flex items-center">
        <Image src="/icon-toys.svg" alt="Star Icon" width={24} height={24} />
        <p className="text-xl p-2 text-[#29180F] font-medium font-serif">
          Наші найкращі пропозиції для вас!
        </p>
      </div>
    </div>
  );
}
