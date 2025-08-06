"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Database, Palette } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "/svgs/React.svg" },
      { name: "Next.js", icon: "/svgs/Next.js.svg" },
      { name: "TypeScript", icon: "/svgs/TypeScript.svg" },
      { name: "JavaScript", icon: "/svgs/JavaScript.svg" },
      { name: "React Native", icon: "/svgs/React.svg" },
      { name: "Tailwind CSS", icon: "/svgs/TailwindCSS.svg" },
      { name: "Shadcn UI", icon: "/svgs/shadcn.jpg" },
      { name: "Framer Motion", icon: "/svgs/framer-motion.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/svgs/Node.js.svg" },
      { name: "Express.js", icon: "/svgs/Express.svg" },
      { name: "Socket.io", icon: "/svgs/Socket.io.svg" },
      { name: "PostMan-API", icon: "/svgs/Postman.svg" },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: "/svgs/MongoDB.svg" },
      { name: "PostgreSQL", icon: "/svgs/PostgresSQL.svg" },
      { name: "Prisma ORM", icon: "/svgs/prisma.svg" },
      { name: "MySQL", icon: "/svgs/MySQL.svg" },
      { name: "NeonDB", icon: "/svgs/neon.jpeg" },
      { name: "Redis", icon: "/svgs/Redis.svg" },
      { name: "Drizzle ORM", icon: "/svgs/drizzle.png" },
    ],
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "Expo", icon: "/svgs/Expo.svg" },
      { name: "Docker", icon: "/svgs/Docker.svg" },
      { name: "AWS", icon: "/svgs/AWS.svg" },
      { name: "Figma", icon: "/svgs/figma.png" },
      { name: "Clerk", icon: "/svgs/clerk.svg" },
    ],
  },
];

const SkillIcon = ({ icon, name }: { icon: any; name: string }) => {
  if (typeof icon === "string") {
    return (
      <Image
        src={icon}
        alt={`${name} icon`}
        width={14}
        height={14}
        className="group-hover:scale-110 transition-transform duration-200"
      />
    );
  }
  const IconComponent = icon;
  return (
    <IconComponent className="w-4 h-4 text-foreground/70 dark:text-foreground/80 group-hover:scale-110 transition-transform duration-200" />
  );
};

const MobileSkillIcon = ({ icon, name }: { icon: any; name: string }) => {
  if (typeof icon === "string") {
    return (
      <Image
        src={icon}
        alt={`${name} icon`}
        width={11}
        height={11}
        className="group-hover:scale-110 transition-transform duration-200"
      />
    );
  }
  const IconComponent = icon;
  return (
    <IconComponent className="w-2.5 h-2.5 text-foreground/70 dark:text-foreground/80 group-hover:scale-110 transition-transform duration-200" />
  );
};

export default function SkillsSection() {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block max-w-4xl my-7">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="mb-6 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground/80 dark:text-foreground/90 whitespace-nowrap">
                {category.category}:
              </h3>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + index * 0.02,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-dashed border-border/60 bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:border-border hover:bg-background/80 dark:hover:bg-background/60 transition-all duration-300 shadow-sm">
                    <SkillIcon icon={skill.icon} name={skill.name} />
                    <span className="text-sm font-medium text-foreground/70 dark:text-foreground/80 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile version */}
      <div className="md:hidden my-7">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            className="mb-5 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-1.5">
              <h3 className="text-sm font-semibold text-foreground/80 dark:text-foreground/90 whitespace-nowrap">
                {category.category}:
              </h3>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + index * 0.02,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-dashed border-border/60 bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:border-border hover:bg-background/80 dark:hover:bg-background/60 transition-all duration-300 shadow-sm">
                    <MobileSkillIcon icon={skill.icon} name={skill.name} />
                    <span className="text-xs font-medium text-foreground/70 dark:text-foreground/80 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
