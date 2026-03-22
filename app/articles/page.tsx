"use client";

import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import asset from "../content/static";
import Articles from "../components/articles";

export default function ArticlesList() {
  const { titleListArticles } = asset;
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mx-auto flex-auto">
        <h2 className="text-3xl font-bold my-8">{titleListArticles}</h2>
        <Articles />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
