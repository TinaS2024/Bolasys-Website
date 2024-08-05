export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Bolasys GmbH",
  description: "Grafische Software für Graviermaschinen.",
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
      label: "Chat",
      href: "/chat",
    },
    {
      label: "Kontakt",
      href: "/kontakt",
    },
  ],
  navMenuItems: [
    {
      label: "GPE",
      href: "/produkte/gpe",
    },
    {
      label: "Designer",
      href: "/produkte/designer",
    },
    {
      label: "PageAssembler",
      href: "/produkte/pageassembler",
    },
    {
      label: "Cydesigner",
      href: "/produkte/cydesigner",
    },
    {
      label: "A la Carte",
      href: "/produkte/alacarte",
    }
  ],
};
