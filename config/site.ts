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
      label: "Nestingsoftware",
      href: "/produkte/nestingsoftware",
    },
    {
      label: "Cydesigner",
      href: "/produkte/cydesigner",
    },
    {
      label: "Bolasys Blog",
      href: "/blogsite",
    }
  ],
};
