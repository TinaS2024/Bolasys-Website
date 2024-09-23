import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Divider } from "@nextui-org/react";

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
      <head></head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">     

    
        <Divider />
   
            <main id="main" className="container mx-auto max-w-7xl pt-20 px-6 flex-grow">
              {children}
            </main>
            <footer id="footer" style={{zIndex:"1"}} className="w-full flex items-center justify-center py-3  bg-black">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              > </Link>
                <Link color="foreground" className="text-lg" href="/impressum"><p className="text-cyan-800">Impressum |</p></Link>
                <Link color="foreground" className="text-lg" href="/agb"><p className="text-cyan-800">&nbsp;AGB</p></Link>

                
             
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
