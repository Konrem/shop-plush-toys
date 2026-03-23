"use client";

import { useQRCode } from "next-qrcode";
import Link from "next/link";
import contacts from "../content/contacts";
import Nav from "../components/nav";
import TitleH2 from "../components/titleH2";
import asset from "../content/static";

export default function QRCode() {
  const { Image } = useQRCode();
  const ourSite = {
    title: "Наш сайт",
    value: "felt-hand-toys.netlify.app",
    link: "https://felt-hand-toys.netlify.app/",
  };
  const contantInfo = [ourSite, ...contacts];

  const { titleContacts } = asset;

  return (
    <>
      <Nav />
      <div className="container mx-auto min-h-[100vh] content-center py-8">
        <TitleH2 text={titleContacts} />
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {contantInfo.map((contact, index) => (
            <div className="flex items-center justify-center" key={index}>
              <div className="flex-col p-8 m-4 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-2xl">
                <Image
                  text={contact.link}
                  options={{
                    type: "image/jpeg",
                    quality: 1,
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 300,
                    color: {
                      dark: "#bf8b70",
                      light: "#FFFFFF",
                    },
                  }}
                />
                <div className="flex-none text-center text-white mt-4">
                  <h3 className="font-bold text-xl my-2">{contact.title}</h3>
                  <Link href={contact.link} title={contact.value}>
                    {contact.value}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
