import type { Experience } from "@/types";

export const experiencesConfig: Experience[] = [
  {
    title: "Application Developer",
    employmentType: "Internship",
    company: {
      name: "Reslink",
      url: "https://www.reslink.org/",
    },
    location: {
      name: "Hybrid",
    }, 
    start: "June 2025",
    end: "Present",
    description: [
      "Worked on Internal company's dashboard, fixed 5+ bugs and optimized performance by 15%.",
      "Developing Solar Design Software using NextJS and ThreeJS for 3D visualization.",
      "Tech: React, Next.js, TypeScript, Three.js, React Three Fiber, MongoDB, Tailwind CSS, Framer Motion"
    ],
  },
  {
    title: "Frontend Developer",
    employmentType: "Internship",
    company: {
      name: "Drizzy",
      url: "https://drizzy.in/",
    },
    location: {
      name: "Remote",
    },
    start: "Jan 2025",
    end: "Feb 2025",
    description: [
      "Developed a 3D car interface using React Fiber and Three.js for interactive UI.",
      "Engineered Drizzy.in's frontend with React.js, Tailwind CSS, and responsive design principles.",
      "Integrated Meta Pixel with custom event tracking for conversion analytics and ad optimization.",
      "Tech: React.js, Three.js, Javascript, Tailwind CSS, Meta Pixel."
    ],
  },
  
];