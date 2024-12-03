"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Twitter,
  Twitch,
  Linkedin,
  Youtube,
  MessageSquare,
} from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/conferences", label: "Conferences" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support my Work" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Twitch, href: "#", label: "Twitch" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageSquare, href: "#", label: "Discord" },
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
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
        </div>

        <nav className="space-y-2 mb-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "bg-secondary"
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
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-secondary"
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
