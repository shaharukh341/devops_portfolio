"use client";

import {
  FaPython,
  FaAws,
  FaBitbucket,
} from "react-icons/fa";

import { SiKubernetes, SiSonarqube, SiGrafana, SiAnsible, SiTerraform } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "To obtain an IT Professional position that utilizes my expertise in and help in enhancing my skills to build a successful and rewarding career in an esteemed organization",
  info: [
    { fieldName: "Name", fieldValue: "Sharukh Ahmed Shaik" },
    { fieldName: "Phone", fieldValue: "(+91) 988 596 1544" },
    { fieldName: "Experience", fieldValue: "6+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Languages", fieldValue: "English"  },
    { fieldName: "Domain", fieldValue: "Devops Engineer" },
    { fieldName: "Email", fieldValue: "sharukh341ahamad@gmail.com"},
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "A highly enthusiastic AWS Certified DevOps engineer looking for challenging opportunities and seeking a technical position.",
  items: [
    { company: "Citi", position: "Senior System Engineer", duration: "Dec 2023 - Present" },
    { company: "LTIMindtree", position: "Senior Software Engineer", duration: "Feb 2022 - Dec 2023" },
    { company: "Fiserv", position: "Software Engineer", duration: "Jul 2019 - Jan 2022" },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "B-Tech graduate with a passion for technology and a strong foundation in computer science.",
  items: [
    { institution: "Amazon Web Services (AWS)", degree: "DevOps Engineer - Professional", duration: "Feb 2022 - Feb 2025" },
    { institution: "Vignan Institute of Technology & Sciences", degree: "Bachelor of Technology - BTech", duration: "2016" },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "DevOps Engineer focused on automation, cloud scalability, and secure delivery pipelines — turning code into reliable production systems.",
  skillList: [
    { icon: <SiKubernetes />, name: "kubernetes" },
    { icon: <FaPython />, name: "python" },
    { icon: <SiAnsible />, name: "Ansible" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <FaBitbucket />, name: "Bitbucket" },
    { icon: <SiSonarqube />, name: "sonarqube" },
    { icon: <SiGrafana />, name: "Grafana" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="hover:text-blue-600 dark:hover:text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-400 dark:data-[state=active]:text-black transition-colors duration-300">Experience</TabsTrigger>
            <TabsTrigger value="education" className="hover:text-blue-600 dark:hover:text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-400 dark:data-[state=active]:text-black transition-colors duration-300">Education</TabsTrigger>
            <TabsTrigger value="skills" className="hover:text-blue-600 dark:hover:text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-400 dark:data-[state=active]:text-black transition-colors duration-300">Skills</TabsTrigger>
            <TabsTrigger value="about" className="hover:text-blue-600 dark:hover:text-blue-400 data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-blue-400 dark:data-[state=active]:text-black transition-colors duration-300">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black dark:text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-gray-900 dark:text-gray-200 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 dark:bg-gray-900 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-blue-600 dark:text-blue-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-gray-900 dark:text-gray-100">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-600 dark:bg-blue-400"></span>
                          <p className="text-gray-700 dark:text-gray-300">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-black dark:text-white">{education.title}</h3>
                <p className="max-w-[600px] text-gray-900 dark:text-gray-200 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 dark:bg-gray-900 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-blue-600 dark:text-blue-400">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-gray-900 dark:text-gray-100">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-blue-600 dark:bg-blue-400"></span>
                          <p className="text-gray-700 dark:text-gray-300">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black dark:text-white">{skills.title}</h3>
                  <p className="max-w-[600px] text-gray-900 dark:text-gray-200 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-gray-900 dark:text-gray-100">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-black dark:text-white">{about.title}</h3>
                <p className="max-w-[600px] text-gray-900 dark:text-gray-200 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-gray-900 dark:text-gray-400">{item.fieldName}</span>
                      <span className="text-xl text-gray-900 dark:text-gray-100">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
