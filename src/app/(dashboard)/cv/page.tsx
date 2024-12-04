"use client";
import { motion } from "framer-motion";
import { ExperienceComponent } from "@/app/components";
import { container } from "@/app/page";

export default function CurriculumPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto space-y-12"
    >
      <ExperienceComponent />
    </motion.div>
  );
}
