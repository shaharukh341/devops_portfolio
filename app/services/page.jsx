"use client";

import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Cloud", description: "AWS", href: "" },
  { num: "02", title: "Orchestration", description: "Kubernetes, Openshift", href: "" },
  { num: "03", title: "Configuration Management", description: "Ansible, Terraform", href: "" },
  { num: "04", title: "CI/CD", description: "Jenkins, Bitbucket", href: "" },
  { num: "05", title: "Containerization", description: "Docker", href: "" },
  { num: "06", title: "Monitoring", description: "Prometheus, Grafana", href: "" },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-[30px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Number */}
              <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500">
                {service.num}
              </div>

              {/* Title */}
              <h2 className="text-[26px] font-bold leading-none text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
