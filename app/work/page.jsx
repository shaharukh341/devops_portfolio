"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Tech Analyst",
    title: "project 1",
    description:
      "Explore global career opportunities at Citi. Discover our workplace culture, values and open positions across various business areas.",
    stack: [{ name: "OpenShift" }, { name: "Harness" }, { name: "Tekton" }],
    image: "/assets/project_1.svg",
    live: "/assets/project_1.svg",
  },
  {
    num: "02",
    category: "Senior DevOps Engineer",
    title: "project 2",
    description:
      "Explore global career opportunities at Citi. Discover our workplace culture, values and open positions across various business areas.",
    stack: [{ name: "OpenShift" }, { name: "LightSpeed" }, { name: "Jenkins" }],
    image: "/assets/project_2.svg",
    live: "/assets/project_2.svg",
  },
  {
    num: "03",
    category: "DevOps Engineer",
    title: "project 3",
    description:
      "Signature is an innovative, comprehensive customer-centric banking solution that allows your organization to flex and scale to meet changing demands",
    stack: [{ name: "Jenkins" }, { name: "Bitbucket" }, { name: "Kubernetes" }],
    image: "/assets/project_3.svg",
    live: "/assets/project_3.svg",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    if (!swiper) return;
    setProject(projects[swiper.activeIndex]);
  };

  const sliderBtnStyles =
    "bg-blue-600 dark:bg-blue-400 hover:bg-blue-700 dark:hover:bg-blue-500 text-white dark:text-gray-900 text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-md transition-all";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT SIDE */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* MOBILE SWIPER */}
            <div className="block xl:hidden w-full mb-8">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="h-auto"
              >
                {projects.map((p, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col gap-[20px]">
                      <div className="text-6xl font-extrabold text-black dark:text-white">
                        {p.num}
                      </div>
                      <h2 className="text-2xl font-bold text-black dark:text-white capitalize">
                        {p.category} project
                      </h2>
                      <p className="text-gray-900 dark:text-gray-200">{p.description}</p>

                      {/* slider buttons */}
                      <div className="flex items-center gap-4 mt-4">
                        <WorkSliderBtns
                          containerStyles="flex gap-2"
                          btnStyles={sliderBtnStyles}
                        />
                      </div>

                      <ul className="flex gap-2 flex-wrap">
                        {p.stack.map((item, idx) => (
                          <li
                            key={idx}
                            className="inline-block px-2 py-1 rounded bg-black text-white dark:bg-white dark:text-black text-lg"
                          >
                            {item.name}
                            {idx !== p.stack.length - 1 && ","}
                          </li>
                        ))}
                      </ul>

                      <div className="border border-black/20 dark:border-white/20"></div>

                      <div className="flex items-center gap-4">
                        <Link href={p.live} target="_blank" rel="noopener noreferrer">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-black/20 dark:bg-white/20 flex justify-center items-center group">
                                <BsArrowUpRight className="text-black dark:text-white text-2xl group-hover:text-blue-700 dark:hover:text-blue-500" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live project</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* DESKTOP DETAILS */}
            <div className="hidden xl:flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-black dark:text-white">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-black dark:text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-gray-900 dark:text-gray-200">{project.description}</p>

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block px-2 py-1 rounded bg-black text-white dark:bg-white dark:text-black text-xl"
                  >
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-black/20 dark:border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/20 dark:bg-white/20 flex justify-center items-center group">
                        <BsArrowUpRight className="text-black dark:text-white text-3xl group-hover:text-blue-700 dark:hover:text-blue-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (desktop image swiper) */}
          <div className="w-full xl:w-[50%] hidden xl:block relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 relative"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-black/10 dark:bg-white/10">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 dark:bg-white/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <motion.iframe
                        src={project.image}
                        width="100%"
                        height="500"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider buttons for desktop */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles={sliderBtnStyles}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
