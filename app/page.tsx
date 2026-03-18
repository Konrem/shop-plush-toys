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
  return (
    <>
      <Nav />
      <header>
        <Banner />
        <div className="w-full bg-[#F5E4DC] py-12 md:py-16">
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
          <Info />
        </div>
        <div className="w-full relative bg-[#F7F2EC] py-12 md:py-16">
          <TitleH2 text="Невелички статті та поради" />
          <Articles />
        </div>
        <div className="w-full relative bg-[#E1EDE9] py-12 md:py-16">
          <TitleBlock image="/heart.svg" title="Відгуки наших клієнтів" />
          <Info />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
