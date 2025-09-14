"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-gray-900 dark:text-white">
              DevOps Engineer
            </span>
            <h1 className="h1 mb-0 text-gray-900 dark:text-white">
              Hello I&apos;m <br />{" "}
              <span className="text-blue-500 dark:text-blue-400">
                Sharukh Ahmed Shaik
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-700 dark:text-gray-300">
              To obtain an IT Professional position that utilizes my expertise in{" "}
              <a className="text-blue-500 dark:text-blue-400">DevOps</a> and help in
              enhancing my skills to build a successful and rewarding career in an esteemed organization
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-500"
              >
                <a
                  href="/assets/Sharukh_Ahmed_Shaik_Resume.pdf"
                  download="Sharukh_Ahmed_Shaik_Resume.pdf"
                  className="text-gray-900 dark:text-white"
                >
                  Download CV
                </a>
                <FiDownload className="text-xl text-gray-900 dark:text-white" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-500 dark:border-blue-400 rounded-full flex justify-center items-center text-blue-500 dark:text-blue-400 text-base hover:bg-blue-500 dark:hover:bg-blue-400 hover:text-white transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
