import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import collections from "@/app/content/groups";
import { notFound } from "next/navigation";
import Image from "next/image";
import toys from "@/app/content/toys";
import CardsProduct from "@/app/components/cardsProduct";
import asset from "@/app/content/static";

export default async function GroupPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection } = await params;
  const group = collections.find((n) => n.collection === collection);
  if (!group) return notFound();

  const products = toys.filter((toy) =>
    toy.collections.includes(group.collection),
  );

  const { titleListToys, emptyCollection } = asset;

  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mx-auto py-4 flex-auto">
        <div className="grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8">
          <Image
            src={group.image}
            alt=""
            width={400}
            height={400}
            className="rounded-3xl object-cover w-full"
          />
          <div className="lg:col-span-2">
            <h2 className="text-xl lg:text-3xl font-bold my-2 lg:my-4">
              {titleListToys}
              <span className="italic">&ldquo;{group.title}&rdquo;</span>
            </h2>
            <p className="text-base px-2 py-4">{group.fullDescription}</p>
          </div>
        </div>
        {products.length !== 0 ? (
          <CardsProduct products={products} />
        ) : (
          <div className="w-full text-2xl px-4 text-center font-bold whitespace-pre-wrap">
            {emptyCollection}
          </div>
        )}
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
