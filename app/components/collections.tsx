import Image from "next/image";
import Link from "next/link";
import Groups from "@/app/content/groups";

export default function Collections() {
  const collections = Groups;

  return (
    <>
      <div className="container px-2 mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {collections.map((collection, index) => (
            <Link href={`/collections/${collection.collection}`} key={index}>
              <div
                className="bg-white border-2 border-white rounded-3xl mx-6 md:mx-0"
                key={index}
              >
                <Image
                  src={collection.image}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-t-3xl object-cover w-full"
                />
                <div className="text-center m-4">
                  <p className="text-base font-bold">{collection.title}</p>
                  <p className="text-sm font-medium text-wrap mt-2">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
