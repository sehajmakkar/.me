"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler"; // Your existing theme toggler
import SkillsSection from "./skills";
import { ThemeCustomizer } from "@/components/theme/hybrid-theme-customizer";

// Array of taglines to cycle through
const taglines = [
  "Bringing Ideas to Reality",
  "Full Stack + AI Development",
  "Designing Seamless Experiences",
  "From Concept to Deployment",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCustomizerOpen(true)}
            className="p-2 hover:bg-accent rounded-md transition-colors border border-border"
            title="Customize theme"
          >
            <Palette className="w-4 h-4" />
            <span className="sr-only">customize theme</span>
          </button>
          <ThemeToggler /> {/* Your existing theme toggler that works with next-themes */}
        </div>
      </div>

      {/* --- ANIMATED TAGLINE SECTION --- */}
      <h3 className="mt-2 text-lg flex items-center justify-start text-center h-6">
        <span className="sr-only">tagline</span>
        ✦&nbsp;
        <AnimatePresence mode="wait">
          <motion.span
            key={taglines[index]}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {taglines[index]}
          </motion.span>
        </AnimatePresence>
      </h3>

      <p className="my-5 max-w-2xl text-foreground/80">
        Hi👋🏻 I&apos;m Sehaj, A full stack + AI guy with experience in building{" "}
        <em>smooth</em> experiences for startups and enterprises ranging from{" "}
        <strong>websites</strong>, <strong>applications</strong> and{" "}
        <strong>AI Solutions</strong>. <br /> I Design - Code - Deploy
        seamlessly. Let&apos;s have a chat! 👇🏻
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 ">
        <SkillsSection />
      </div>

      {/* Theme Customizer Modal */}
      <ThemeCustomizer 
        isOpen={isCustomizerOpen} 
        onClose={() => setIsCustomizerOpen(false)} 
      />
    </section>
  );
}