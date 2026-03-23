"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import asset from "../content/static";
import NavBtn from "./btnNav";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { navItems } = asset;

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="container w-full flex justify-between items-center p-2">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={90} height={40} />
        </Link>
        <nav>
          <button
            onClick={() => setOpen(!open)}
            className={`${open ? "fixed top-4 right-8" : "block"} md:hidden z-50 flex flex-col justify-between w-12 h-10 p-2`}
          >
            <span
              className={`block z-30 h-[2px] w-full bg-gray-600 ${open ? "rotate-[315deg] translate-y-3.5" : "bg-gray-600"}`}
            ></span>
            <span
              className={`block z-30 h-[2px] w-full bg-gray-600 ${open ? "hidden" : "bg-gray-600"}`}
            ></span>
            <span
              className={`block z-30 h-[2px] w-full bg-gray-600 ${open ? "rotate-[45deg] -translate-y-2" : "bg-gray-600"}`}
            ></span>
          </button>
          <div
            className={`fixed md:static inset-0 z-20 bg-[#F7F2EC] md:bg-white transition-all duration-300 md:opacity-100 md:visible ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col justify-around h-full py-16 md:py-0 md:flex-row gap-8 absolute md:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-none">
              {navItems.map((item, index) => (
                <li
                  className={`relative group flex justify-center flex-col ${item.dropdown ? "flex-[2_1_auto] md:flex-none" : "flex-auto"} `}
                  key={index}
                >
                  <NavBtn
                    link={item.link}
                    name={item.name}
                    dropdown={!!item.dropdown}
                    footer={false}
                    key={index}
                  />
                  {item.dropdown ? (
                    <div className="static flex flex-col flex-1 justify-between md:absolute left-0 top-8 mt-0 md:hidden md:group-hover:block px-10 bg-transpatent md:bg-[#f5e4dc] z-65">
                      {item.dropdown.map((dropdown, index) => (
                        <NavBtn
                          link={dropdown.link}
                          name={dropdown.name}
                          dropdown={!item.dropdown}
                          footer={false}
                          key={index}
                        />
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
