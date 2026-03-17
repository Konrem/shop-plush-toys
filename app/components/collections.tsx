import Image from "next/image";

export default function Collections() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex items-center justify-center gap-12">
          <div className="bg-white p-2 rounded-3xl w-[400px]">
            <Image src="/redhair toys.jpg" alt="" width={400} height={400} className="rounded-3xl" />
            <div className="text-center my-4">
              <p className="text-base font-bold">Redhair Friends</p>
              <p className="text-sm font-medium text-wrap mt-2">Колекція рудих плюшевих іграшок: ідеально підходить для дітей.</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl w-[400px]">
            <Image src="/pait toys.jpg" alt="" width={400} height={400} className="rounded-3xl" />
            <div className="text-center my-4">
              <p className="text-base font-bold">Pair Friends</p>
              <p className="text-sm font-medium text-wrap mt-2">Колекція парних плюшевих іграшок: ідеально підходить для пар.</p>
            </div>
          </div>
          <div className="bg-white p-2 rounded-3xl w-[400px]">
            <Image src="/fantasy-toys.jpg" alt="" width={400} height={400} className="rounded-3xl" />
            <div className="text-center my-4">
              <p className="text-base font-bold">Fantasy Friends</p>
              <p className="text-sm font-medium text-wrap mt-2">Колекція фантастичних плюшевих іграшок: ідеально підходить для мрій.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
