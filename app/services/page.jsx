"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Cloud",
    description:
      <p class= "text-[#00ff99]"> AWS</p>,
    href: "",
  },
  {
    num: "02",
    title: "Orchestration",
    description:
      <p class= "text-[#00ff99]"> Kubernetes, Openshift</p>,
    href: "",
  },
  
  {
    num: "03",
    title: "Configuration Management",
    description:
      <p class= "text-[#00ff99]"> Ansible, Terraform</p>,
    href: "",
  },
  {
    num: "04",
    title: "CI/CD",
    description:
      <p class= "text-[#00ff99]"> Jenkins, Bitbucket</p>,
    href: "",
  },
  {
    num: "05",
    title: "Containerization",
    description:
      <p class= "text-[#00ff99]"> Docker</p>,
    href: "",
  },
  {
    num: "06",
    title: "Monitoring",
    description:
      <p class= "text-[#00ff99]"> Prometheus, Grafana</p>,
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                </div>
                {/* title */}
                <h2 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/10">{service.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
