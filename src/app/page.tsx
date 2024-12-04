"use client";

import { motion } from "framer-motion";
import { AboutMe, ProjectsComponent } from "./components";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto space-y-12"
    >
      <AboutMe />

      <ProjectsComponent />
    </motion.div>
  );
}
