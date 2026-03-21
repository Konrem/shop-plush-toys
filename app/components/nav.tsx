import Image from "next/image";
import Link from "next/link";
import asset from "../content/static";

export default function Nav() {
  const { navItems } = asset;

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="container w-full flex justify-between items-center p-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={90} height={40} />
        </Link>
        <nav>
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium p-2 transition-all duration-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
