import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Pavel Hrdina Portfolio",
  description: "The personal portfolio of Pavel Hrdina.",
  url: "https://barebones.superwebthemes.com",
  author: "Pavel Hrdina",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
  documentation: {
    path: "https://docs.superwebthemes.com",
    label: "Documentation",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "My Email",
    url: "mailto:pavelhrdina0411@gmail.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/Pavel-Hrdina",
  },
};
