import Image from "next/image";

export default function Info() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        <div className="bg-white border-2 border-[#BF8B70] p-4 rounded-3xl text-center flex items-center flex-col mx-6 md:mx-0">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center bg-[#E1EDE9] rounded-full w-16 h-16 mb-4">
              <Image src="/delivery.svg" alt="" height={40} width={40} />
            </div>
            <p className="text-base p-2 text-[#29180F] font-semibold">
              Швидке та надійне доставлення!
            </p>
          </div>
          <p className="text-sm p-2 text-[#29180F] font-medium">
            Виготовлення в терміни та доставлення через Нову пошту наші найкращі
            товари. Ми прагнемо якнайкращу доставку іграшок до вас.
          </p>
        </div>
        <div className="bg-white border-2 border-[#BF8B70] p-4 rounded-3xl text-center flex items-center flex-col mx-6 md:mx-0">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center bg-[#E1EDE9] rounded-full w-16 h-16 mb-4">
              <Image src="/quality.svg" alt="" height={40} width={40} />
            </div>
            <p className="text-base p-2 text-[#29180F] font-semibold">
              Безпечний матеріал та якість!
            </p>
          </div>
          <p className="text-sm p-2 text-[#29180F] font-medium">
            Ми використовуємо лише якісні та безпечні матеріали. Кожна іграшка
            проходить перевірку, щоб відповідати високим стандартам безпеки.
          </p>
        </div>
        <div className="bg-white border-2 border-[#BF8B70] p-4 rounded-3xl text-center flex items-center flex-col mx-6 md:mx-0">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center bg-[#E1EDE9] rounded-full w-16 h-16 mb-4">
              <Image src="/service.svg" alt="" height={40} width={40} />
            </div>
            <p className="text-base p-2 text-[#29180F] font-semibold">
              Робота з повагою!
            </p>
          </div>
          <p className="text-sm p-2 text-[#29180F] font-medium">
            Ми цінуємо клієнтів і завжди готові допомогти. Робимо все можливе,
            щоб забезпечити найкращий сервіс і задовольнити ваші потреби.
          </p>
        </div>
      </div>
    </>
  );
}
