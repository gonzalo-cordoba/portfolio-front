"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, ArrowRight } from "lucide-react";

const jobs = [
  {
    position: "Desarrollador Front-End | Landing Page Stackly",
    company: "Freelance",
    duration: "Noviembre 2024–Diciembre 2024",
    description:
      "Desarrollé una landing page para una empresa especializada en infraestructura de datos financieros modernos para el sector fintech. Esta página fue diseñada para reflejar su enfoque en integrar datos de múltiples proveedores bancarios y bases de datos de fintech, con el objetivo de agilizar operaciones, reducir riesgos de fraude y mejorar la eficiencia operativa. El diseño se centró en transmitir confianza, innovación y la capacidad de la empresa para optimizar los procesos clave dentro de las fintechs.",
    skills: ["React", "TypeScript", "Next.js", "shadcn/ui"],
  },
  {
    position: "Desarrollador Front-End | Landing Page Dot Dager",
    company: "Proyecto personal",
    duration: "Noviembre 2024–Diciembre 2024",
    description:
      "Landing page para un youtuber del ambiente IT, destacando su trayectoria y mostrando sus pasiones. La página incluye secciones que detallan su contenido, intereses personales y la conexión que busca generar con su audiencia. El diseño fue creado para capturar la esencia de su marca y personalidad, con un enfoque en crear una experiencia atractiva y auténtica para sus seguidores.",
    skills: ["React", "TypeScript", "Next.js"],
  },
  {
    position:
      "Desarrollador Front-End | Desarrollo de Ecommerce de Productos Electrónicos como Proyecto Freelance",
    company: "Proyecto freelance privado",
    duration: "Julio 2024 - Septiembre 2024",
    description:
      "Diseñé y desarrollé la interfaz de usuario de una plataforma de ecommerce de productos electrónicos con React, TypeScript y Next.js, integrando Firebase para la gestión de productos, usuarios y pedidos. Implementé técnicas de optimización como lazy loading y colaboré en la autenticación de usuarios con Firebase Authentication, asegurando rendimiento y seguridad. Además, utilicé GitHub para el control de versiones, revisiones de código y trabajo en equipo eficiente.",
    skills: ["React", "TypeScript", "Next.js", "Firebase", "GitHub"],
  },
  {
    position:
      "Desarrollador Front-End | Desarrollo de Sistema de Venta de Tickets para Teatro Municipal",
    company: "Proyecto freelance privado",
    duration: "Marzo 2024–Julio 2024",
    description:
      "Diseñé y desarrollé la interfaz de usuario para un sistema de venta de tickets de un teatro municipal con React, TypeScript y Next.js, priorizando una experiencia de usuario fluida. Implementé la librería shadcn/ui para garantizar un diseño accesible y consistente, y utilicé Zustand para gestionar eficientemente el estado global, optimizando el flujo de compra de tickets. Además, empleé GitHub para el control de versiones y revisiones colaborativas, asegurando calidad y coherencia en el código. Aplicamos buenas prácticas de desarrollo para mejorar el rendimiento, velocidad de carga y eficiencia en el proceso de compra.",
    skills: ["React", "TypeScript", "Next.js", "Zustand", "shadcn/ui"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ExperienceComponent = () => {
  return (
    <div className="space-y-8">
      {jobs.map((job, index) => (
        <div key={index} className="relative">
          {index !== jobs.length - 1 && (
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-primary/60 to-primary/0"
              style={{ originY: 0 }}
            />
          )}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="relative p-6 hover:shadow-lg transition-shadow">
              <motion.div
                className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-primary shadow-lg"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-tight">
                    {job.position}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {job.duration}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-secondary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <motion.button
                  className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Ver más detalles
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
