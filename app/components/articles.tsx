import Image from "next/image";
import Link from "next/link";
import asset from "../content/static";
import articles from "../content/articles";

export default function Article() {
  const article = articles;

  const { readMore } = asset;

  return (
    <div className="container px-2 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col sm:flex-row lg:flex-col col-span-2 row-span-1 lg:row-span-2 bg-white border-2 border-[#BF8B70] rounded-3xl overflow-hidden mx-6 md:mx-0">
          <div className="relative w-full sm:w-[220px] lg:w-full h-64 sm:h-auto lg:min-h-[300px] shrink-0">
            <Image
              src={article[0].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="m-4 flex flex-col justify-between grow">
            <div>
              <h3 className="text-xl font-semibold mb-4">{article[0].title}</h3>
              <p className="text-gray-600 text-sm">{article[0].description}</p>
            </div>
            <div className="my-4">
              <Link
                href={`/articles/${article[0].article}`}
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                {readMore}
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="inline-block ml-1 group-hover:translate-x-1 duration-200"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row col-span-2 bg-white border-2 border-[#BF8B70] rounded-3xl overflow-hidden mx-6 md:mx-0">
          <div className="relative w-full sm:w-[220px]  h-64 sm:h-auto sm:shrink-0">
            <Image
              src={article[1].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">{article[1].title}</h3>
              <p className="text-gray-600 text-sm">{article[1].description}</p>
            </div>
            <div className="my-2">
              <Link
                href={`/articles/${article[1].article}`}
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                {readMore}
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="inline-block ml-1 group-hover:translate-x-1 duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row col-span-2 bg-white border-2 border-[#BF8B70] rounded-3xl overflow-hidden mx-6 md:mx-0">
          <div className="relative w-full sm:w-[220px]  h-64 sm:h-auto sm:shrink-0">
            <Image
              src={article[2].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">{article[2].title}</h3>
              <p className="text-gray-600 text-sm">{article[2].description}</p>
            </div>
            <div className="my-2">
              <Link
                href={`/articles/${article[2].article}`}
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                {readMore}
                <Image
                  src="/arrow.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="inline-block ml-1 group-hover:translate-x-1 duration-200"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
