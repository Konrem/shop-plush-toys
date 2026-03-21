import Image from "next/image";

export default function TitleBlock(props: { image: string; title: string }) {
  return (
    <div className="flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">
      <div className="bg-white border-2 border-[#BF8B70] px-6 md:px-8 rounded-full text-center flex items-center">
        <Image src={props.image} alt="" width={24} height={24} />
        <p className="text-base md:text-xl p-2 text-[#29180F] font-medium">
          {props.title}
        </p>
      </div>
    </div>
  );
}
