"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Globe,
  Palette,
  Cloud,
  Zap,
  FileText,
  Settings,
  GitBranch,
  Box,
  Cpu,
  Shield,
  ImageIcon,
  Video,
  Workflow,
  Component,
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileText },
      { name: "JavaScript", icon: Code2 },
      { name: "React Native", icon: Smartphone },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Chakra UI", icon: Component },
      { name: "Shadcn UI", icon: Component },
      { name: "Framer Motion", icon: Workflow },
      { name: "GSAP", icon: Workflow },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "GraphQL", icon: GitBranch },
      { name: "Socket.io", icon: Zap },
      { name: "PostMan-API", icon: Zap },
      { name: "Bullmq", icon: Settings },
    ]
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Database },
      { name: "NeonDB", icon: Database },
      { name: "Redis", icon: Cpu },
      { name: "Drizzle ORM", icon: Database },
    ]
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "Expo", icon: Smartphone },
      { name: "Docker", icon: Box },
      { name: "AWS", icon: Cloud },
      { name: "Figma", icon: Palette },
      { name: "Clerk", icon: Shield },
      { name: "Zustand", icon: Box },
    ]
  },
  {
    category: "Media & Services",
    skills: [
      { name: "Cloudinary", icon: ImageIcon },
      { name: "Zegocloud", icon: Video },
    ]
  }
];

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
                    delay: (categoryIndex * 0.1) + (index * 0.02),
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full border border-dashed border-border/60 bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:border-border hover:bg-background/80 dark:hover:bg-background/60 transition-all duration-300 shadow-sm">
                    <skill.icon className="w-3 h-3 text-foreground/70 dark:text-foreground/80 group-hover:scale-110 transition-transform duration-200" />
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
                    delay: (categoryIndex * 0.1) + (index * 0.02),
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-dashed border-border/60 bg-background/50 dark:bg-background/30 backdrop-blur-sm hover:border-border hover:bg-background/80 dark:hover:bg-background/60 transition-all duration-300 shadow-sm">
                    <skill.icon className="w-2.5 h-2.5 text-foreground/70 dark:text-foreground/80 group-hover:scale-110 transition-transform duration-200" />
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