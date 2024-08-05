import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NewNavbar from "@/components/newnavbar";
import { Divider } from "@nextui-org/react";
import banner1 from "@/app/bilder/banner2.png";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
        <header className="w-full flex items-center justify-center py-1 bg-[#2695a0]">
          <div  style={{
        // use the src property of the image object
        backgroundImage: `url(${banner1.src})`,
        // other styles
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "50vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:"-10px"
      }}>

          </div>
        <NextLink className="flex justify-start items-center gap-1 " href="/">
            <p className="font-medium text-inherit text-5xl py-10"></p>
        </NextLink> 
        </header>
        <Divider />
        <NewNavbar/>
            <main id="main" className="container mx-auto max-w-7xl pt-20 px-6 flex-grow">
              {children}
            </main>
            <footer id="footer" style={{zIndex:"1"}} className="w-full flex items-center justify-center py-3  bg-[#2695a0]">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-white">Powered by</span>
                <p className="text-cyan-800">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
