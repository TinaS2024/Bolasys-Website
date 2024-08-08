import banner_dunkel from "@/app/bilder/banner2_dark.png";

export interface UserProps
{
    titel: string;
    opacity: string;
}

const Header = ({titel,opacity}:UserProps) =>
    {
        return(
            <header id="header" style={{zIndex:"1",height:"200px"}}  className="w-full flex items-center justify-center abstand_unten relative">
            <div className="w-full flex items-center justify-center py-25 "
           style={{
           backgroundImage: `url(${banner_dunkel.src})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           width: "100vw",
           height: "25vh",
           opacity: `${opacity}`,
           zIndex:"1"
         }}>
            <div className="flex justify-center">
             <h3 style={{fontSize:"40pt",marginTop:"100px",marginBottom: "100px"}} className="text-white">{titel}</h3>
            </div>
           </div>
           </header>

        )
    }

export default Header;
