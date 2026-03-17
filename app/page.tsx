import Banner from "./components/banner";
import Best from "./components/best";
import Collections from "./components/collections";
import Footer from "./components/footer";
import Info from "./components/info";
import Nav from "./components/nav";
import Title from "./components/title";
import TitleBlock from "./components/titlebBlock";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <div className="w-full bg-[#F5E4DC] py-16">
        <Title />
        <Collections />
      </div>
      <div className="w-full relative bg-[#F7F2EC] py-16">
        <TitleBlock />
        <Best />
      </div>
      <div className="w-full relative bg-[#E1EDE9] py-16">
        <Info />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
