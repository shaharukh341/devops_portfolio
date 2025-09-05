import Link from "next/link";

import { FaGithub, FaLinkedinIn} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/shaharukh341" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sharukh-ahmed-shaik-3069ab228/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon} 
          </a>
         // <Link key={index} href={item.path} className={iconStyles}>
         //   {item.icon}
        //  </Link>
        );
      })}
    </div>
  );
};

export default Social;
