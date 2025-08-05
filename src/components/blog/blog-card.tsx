import Image from "next/image";
import Link from "next/link";

// Static blog data array
const staticBlogs = [
  {
    id: 1,
    title: "Authentication 101",
    description: "Master web authentication fundamentals: JWT vs sessions, cookies, stateful vs stateless architecture, and security best practices for modern applications.",
    image: "/blogs/auth-blog.webp",
    imageDark: "/blogs/soon.jpg",
    tags: ["Cookies", "JWT", "Sessions"],
    date: "2025-07-06",
    link: "https://medium.com/@sehajmakkar007/authentication-101-05ae1da8c69c"
  },
  {
    id: 2,
    title: "SVG Animations - Coming soon!",
    description: "Learn how to create stunning SVG animations using Framer Motion in your React applications.",
    image: "/blogs/soon.jpg",
    imageDark: "/blogs/soon.jpg",
    tags: ["SVG", "Framer Motion", "Animations"],
    date: "2025-08-10",
    link: ""
  }
];

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    description: string;
    image: string;
    imageDark?: string;
    tags: string[];
    date: string;
    link: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={blog.link} target="_blank" rel="noopener noreferrer">
      <div className="w-full h-full max-w-sm rounded-xl overflow-hidden border group/blog-card bg-background hover:bg-muted/50 duration-100 transition-all ease-in-out">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            width={200}
            height={111}
            className="w-full aspect-[16/9] object-cover scale-105 group-hover/blog-card:scale-100 duration-300 transition-all ease-in-out"
          />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-semibold font-heading line-clamp-2">{blog.title}</h1>
          <div className="flex items-center gap-1 flex-wrap mt-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <p
                key={tag}
                className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs cursor-pointer"
              >
                {tag}
              </p>
            ))}
            {blog.tags.length > 2 && (
              <p className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs">
                +{blog.tags.length - 2}
              </p>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
            {blog.description}
          </p>
          <div className="w-full flex justify-end mt-3">
            <p className="text-xs px-2 py-1 rounded bg-secondary">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { staticBlogs };