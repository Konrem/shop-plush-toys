import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Info({ type, info }: { type: string; info: any[] }) {
  return (
    <>
      <div className="container px-2 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {info.map((item, index) => (
          <div
            className="bg-white border-2 border-[#BF8B70] p-4 rounded-3xl flex items-center flex-col mx-6 md:mx-0"
            key={index}
          >
            <div
              className={`flex items-center ${type === "information" ? "flex-col justify-center" : "flex-row justify-start w-full"}`}
            >
              {type === "information" && (
                <div className="flex items-center justify-center bg-[#E1EDE9] rounded-full w-16 h-16 mb-4">
                  <Image src={item.image} alt="" height={40} width={40} />
                </div>
              )}
              {type === "reviews" && (
                <div className="flex items-center justify-center bg-[#E1EDE9] rounded-full w-12 h-12">
                  <div className="text-[30px] font-serif">{item.title[0]}</div>
                </div>
              )}

              <p className="text-base p-2 text-[#29180F] font-semibold">
                {item.title}
              </p>
            </div>
            <p
              className={`text-sm p-2 text-[#29180F] font-medium ${type === "information" ? "text-center" : "text-left"}`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
