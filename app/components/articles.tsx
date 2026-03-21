import Image from "next/image";
import Link from "next/link";
import asset from "../content/static";

export default function Articles() {
  const articles = [
    {
      title: "Як вибрати іграшку ?",
      image: "/articles/choose.jpg",
      description:
        "Покажемо процес створення наших іграшок, від вибору матеріалів до виготовлення та контролю якості. Дізнайтеся, як ми створюємо унікальні та якісні іграшки для вас та ваших дітей.",
      link: "#",
    },
    {
      title: "Як створюються наші іграшки",
      image: "/articles/crafting.jpg",
      description:
        "Покажемо процес створення наших іграшок, від вибору матеріалів до виготовлення та контролю якості. Дізнайтеся, як ми створюємо унікальні та якісні іграшки для вас та ваших дітей.",
      link: "#",
    },
    {
      title: "Як доглядати за іграшками",
      image: "/articles/cleaning.jpg",
      description:
        "Плюшеві іграшки можуть збирати пил та бруд, тому важливо знати, як правильно доглядати за ними. У нашій статті ми надамо поради щодо чищення та зберігання плюшевих іграшок, щоб вони залишалися чистими та безпечними для вашої дитини.",
      link: "#",
    },
  ];

  const { readMore } = asset;

  return (
    <div className="container px-2 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col sm:flex-row lg:flex-col col-span-2 row-span-1 lg:row-span-2 bg-white border-2 border-[#BF8B70] rounded-3xl overflow-hidden mx-6 md:mx-0">
          <div className="relative w-full sm:w-[220px] lg:w-full h-64 sm:h-auto lg:min-h-[300px] shrink-0">
            <Image
              src={articles[0].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="m-4 flex flex-col justify-between grow">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 text-sm">{articles[0].description}</p>
            </div>
            <div className="my-4">
              <Link
                href={articles[0].link}
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
              src={articles[1].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {articles[1].title}
              </h3>
              <p className="text-gray-600 text-sm">{articles[1].description}</p>
            </div>
            <div className="my-2">
              <Link
                href={articles[1].link}
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
              src={articles[2].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {articles[2].title}
              </h3>
              <p className="text-gray-600 text-sm">{articles[2].description}</p>
            </div>
            <div className="my-2">
              <Link
                href={articles[2].link}
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
