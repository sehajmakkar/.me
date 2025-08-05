"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import SkillsSection from "./skills";

// Array of taglines to cycle through
const taglines = [
  "Bringing Ideas to Reality",
  "Full Stack + AI Development",
  "Designing Seamless Experiences",
  "From Concept to Deployment",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

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
          {/* <Button size="icon" variant="ghost" className="rounded-full" asChild>
            <Link href="#">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button> */}
          <ThemeToggler />
        </div>
      </div>

      {/* --- ANIMATED TAGLINE SECTION --- */}
      <h3 className="mt-2 text-lg flex items-center justify-start text-center h-6">
        <span className="sr-only">tagline</span>
        ✦&nbsp;
        <AnimatePresence mode="wait">
          <motion.span
            // The key is crucial for AnimatePresence to track the element
            key={taglines[index]}
            initial={{ y: -10, opacity: 0 }} // Start above and invisible
            animate={{ y: 0, opacity: 1 }}     // Animate to original position and visible
            exit={{ y: 10, opacity: 0 }}      // Exit by going down and invisible
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {taglines[index]}
          </motion.span>
        </AnimatePresence>
        {/* &nbsp;✦ */}
      </h3>
      {/* --- END OF ANIMATED TAGLINE SECTION --- */}

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
    </section>
  );
}