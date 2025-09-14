"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; // icons

// Proper DevOps Infinity Symbol
const DevOpsSymbol = () => {
  return (
    <motion.svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[140px] h-auto ml-2 inline-block align-middle"
      aria-label="DevOps Infinity Symbol"
      role="img"
    >
      <defs>
        <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e7e8e9ff" /> {/* Dev side */}
          <stop offset="100%" stopColor="#00B4D8" /> {/* Ops side */}
        </linearGradient>
      </defs>

      <motion.path
        d="
          M20,50
          C20,10 80,10 100,50
          C120,90 180,90 180,50
          C180,10 120,10 100,50
          C80,90 20,90 20,50
        "
        fill="none"
        stroke="url(#devopsGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 12"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
      {/* Dev in left loop */}
      <text
        x="60"
        y="50"
        fill="#00B4D8"
        fontSize="18"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Dev
      </text>
      {/* Ops in right loop */}
      <text
        x="140"
        y="50"
        fill="#e7e8e9ff"
        fontSize="18"
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Ops
      </text>
    </motion.svg>
  );
};

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-6 xl:py-10 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo with DevOps animated symbol */}
        <Link href="/">
          <h1 className="text-4xl font-semibold flex items-center">
            Sharukh<span className="text-accent">.</span>
            <DevOpsSymbol />
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-4">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-600"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
