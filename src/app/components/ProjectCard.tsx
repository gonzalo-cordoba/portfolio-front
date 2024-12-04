"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IoLogoGithub } from "react-icons/io";

interface Technology {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: Technology[];
}

export function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              className="p-1 rounded-full"
              style={{ backgroundColor: tech.color }}
            >
              <div className="w-8 h-8 text-white">{tech.icon}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-2 w-full">
          <Button asChild className="flex-1">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span>
                <IoLogoGithub />
              </span>
              GitHub
            </a>
          </Button>
          <Button asChild className="flex-1">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              Ver en vivo
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
