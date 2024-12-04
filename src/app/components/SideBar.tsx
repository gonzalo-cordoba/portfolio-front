"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/gonzalo-cordoba",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/gonzalocordob/",
    label: "LinkedIn",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 bg-background border-r min-h-screen p-4 hidden md:block"
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center space-y-4 mb-8">
          <Avatar className="w-32 h-32">
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/C4E03AQES7mIbBslr5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1626736649555?e=1738800000&v=beta&t=jS8e6tmsH4Dwij0BUL0PwtR-T65yCHKhWxFCYuXdiBI"
              alt="Profile"
            />
            <AvatarFallback>GC</AvatarFallback>
          </Avatar>
        </div>

        <nav className="space-y-2 mb-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-[#1d3557] text-white"
                    : "hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </motion.div>
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-8 w-8" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
