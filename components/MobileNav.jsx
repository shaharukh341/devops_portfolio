"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-blue-600 dark:text-blue-400" />
      </SheetTrigger>

      <SheetContent
        className="
          flex flex-col 
          bg-white dark:bg-gray-900 
          text-gray-900 dark:text-gray-100 
          [&_button]:text-gray-900 dark:[&_button]:text-gray-100
        "
      >
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sharukh<span className="text-blue-600 dark:text-blue-400">.</span>
            </h1>
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`
                w-40 text-center py-2 rounded-md text-xl capitalize transition-all
                ${
                  link.path === pathname
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-100 dark:bg-blue-900"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-800"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
