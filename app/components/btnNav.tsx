import Link from "next/link";

export default function NavBtn({
  link,
  name,
  dropdown,
  footer,
}: {
  link: string;
  name: string;
  dropdown: boolean;
  footer: boolean;
}) {
  return (
    <div className="flex justify-center">
      <Link
        href={link}
        className={`group/dropdown block text-gray-600 hover:text-gray-900 text-center  p-2 transition-all duration-400 ${footer ? "text-base font-medium" : "text-3xl md:text-base font-bold md:font-medium "} ${dropdown ? "hidden md:inline-block after:content-['>'] after:inline-block after:rotate-90 after:ml-1 md:pl-2" : "inline-block md:px-2"}`}
      >
        {name}
        <span
          className={`block max-w-0 group-hover/dropdown:max-w-full transition-all duration-500 h-0.5 bg-gray-900 ${dropdown ? "hidden" : ""}`}
        ></span>
      </Link>
    </div>
  );
}
