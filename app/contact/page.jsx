"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoLogoWhatsapp } from "react-icons/io";
import toast from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 988 596 1544",
     link: "tel:+919885961544", // 📞 Click-to-call
  },
  {
    icon: <IoLogoWhatsapp />,
    title: "WhatsApp",
    description: "(+91) 988 596 1544",
    link: "https://wa.me/919885961544?text=Hello%20*SHARUKH%20AHMED%20SHAIK*%2C%0A%0AWe%20are%20pleased%20to%20inform%20you%20that%20your%20profile%20has%20been%20shortlisted%20for%20the%20next%20round%20of%20our%20recruitment%20process.%0A%0ACould%20you%20please%20share%20your%20availability%20for%20a%20suitable%20time%20slot%20to%20schedule%20the%20interview%3F%0A%0ARegards%2C%0AHR%20Team", // 💬 WhatsApp click-to-chat
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sharukh341ahamad@gmail.com",
    link: "mailto:sharukh341ahamad@gmail.com", // 📧 Click-to-email
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Andhra Pradesh, India",
    link: "https://www.google.com/maps/place/Ponnur,+Andhra+Pradesh" // change to your hometown
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
  email: "",
  message: "",
  });
   
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent!");
        setFormData({ email: "", message: "" });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending message.");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Send me a message and I&apos;ll get back to you soon.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="email" name="email" placeholder="Email address" value={formData.email}  onChange={handleChange} required/>
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}  onChange={handleChange}
                required
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-blue-500 hover:underline"
                        >
                          {item.description}
                        </a>
                      ) : (
                        <h3 className="text-xl">{item.description}</h3>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
