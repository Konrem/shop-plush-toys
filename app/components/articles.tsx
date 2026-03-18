import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col sm:flex-row lg:flex-col col-span-2 row-span-1 lg:row-span-2 bg-white border-2 border-[#BF8B70] rounded-3xl overflow-hidden mx-6 md:mx-0">
          <Image
            src="/choose0.jpg"
            alt=""
            width={600}
            height={400}
            className="w-full sm:w-[35%] aspect-square object-cover lg:aspect-auto lg:w-full"
          />
          <div className="m-4  flex flex-col justify-between grow">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Як вибрати іграшку ?
              </h3>
              <p className="text-gray-600 text-sm">
                Вибір іграшки може бути складним завданням. Важливо враховувати
                вік, інтереси та безпеку. У нашій статті ми розглянемо основні
                критерії вибору іграшок, щоб допомогти вам зробити правильний
                вибір для вашої того, кому ви купуєте.
              </p>
            </div>
            <div className="my-4">
              <Link
                href="#"
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                Читати далі
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
          <Image src="/crafting.jpg" alt="" width={400} height={600} className="w-full sm:w-[35%] aspect-square object-cover" />
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Як створюються наші іграшки
              </h3>
              <p className="text-gray-600 text-sm">
                Покажемо процес створення наших іграшок, від вибору матеріалів
                до виготовлення та контролю якості. Дізнайтеся, як ми створюємо
                унікальні та якісні іграшки для вас та ваших дітей.
              </p>
            </div>
            <div className="my-2">
              <Link
                href="#"
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                Читати далі
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
          <Image src="/cleaning.jpg" alt="" width={400} height={600} className="w-full sm:w-[35%] aspect-square lg:aspect-auto object-cover" />
          <div className="flex flex-col justify-between m-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Як доглядати за плюшевими іграшками?
              </h3>
              <p className="text-gray-600 text-sm">
                Плюшеві іграшки можуть збирати пил та бrud, тому важливо знати,
                як правильно доглядати за ними. У нашій статті ми надамо поради
                щодо чищення та зберігання плюшевих іграшок, щоб вони залишалися
                чистими та безпечними для вашої дитини.
              </p>
            </div>
            <div className="my-2">
              <Link
                href="#"
                className="text-[#BF8B70] font-semibold hover:underline group my-4"
              >
                Читати далі
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
