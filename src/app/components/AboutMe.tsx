import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { item } from "../page";

export const AboutMe = () => {
  return (
    <motion.section variants={item} className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Hola!👋</h1>
        <h2 className="text-3xl font-bold">Mi nombre es Gonzalo Cordoba</h2>
        <h3 className="text-xl text-muted-foreground">
          Desarrollador front-end
        </h3>
      </div>
      <p className="text-lg text-muted-foreground">
        Soy un desarrollador front-end especializado en construir interfaces web
        modernas y atractivas. Con experiencia en React, TypeScript, HTML, CSS,
        y Next.js, me apasiona transformar ideas en experiencias de usuario
        intuitivas y eficientes. Además, domino Git para colaborar en proyectos
        de manera ágil y efectiva.
      </p>
      <Button asChild>
        <Link href="#contact">Contactame</Link>
      </Button>
    </motion.section>
  );
};
