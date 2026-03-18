import Image from "next/image";

export default function Collections() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-white border-4 border-white rounded-3xl mx-6 md:mx-0">
            <Image src="/redhair toys.jpg" alt="" width={400} height={400} className="rounded-t-3xl object-cover w-full" />
            <div className="text-center my-4">
              <p className="text-base font-bold">Redhair Friends</p>
              <p className="text-sm font-medium text-wrap mt-2">Колекція рудих плюшевих іграшок: ідеально підходить для дітей.</p>
            </div>
          </div>
          <div className="bg-white border-4 border-white rounded-3xl mx-6 md:mx-0">
            <Image src="/pait toys.jpg" alt="" width={400} height={400} className="rounded-t-3xl object-cover w-full" />
            <div className="text-center my-4">
              <p className="text-base font-bold">Pair Friends</p>
              <p className="text-sm font-medium text-wrap mt-2">Колекція парних плюшевих іграшок: ідеально підходить для пар.</p>
            </div>
          </div>
          <div className="bg-white border-4 border-white rounded-3xl mx-6 md:mx-0">
            <Image src="/fantasy-toys.jpg" alt="" width={400} height={400} className="rounded-t-3xl object-cover w-full" />
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
