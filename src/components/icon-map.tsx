import { GitHubLogoIcon, TwitterLogoIcon, DiscordLogoIcon, LinkedInLogoIcon, InstagramLogoIcon, GlobeIcon, VideoIcon } from "@radix-ui/react-icons";
import { Mail } from 'lucide-react'

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.61 19.99h2.543L5.41 2.625H2.747l14.544 18.518z" />
  </svg>
);

export const IconMap = {
  github: <GitHubLogoIcon />,
  twitter: <XIcon />,
  discord: <DiscordLogoIcon />,
  linkedin: <LinkedInLogoIcon />,
  instagram: <InstagramLogoIcon />,
  website: <GlobeIcon />,
  youtube: <VideoIcon />,
  mail: <Mail size={16} />
}