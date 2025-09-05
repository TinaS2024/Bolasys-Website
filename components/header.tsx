import banner_dunkel from "@/public/banner2_dark.png";
import NewNavbar from "./newnavbar";
import Titel_Subtitel from "@/components/titel_subtitel";

export interface UserProps
{
    opacity: string;
}

const Header = ({opacity}:UserProps) =>
    {
        return(
            <>
            <header id="header" style={{zIndex:"1",height:"30px"}}  className="w-full flex items-center justify-center abstand_unten relative">
            <div className="w-full flex items-center justify-center py-15 "
           style={{
           backgroundImage: `url(${banner_dunkel.src})`,
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           width: "100vw",
           height: "59vh",
           opacity: `${opacity}`,
           zIndex:"1"
         }}>
            <div style={{marginTop:"150px"}} className="flex justify-center flex-row sm:flex-col md:flex-row">
            <Titel_Subtitel titel="GPE" subtitel="" path="/produkte/gpe"></Titel_Subtitel>     
            <Titel_Subtitel titel="DESIGNER" subtitel="" path="/produkte/designer"></Titel_Subtitel>
            <Titel_Subtitel titel="NESTING" subtitel="" path="/produkte/nestingsoftware"></Titel_Subtitel>
            <Titel_Subtitel titel="UI" subtitel="" path="/produkte/ui"></Titel_Subtitel>
            </div>
           <NewNavbar></NewNavbar>
               </div>
           </header>
       
        </>
        )
    }

export default Header;
