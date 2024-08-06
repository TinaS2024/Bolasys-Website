import NextLink from "next/link";
import banner1 from "@/app/bilder/banner2.png";

const Header = () =>
    {
        return(
            <header style={{zIndex:"1"}}  className="w-full flex items-center justify-center abstand_unten">
            <div className="w-full flex items-center justify-center py-60 "
           style={{
           backgroundImage: `url(${banner1.src})`,
           position: "fixed",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           width: "100vw",
           height: "25vh",
         }}>
           </div>
         
         
           <NextLink className="flex justify-start items-center gap-1" href="/">
               <p className="font-medium text-inherit text-5xl py-10"></p>
           </NextLink> 
           </header>

        )
    }

export default Header;
