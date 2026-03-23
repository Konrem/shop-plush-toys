import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import collections from "@/app/content/groups";
import { notFound } from "next/navigation";
import Image from "next/image";
import toys from "@/app/content/toys";
import CardsProduct from "@/app/components/cardsProduct";
import asset from "@/app/content/static";
import articles from "@/app/content/articles";

export default async function GroupPage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const paper = articles.find((n) => n.article === article);
  if (!paper) return notFound();

  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container lg:w-5xl px-4 lg:px-2 mx-auto py-4 flex-auto">
        <div className="grid gtid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 my-8">
          <Image
            src={paper.image}
            alt=""
            width={400}
            height={400}
            className="rounded-3xl object-cover w-full"
          />
          <div className="lg:col-span-2">
            <h2 className="text-xl lg:text-3xl font-bold my-2 lg:my-4">
              <span className="italic">&ldquo;{paper.title}&rdquo;</span>
            </h2>
            <p className="text-base px-2 py-4">{paper.fullDescription}</p>
          </div>
        </div>
        {paper.fullArticle.map((fullText, index, array) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-2 mt-4">{fullText.title}</h3>
            <p className="text-base whitespace-pre-wrap">
              {fullText.description}
            </p>
            <hr
              className={`${index === array.length - 1 ? "hidden" : "my-4"}`}
            />
          </div>
        ))}
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
