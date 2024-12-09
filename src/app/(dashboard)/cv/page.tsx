"use client";

import { motion } from "framer-motion";
import { ExperienceComponent } from "@/app/components";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 py-16 space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">
            Experiencia Profesional
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trayectoria en desarrollo front-end especializado en crear
            experiencias web modernas y eficientes
          </p>
        </motion.div>
        <ExperienceComponent />
      </motion.div>
    </div>
  );
}
