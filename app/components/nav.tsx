import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex items-center justify-center bg-white">
        <div className="container w-full flex justify-between items-center p-4">
          <Image src="/next.svg" alt="Logo" width={50} height={50} />
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium p-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium p-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium p-2">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium p-2">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  );
}