import Link from "next/link";
import asset from "../content/static";
import contacts from "../content/contacts";
import NavBtn from "./btnNav";

export default function Footer() {
  const { navItems } = asset;

  const contactInfo = contacts;

  return (
    <footer id="footer" className="bg-[#f5e4dc]">
      <div className="container mx-auto py-8 text-center">
        <ul className="flex justify-center gap-8">
          {navItems.map((item, index) => (
            <li
              className={`relative group flex justify-center ${item.dropdown ? "hidden" : ""}`}
              key={index}
            >
              <NavBtn
                link={item.link}
                name={item.name}
                dropdown={!!item.dropdown}
                footer={true}
                key={index}
              />
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-8 mt-4">
          {contactInfo.map((info, index) => (
            <li key={index}>
              <Link
                href={info.link}
                className="text-gray-600 hover:text-gray-900"
                title={info.title}
              >
                {info.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
