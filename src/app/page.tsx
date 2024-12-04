"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "./components";
import { AxeIcon, BotIcon, VolumeIcon } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its features.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1.com",
    technologies: [
      { name: "React", icon: <VolumeIcon />, color: "#61DAFB" },
      { name: "TypeScript", icon: <AxeIcon />, color: "#3178C6" },
      { name: "Next.js", icon: <BotIcon />, color: "#000000" },
    ],
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and what it accomplishes.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2.com",
    technologies: [
      { name: "Vue", icon: <VolumeIcon />, color: "#4FC08D" },
      { name: "JavaScript", icon: <AxeIcon />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <BotIcon />, color: "#06B6D4" },
    ],
  },
];

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto space-y-12"
    >
      <motion.section variants={item} className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Hola!👋</h1>
          <h2 className="text-3xl font-bold">Mi nombre es Gonzalo Cordoba</h2>
          <h3 className="text-xl text-muted-foreground">
            Desarrollador front-end
          </h3>
        </div>
        <p className="text-lg text-muted-foreground">
          Soy un desarrollador front-end especializado en construir interfaces
          web modernas y atractivas. Con experiencia en React, TypeScript, HTML,
          CSS, y Next.js, me apasiona transformar ideas en experiencias de
          usuario intuitivas y eficientes. Además, domino Git para colaborar en
          proyectos de manera ágil y efectiva.
        </p>
        <Button asChild>
          <Link href="#contact">Contactame</Link>
        </Button>
      </motion.section>

      <motion.section variants={item} className="space-y-4">
        <h2 className="text-2xl font-bold">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={item} className="space-y-4">
        <h2 className="text-2xl font-bold">Experiencia</h2>
        <div className="relative border-l-2 border-muted pl-4 ml-2 space-y-8">
          {[1, 2, 3].map((job) => (
            <div key={job} className="relative">
              <div className="absolute -left-[1.625rem] h-4 w-4 rounded-full bg-primary" />
              <div className="space-y-2">
                <h3 className="font-semibold">Job Title</h3>
                <p className="text-sm text-muted-foreground">
                  Company Name • 2020 - Present
                </p>
                <p className="text-sm">
                  Description of responsibilities and achievements in this role.
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
