import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import about from "../content/about";
import Articles from "../components/articles";

export default function About() {
  const { title, text, afterMain } = about;
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mt-8 mx-auto flex-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base whitespace-pre-wrap">{text}</p>
          <p className="text-base whitespace-pre-wrap italic mt-8">{afterMain}</p>
        </div>
        <Articles />
      </div>
      <div className="flex-none mt-4">
        <Footer />
      </div>
    </div>
  );
}
