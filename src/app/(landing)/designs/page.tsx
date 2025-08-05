import Image from "next/image";
import { ExternalLink, Twitter } from "lucide-react";

export default function Designs() {
  // Sample data - replace with your actual design data
  const designs = [
    {
      id: 1,
      type: "video", // or "image"
      src: "/designs/video1.mp4", // or image path
      poster: "/designs/img1.png", // for videos
      title: "UI Component Library",
      link: {
        type: "live", // "live" or "twitter"
        url: "https://example.com",
      },
    },
    {
      id: 2,
      type: "video",
      src: "/designs/video2.mp4",
      poster: "/designs/img7.png",
      title: "Dashboard Interface",
      link: {
        type: "twitter",
        url: "https://twitter.com/example",
      },
    },
    {
      id: 3,
      type: "image",
      src: "/designs/img2.png",
      title: "Mobile App Design",
      link: {
        type: "live",
        url: "https://example.com",
      },
    },
    {
      id: 4,
      type: "image",
      src: "/designs/img0.png",
      title: "Landing Page",
      link: {
        type: "live",
        url: "https://example.com",
      },
    },
  ];

  const LineSeparator = () => (
    <div className="my-6">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50" />
    </div>
  );

  const MediaItem = ({
    design,
    index,
  }: {
    design: (typeof designs)[number];
    index: number;
  }) => (
    <div className="group relative">
      {/* Line box container */}
      <div className="relative border border-gray-300 dark:border-gray-700 p-4 bg-transparent">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-400 dark:border-gray-600 -translate-x-px -translate-y-px" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-400 dark:border-gray-600 translate-x-px -translate-y-px" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-400 dark:border-gray-600 -translate-x-px translate-y-px" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-400 dark:border-gray-600 translate-x-px translate-y-px" />

        <div className="relative overflow-hidden rounded-lg">
          {design.type === "video" ? (
            <video
              width={900}
              height={400}
              poster={design.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              preload="metadata"
            >
              <source src={design.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              alt={design.title}
              width={900}
              height={400}
              src={design.src}
              loading="lazy"
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}

          {/* Badge */}
          <div className="absolute bottom-3 right-3">
            <a
              href={design.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/80 dark:bg-white/90 text-white dark:text-black rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-black dark:hover:bg-white"
            >
              {design.link.type === "live" ? (
                <>
                  <ExternalLink size={12} />
                  <span className="hidden sm:inline">View</span>
                </>
              ) : (
                <>
                  <Twitter size={12} />
                  <span className="hidden sm:inline">X</span>
                </>
              )}
            </a>
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400">
          {design.title}
        </p>
      </div>
    </div>
  );

  return (
    <div className="mt-10">
      <div className="pb-12">
        {/* Design Grid */}
        <div className="space-y-8">
          {designs.map((design, index) => (
            <div key={design.id}>
              <MediaItem design={design} index={index} />

              {/* Line Separator - only between items, not after last */}
              {index < designs.length - 1 && <LineSeparator />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
