"use client";

import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";
import Collections from "../components/collections";
import asset from "../content/static";

export default function Groups() {
  const { titleListCollections } = asset;
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#F7F2EC]">
      <Nav />
      <div className="container px-2 mx-auto flex-auto">
        <h2 className="text-3xl font-bold my-8">{titleListCollections}</h2>
        <Collections />
      </div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  );
}
