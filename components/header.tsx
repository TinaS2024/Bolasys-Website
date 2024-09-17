import banner_dunkel from "@/app/bilder/banner2_dark.png";
import NewNavbar from "./newnavbar";

export interface UserProps
{
    titel: string;
    opacity: string;
}

const Header = ({titel,opacity}:UserProps) =>
    {
        return(
            <>
            <header id="header" style={{zIndex:"1",height:"0px"}}  className="w-full flex items-center justify-center abstand_unten relative">
            <div className="w-full flex items-center justify-center py-15 "
           style={{
           backgroundImage: `url(${banner_dunkel.src})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           width: "100vw",
           height: "18vh",
           opacity: `${opacity}`,
           zIndex:"1"
         }}>
            <div className="flex justify-center">
             <h3 style={{fontSize:"26pt",marginTop:"70px",marginBottom: "100px"}} className="text-[#5ec4d2]">{titel}</h3>
            </div>
           </div>
           <NewNavbar></NewNavbar>
           
           </header>
           
</>
        )
    }

export default Header;
