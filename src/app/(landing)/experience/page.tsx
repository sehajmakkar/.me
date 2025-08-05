import { experiencesConfig } from "@/config/experience.config";
import type { Experience as ExperienceType } from "@/types";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const description = `Hey, I'm ${
    siteConfig.creator.name
  }. I've worked with a variety of companies and have experience in different roles. I've also made a few projects on my own. Here's a list of my work experience.
    ${experiencesConfig
      .map((exp) => {
        return `${exp.title} at ${exp.company.name}.`;
      })
      .join("\n")}
    `;
  const keywords = [
    ...siteConfig.keywords,
    "Experience",
    ...experiencesConfig.map((exp) => exp.company.name),
  ];
  const title = `Experience | ${siteConfig.creator.name} | ${siteConfig.name}`;
  const og = `${siteConfig.siteUrl}/experience-og.png`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/experience`,
      siteName: siteConfig.name,
      images: [
        {
          url: og,
          width: 1800,
          height: 1000,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.creator.url,
      title,
      description,
      images: {
        url: og,
        width: 1800,
        height: 1000,
        alt: title,
      },
    },
  };
}

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-xl space-y-10 mt-10">
      {experiencesConfig.map((exp, i) => {
        return <Experience key={i} experience={exp} />;
      })}
    </div>
  );
}

// Helper function to get logo path based on company name
const getCompanyLogo = (companyName: string): string => {
  const logoMap: Record<string, string> = {
    Reslink: "/logo/reslink-logo.jpg",
    Drizzy: "/logo/drizzy-logo.jpg",
  };

  return logoMap[companyName];
};

const Experience = ({ experience }: { experience: ExperienceType }) => {
  const logoPath = getCompanyLogo(experience.company.name);

  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden bg-white/5 border border-white/10">
        <Image
          src={logoPath}
          alt={`${experience.company.name} logo`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 40px, 48px"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between flex-wrap">
          <div className="font-semibold flex flex-wrap items-center gap-1 md:gap-2">
            <a
              href={experience.company.url}
              target="_blank"
              className="hover:underline font-heading text-lg"
            >
              {experience.company.name}
            </a>
            <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
              {experience.employmentType}
            </span>
            <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
              {experience.location.name}
            </span>
          </div>
          <p className="text-muted-foreground text-xs">
            {experience.start} - {experience.end}
          </p>
        </div>
        <p className="tracking-tight">{experience.title}</p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground">
          {experience.description.map((exp, i) => {
            return <li key={i}>{exp}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
