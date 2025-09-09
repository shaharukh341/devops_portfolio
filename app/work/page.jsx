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
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex]);
};

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
            
            {/* MOBILE SWIPER (project details) */}
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
                      <div className="text-6xl font-extrabold text-transparent text-outline">
                        {p.num}
                      </div>
                      <h2 className="text-2xl font-bold text-white capitalize">
                        {p.category} project
                      </h2>
                      <p className="text-white/60">{p.description}</p>
                      {/* slider buttons beside description */}
                      <div className="flex items-center gap-4 mt-4">
                        <WorkSliderBtns
                          containerStyles="flex gap-2"
                          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        />
                      </div>
                      <ul className="flex gap-2 flex-wrap">
                        {p.stack.map((item, idx) => (
                          <li key={idx} className="text-accent text-lg">
                            {item.name}
                            {idx !== p.stack.length - 1 && ","}
                          </li>
                        ))}
                      </ul>
                      <div className="border border-white/20"></div>
                      <div className="flex items-center gap-4">
                        <Link
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
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

            {/* DESKTOP DETAILS (synced with image swiper) */}
            <div className="hidden xl:flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%] hidden xl:block">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-primary-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-primary/10 z-10"></div>
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
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
