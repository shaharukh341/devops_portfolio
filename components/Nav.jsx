"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
          className={`capitalize font-medium transition-all ${
            link.path === pathname
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
