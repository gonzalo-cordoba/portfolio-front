import React from "react";
import { motion } from "framer-motion";
import { item } from "../page";

export const ExperienceComponent = () => {
  return (
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
  );
};
