import Link from "next/link";
import asset from "../content/static";

export default function Footer() {
  const {navItems} = asset;

  const contactInfo = [
    {
      type: "email",
      value: "email@gmail.com",
      link: "mailto:email@gmail.com",
    },
    {
      type: "instagram",
      value: "@toys_shop",
      link: "https://instagram.com/toys_shop",
    },
  ];

  return (
    <footer id="footer" className="bg-[#f5e4dc]">
      <div className="container mx-auto py-8 text-center">
        <ul className="flex justify-center gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-8 mt-4">
          {contactInfo.map((info, index) => (
            <li key={index}>
              <Link
                href={info.link}
                className="text-gray-600 hover:text-gray-900"
                title={info.type}
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
