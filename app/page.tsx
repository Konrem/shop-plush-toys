import Banner from "./components/banner";
import Best from "./components/best";
import Collections from "./components/collections";
import Footer from "./components/footer";
import Info from "./components/info";
import Nav from "./components/nav";
import MainTitle from "./components/mainTitle";
import TitleBlock from "./components/titlebBlock";
import TitleH2 from "./components/titleH2";
import Articles from "./components/articles";

export default function Home() {
  const info = [
    {
      title: "Швидке та надійне доставлення!",
      description:
        "Виготовлення в терміни та доставлення через Нову пошту наші найкращі товари. Ми прагнемо якнайкращу доставку іграшок до вас.",
      image: "/delivery.svg",
    },
    {
      title: "Безпечний матеріал та якість!",
      description:
        "Ми використовуємо лише якісні та безпечні матеріали. Кожна іграшка проходить перевірку, щоб відповідати високим стандартам безпеки.",
      image: "/quality.svg",
    },
    {
      title: "Робота з повагою!",
      description:
        "Ми цінуємо клієнтів і завжди готові допомогти. Робимо все можливе, щоб забезпечити найкращий сервіс і задовольнити ваші потреби.",
      image: "/service.svg",
    },
  ];

  const reviews = [
    {
      title: "Едуард Григорович",
      description:
        "Я замовив плюшеву іграшку для своєї доньки, і вона була в захваті! Якість була відмінною, а доставка швидкою. Рекомендую всім!",
      image: "",
    },
    {
      title: "Олена Петрівна",
      description:
        "Замовив пару іграшок для своїх дітей, і вони були дуже задоволені. Якість була відмінною, а доставка була швидкою. Дуже рекомендую цей магазин!",
      image: "",
    },
    {
      title: "Іван Сергійович",
      description:
        "Я замовив плюшеву іграшку для свого сина, і він був у захваті! Якість була відмінною, а доставка була швидкою. Рекомендую всім, хто шукає якісні іграшки та відмінний сервіс!",
      image: "",
    },
  ];

  return (
    <>
      <Nav />
      <header>
        <Banner />
        <div className="w-full bg-[#E1EDE9] py-12 md:py-16">
          <MainTitle />
          <Collections />
        </div>
      </header>
      <main>
        <div className="w-full relative bg-[#F7F2EC] py-12 md:py-16">
          <TitleBlock
            image="/icon-toys.svg"
            title="Наші найкращі пропозиції для вас!"
          />
          <Best />
        </div>
        <div className="w-full relative bg-[#E1EDE9] py-12 md:py-16">
          <TitleH2 text="Ось що ми можемо для вас зробити" />
          <Info type={"information"} info={info} />
        </div>
        <div className="w-full relative bg-[#F7F2EC] py-12 md:py-16">
          <TitleH2 text="Невелички статті та поради" />
          <Articles />
        </div>
        <div className="w-full relative bg-[#E1EDE9] py-12 md:py-16">
          <TitleBlock image="/heart.svg" title="Відгуки наших клієнтів" />
          <Info type={"reviews"} info={reviews} />
        </div>
      </main>
      <Footer />
    </>
  );
}
