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

const skills = [
  { name: "React", icon: Code2, color: "text-white" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "TypeScript", icon: FileText, color: "text-white" },
  { name: "Node.js", icon: Server, color: "text-white" },
  { name: "MongoDB", icon: Database, color: "text-white" },
  { name: "JavaScript", icon: Code2, color: "text-white" },
  { name: "PostMan-API", icon: Zap, color: "text-white" },
  { name: "GSAP", icon: Workflow, color: "text-white" },
  { name: "Supabase", icon: Database, color: "text-white" },
  { name: "Clerk", icon: Shield, color: "text-white" },
  { name: "React Native", icon: Smartphone, color: "text-white" },
  { name: "Expo", icon: Smartphone, color: "text-white" },
  { name: "NeonDB", icon: Database, color: "text-white" },
  { name: "Bullmq", icon: Settings, color: "text-white" },
  { name: "Drizzle ORM", icon: Database, color: "text-white" },
  { name: "Zustand", icon: Box, color: "text-white" },
  { name: "Docker", icon: Box, color: "text-white" },
  { name: "GraphQL", icon: GitBranch, color: "text-white" },
  { name: "Tailwind CSS", icon: Palette, color: "text-white" },
  { name: "Redis", icon: Cpu, color: "text-white" },
  { name: "AWS", icon: Cloud, color: "text-white" },
  { name: "Express.js", icon: Server, color: "text-white" },
  { name: "Figma", icon: Palette, color: "text-white" },
  { name: "PostgreSQL", icon: Database, color: "text-white" },
  { name: "Socket.io", icon: Zap, color: "text-white" },
  { name: "Chakra UI", icon: Component, color: "text-white" },
  { name: "Cloudinary", icon: ImageIcon, color: "text-white" },
  { name: "Zegocloud", icon: Video, color: "text-white" },
  { name: "Framer Motion", icon: Workflow, color: "text-white" },
  { name: "Shadcn UI", icon: Component, color: "text-white" },
];

export default function SkillsSection() {
  return (
    <>
      {/* Skills container with your portfolio styling */}
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border-2 border-dashed border-neutral-600 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-500 hover:bg-neutral-800/80 transition-all duration-300">
                <skill.icon
                  className={`w-3.5 h-3.5 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                />
                <span className="text-xs font-medium text-neutral-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-neutral-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile version (visible on small screens) */}
      <div className="md:hidden">
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border-2 border-dashed border-neutral-600 bg-neutral-900/50 backdrop-blur-sm hover:border-neutral-500 hover:bg-neutral-800/80 transition-all duration-300">
                <skill.icon
                  className={`w-3.5 h-3.5 ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                />
                <span className="text-xs font-medium text-neutral-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-neutral-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
