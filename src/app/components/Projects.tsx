import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { item } from "../page";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { DiReact } from "react-icons/di";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its features.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    technologies: [
      {
        name: "React",
        icon: <DiReact className="w-8 h-8" />,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="w-7 h-7" />,
        color: "#3178C6 ",
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine className="w-7 h-7" />,
        color: "#000000  ",
      },
    ],
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and what it accomplishes.",
    image: "/placeholder.svg",
    githubUrl: "https://github.com/",
    liveUrl: "https://github.com/",
    technologies: [
      {
        name: "React",
        icon: <DiReact className="w-8 h-8" />,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="w-7 h-7" />,
        color: "#3178C6 ",
      },
      {
        name: "Next.js",
        icon: <RiNextjsLine className="w-7 h-7" />,
        color: "#000000  ",
      },
    ],
  },
];

export const ProjectsComponent = () => {
  return (
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
  );
};
