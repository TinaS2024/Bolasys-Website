export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Produkte",
      href: "/produkte",
    },
    {
      label: "Preise",
      href: "/preise",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ],
  navMenuItems: [
    {
      label: "Kiosksysteme",
      href: "kiosksysteme",
    },
    {
      label: "GPE",
      href: "/gpe",
    },
    {
      label: "Designer",
      href: "/designer",
    },
    {
      label: "PageAssembler",
      href: "/page_assembler",
    },
    {
      label: "Cydesigner",
      href: "/cydesigner",
    }
  ],
};
