import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { item } from "../page";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import { DiReact } from "react-icons/di";

const projects = [
  {
    title: "Stackly- Landing Page",
    description:
      "Desarrollé una landing page para una empresa especializada en infraestructura de datos financieros modernos para el sector fintech. Esta página fue diseñada para reflejar su enfoque en integrar datos de múltiples proveedores bancarios y bases de datos de fintech, con el objetivo de agilizar operaciones, reducir riesgos de fraude y mejorar la eficiencia operativa. El diseño se centró en transmitir confianza, innovación y la capacidad de la empresa para optimizar los procesos clave dentro de las fintechs.",
    image: "/stackly.webp",
    githubUrl: "https://github.com/gonzalo-cordoba/landing-stackly",
    liveUrl: "https://landing-stackl.vercel.app/",
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
    title: "Dot Dager - Landing Page",
    description:
      "Landing page para un youtuber del ambiente IT, destacando su trayectoria y mostrando sus pasiones. La página incluye secciones que detallan su contenido, intereses personales y la conexión que busca generar con su audiencia. El diseño fue creado para capturar la esencia de su marca y personalidad, con un enfoque en crear una experiencia atractiva y auténtica para sus seguidores.",
    image: "/dager-landing.webp",
    githubUrl: "https://github.com/gonzalo-cordoba/dager-landing-serious",
    liveUrl: "https://dager-landing-serious.vercel.app/",
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
