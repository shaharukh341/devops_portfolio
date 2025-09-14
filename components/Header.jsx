"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";


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
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 12" // dotted effect (2px line, 6px gap)
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -200 }} // slow forward movement
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />
    </motion.svg>
  );
};

const Header = () => {
  return (
    <header className="py-6 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo with DevOps animated symbol */}
        <Link href="/">
          <h1 className="text-4xl font-semibold flex items-center">
            Sharukh<span className="text-accent">.</span>
            <DevOpsSymbol />
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
